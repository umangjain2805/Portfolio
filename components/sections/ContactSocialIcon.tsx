/** Single-color platform marks, used only in the closing contact section. */
export default function ContactSocialIcon({ name }: { name: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  if (name === "github")
    return (
      <svg {...props}>
        <path d="M9 19c-4.3 1.3-4.3-2.1-6-2.6M15 22v-3.5c0-1 .1-1.5-.5-2.1 3.2-.4 6.5-1.5 6.5-7.1 0-1.6-.6-2.8-1.5-3.8.2-.4.7-1.9-.1-3.5 0 0-1.2-.4-3.9 1.5a13.3 13.3 0 0 0-7 0C5.8 1.6 4.6 2 4.6 2c-.8 1.6-.3 3.1-.1 3.5A5.5 5.5 0 0 0 3 9.3c0 5.6 3.3 6.7 6.5 7.1-.6.6-.6 1.2-.5 2.1V22" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10.5V17m4-6.5V17m0-3.8c0-3.5 5-3.5 5 0V17" />
        <circle cx="7.5" cy="7.3" r=".6" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "leetcode")
    return (
      <svg {...props}>
        <path d="m15.5 2-9 8.8a4 4 0 0 0 0 5.7l3.4 3.4a4 4 0 0 0 5.6 0l2-2M9 8l3-3 5.5 5.5M11 14h10" />
      </svg>
    );
  return (
    <svg {...props}>
      <path d="M7 11a4 4 0 0 1-2-7 4 4 0 0 1 5-1.5 4 4 0 0 1 7 1 3.8 3.8 0 0 1 0 7.5v3H7zM7 17h10M8 14v-3m8 3v-3M8 20c2.5 2 5.5 2 8 0" />
    </svg>
  );
}
