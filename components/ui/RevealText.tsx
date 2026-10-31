export default function RevealText({
  before,
  accent,
  after = "",
  id,
  hero = false,
}: {
  before: string;
  accent?: string;
  after?: string;
  id?: string;
  hero?: boolean;
}) {
  const Tag = hero ? "h1" : "h2";
  if (hero) {
    const words = before.split(" ");
    return (
      <h1 id={id} className="display hero-title">
        <span className="hero-line">{words.slice(0, 4).join(" ")} </span>
        <span className="hero-line">{words.slice(4).join(" ")} </span>
        <span className="hero-line hero-line-final">
          <em>{accent} </em>
          <span className="hero-final-word">{after}</span>
        </span>
      </h1>
    );
  }
  return (
    <Tag id={id} className={`display reveal-text ${hero ? "hero-title" : ""}`}>
      {before.split(" ").map((w, i) => (
        <span className="reveal-word" key={i}>
          {w}{" "}
        </span>
      ))}
      {accent && <em className="reveal-word">{accent} </em>}
      {after &&
        after.split(" ").map((w, i) => (
          <span className="reveal-word" key={`a${i}`}>
            {w}{" "}
          </span>
        ))}
    </Tag>
  );
}
