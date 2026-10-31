import { ArrowUpRight } from "lucide-react";
export default function Button({
  children,
  href,
  primary = false,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { primary?: boolean }) {
  return (
    <a
      href={href}
      className={`button ${primary ? "primary" : "secondary"}`}
      data-magnetic={primary || undefined}
      {...props}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
