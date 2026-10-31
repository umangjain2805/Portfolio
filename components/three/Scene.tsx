"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  Component,
  type ReactNode,
} from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    document.querySelector(".particle-stage")?.classList.remove("scene-ready");
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
function Points({ mobile }: { mobile: boolean }) {
  const points = useRef<THREE.Points>(null);
  const progress = useRef({ value: 0 });
  const elapsed = useRef(0);
  const scrollEnergy = useRef(0);
  const scrollDirection = useRef(1);
  const rotation = useRef(0);
  const count = mobile ? 1500 : 5000;
  const { base, positions, sizes, stars } = useMemo(() => {
    const base = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2,
        r = Math.sqrt(1 - y * y),
        t = i * 2.399963;
      base.set([Math.cos(t) * r * 2.3, y * 2.3, Math.sin(t) * r * 2.3], i * 3);
      sizes[i] = 1 + (i % 7) / 7;
    }
    const stars = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      stars.set(
        [
          Math.sin(i * 73.13) * 12,
          Math.cos(i * 32.71) * 8,
          Math.sin(i * 9.31) * 5 - 3,
        ],
        i * 3,
      );
    }
    return { base, positions: base.slice(), sizes, stars };
  }, [count]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stage = document.querySelector<HTMLElement>(".particle-stage");
    const energize = (event: WheelEvent) => {
      scrollEnergy.current = Math.max(
        scrollEnergy.current,
        Math.min(Math.abs(event.deltaY) / 180, 1),
      );
      if (event.deltaY) scrollDirection.current = Math.sign(event.deltaY);
    };
    window.addEventListener("wheel", energize, { passive: true });
    const tween = gsap.to(progress.current, {
      value: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: () =>
          `+=${(document.getElementById("home")?.offsetHeight || innerHeight) * 0.85}`,
        scrub: 0.25,
        onUpdate: (self) => {
          scrollEnergy.current = Math.max(
            scrollEnergy.current,
            Math.min(Math.abs(self.getVelocity()) / 1400, 1),
          );
          scrollDirection.current = self.direction;
          if (stage) stage.dataset.scrollProgress = self.progress.toFixed(4);
        },
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      window.removeEventListener("wheel", energize);
    };
  }, []);
  useFrame((state, delta) => {
    const p = points.current;
    if (!p) return;
    elapsed.current += Math.min(delta, 0.05);
    const time = elapsed.current;
    const dt = Math.min(delta, 0.05);
    scrollEnergy.current = THREE.MathUtils.damp(
      scrollEnergy.current,
      0,
      3.5,
      dt,
    );
    rotation.current +=
      dt * (0.05 + scrollEnergy.current * scrollDirection.current * 1.3);
    const spread = THREE.MathUtils.clamp(progress.current.value / 0.65, 0, 1);
    const position = p.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const k = i * 3;
      const breath =
        1 +
        Math.sin(time * 0.5 + i * 0.07) *
          (0.008 + scrollEnergy.current * 0.014);
      let x = base[k] * breath,
        y = base[k + 1] * breath,
        z = base[k + 2] * breath;
      const drift = spread * 2.5;
      x += Math.sin(i * 15.31) * drift;
      y += Math.cos(i * 13.17) * drift;
      z += Math.sin(i * 2.19) * drift;
      if (!mobile) {
        const dx = x - state.pointer.x * 3,
          dy = y - state.pointer.y * 2;
        const d = dx * dx + dy * dy;
        if (d < 0.5) {
          x += dx * (0.5 - d) * 0.22;
          y += dy * (0.5 - d) * 0.22;
        }
      }
      position.setXYZ(i, x, y, z);
    }
    position.needsUpdate = true;
    p.rotation.y = THREE.MathUtils.lerp(
      p.rotation.y,
      rotation.current + progress.current.value * 0.8 + state.pointer.x * 0.15,
      0.05,
    );
    p.rotation.x = THREE.MathUtils.lerp(
      p.rotation.x,
      -state.pointer.y * 0.1,
      0.05,
    );
    const mat = p.material as THREE.ShaderMaterial;
    mat.uniforms.opacity.value = 0.85 - spread * 0.65;
    mat.uniforms.shrink.value = 1 - spread * 0.4;
  });
  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{ opacity: { value: 1 }, shrink: { value: 1 } }}
          vertexShader={
            "attribute float size; uniform float shrink; varying float depth; void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);depth=smoothstep(-10.0,-4.0,mv.z);gl_PointSize=size*10.0*shrink/(-mv.z);gl_Position=projectionMatrix*mv;}"
          }
          fragmentShader={
            "uniform float opacity; varying float depth; void main(){float d=length(gl_PointCoord-0.5);if(d>0.5)discard;gl_FragColor=vec4(vec3(0.86,0.84,0.79),opacity*(0.3+depth*0.7)*(1.0-smoothstep(0.15,0.5,d)));}"
          }
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[stars, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#edebe6"
          size={0.012}
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </points>
    </>
  );
}
export default function Scene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(true);
  const [mobile] = useState(
    () => matchMedia("(max-width: 767px), (pointer: coarse)").matches,
  );
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    let visible = true;
    const update = () => setRunning(visible && !document.hidden);
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      update();
    });
    observer.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <Boundary>
      <div ref={wrapper} className="webgl-scene">
        <Canvas
          frameloop={running ? "always" : "never"}
          dpr={[1, mobile ? 1.5 : 2]}
          camera={{ position: [0, 0, 7], fov: 48 }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          onCreated={() =>
            wrapper.current?.parentElement?.classList.add("scene-ready")
          }
        >
          <Points mobile={mobile} />
        </Canvas>
      </div>
    </Boundary>
  );
}
