import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[85vh] px-12 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-600 font-medium mb-4">
            Hello, I'm
          </p>

          <h1 className="text-7xl font-bold text-slate-900">
            Umang Jain
          </h1>

          <h2 className="text-3xl mt-4 text-slate-600">
            Frontend Developer
          </h2>

          <p className="mt-8 text-lg text-slate-500 max-w-lg">
            I build modern React applications with clean UI,
            smooth animations, and excellent user experiences.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-8 py-4 rounded-full bg-black text-white">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-slate-300">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div
            className="
            absolute
            w-80
            h-80
            bg-gradient-to-r
            from-purple-300
            to-green-200
            rounded-full
            blur-3xl
            opacity-60
          "
          />

          <div
            className="
            relative
            w-[380px]
            h-[450px]
            rounded-[40px]
            bg-white/30
            backdrop-blur-xl
            border
            border-white/40
            shadow-xl
            flex
            items-center
            justify-center
          "
          >
            <span className="text-2xl font-semibold">
              Your Photo
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;