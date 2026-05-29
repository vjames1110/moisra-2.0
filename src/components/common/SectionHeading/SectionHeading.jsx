import "./SectionHeading.css";

function SectionHeading({
  subtitle,
  title,
  center = true,
}) {
  return (
    <div
      className={`section-heading ${
        center ? "center" : ""
      }`}
    >
      <span>{subtitle}</span>

      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;