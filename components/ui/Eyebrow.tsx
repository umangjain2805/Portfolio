import Scramble from "./Scramble";
export default function Eyebrow({
  children,
  index,
}: {
  children: string;
  index: string;
}) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-name">
        <i aria-hidden="true" />
        <Scramble>{children}</Scramble>
      </span>
      <span className="section-number" aria-hidden="true">
        {index}
      </span>
    </div>
  );
}
