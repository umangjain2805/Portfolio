"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { content as c, nav } from "@/data/content";
import Button from "./ui/Button";
export default function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="header">
        <a
          href="#home"
          className="monogram"
          aria-label={`${c.monogram} — ${c.name}`}
        >
          {c.monogram}
        </a>
        <nav aria-label={c.ui.navigate} className="desktop-nav">
          {nav
            .filter((n) => n[0] !== "proof")
            .map(([id, label]) => (
              <a key={id} href={`#${id}`} data-nav={id}>
                {label}
              </a>
            ))}
        </nav>
        {c.resume.enabled && (
          <div className="header-resume">
            <Button href={c.resume.url}>{c.resume.label}</Button>
          </div>
        )}
        <button
          ref={toggle}
          className="icon-button menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={c.ui.menu}
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label={c.ui.navigate}
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
      >
        <div className="mobile-menu-top">
          <span className="monogram">{c.monogram}</span>
          <button
            className="icon-button"
            aria-label={c.ui.closeMenu}
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>
        <nav>
          {nav.map(([id, label, roman]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span className="mono">{roman}</span>
              {label}
            </a>
          ))}
        </nav>
        {c.resume.enabled && (
          <a className="text-link" href={c.resume.url}>
            {c.resume.label} ↗
          </a>
        )}
      </dialog>
    </>
  );
}
