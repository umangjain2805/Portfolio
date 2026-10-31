"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { content as c } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
import ContactSocialIcon from "./ContactSocialIcon";
export default function Contact() {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(c.email);
      setMessage(c.ui.copied);
    } catch {
      setMessage(c.ui.copyFailed);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2500);
  }
  return (
    <section
      id="contact"
      className="section paper contact"
      aria-labelledby="contact-heading"
    >
      <div className="paper-wipe" aria-hidden="true" />
      <div className="container">
        <Eyebrow index="VII">{c.contact.eyebrow}</Eyebrow>
        <div className="contact-heading-layout">
          <RevealText
            id="contact-heading"
            before={c.contact.title}
            accent={c.contact.accent}
          />
        </div>
        <div className="contact-bottom">
          <div className="contact-intro">
            <p>{c.contact.description}</p>
            <div className="contact-actions">
              <a
                className="button primary contact-cta"
                href={`mailto:${c.email}`}
                data-magnetic
              >
                <span>{c.contact.cta}</span>
                <span className="contact-arrow-track" aria-hidden="true">
                  <ArrowUpRight />
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </div>
          <div className="contact-links">
            <span className="mono contact-email-label">Email</span>
            <div className="contact-email-row">
              <a className="email-link" href={`mailto:${c.email}`}>
                {c.email}
              </a>
              <button
                className="icon-button copy-button"
                type="button"
                onClick={copy}
                aria-label={c.ui.copy}
                aria-describedby="contact-copy-status"
              >
                {message === c.ui.copied ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            <span
              id="contact-copy-status"
              className="contact-copy-status mono"
              role="status"
              aria-atomic="true"
            >
              {message}
            </span>
            <div className="contact-phone">
              <span className="mono contact-email-label">Phone</span>
              <a className="phone-link" href="tel:9238170205">
                92381 70205
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-social-row">
          <span className="mono contact-social-label">{c.ui.elsewhere}</span>
          <nav className="contact-social-grid" aria-label={c.ui.elsewhere}>
            {c.contact.socials.map((s) => (
              <a
                className="contact-social-link"
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-social-icon" aria-hidden="true">
                  <ContactSocialIcon name={s.icon} />
                </span>
                <span className="contact-social-name">{s.name}</span>
                <span className="contact-arrow-track" aria-hidden="true">
                  <ArrowUpRight />
                  <ArrowUpRight />
                </span>
                <span className="sr-only"> ({c.ui.external})</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
