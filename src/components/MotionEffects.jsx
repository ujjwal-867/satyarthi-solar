/**
 * Highlighted headline helper — applies clean brand accent color to target keywords
 * without distracting 3D word-flip animations.
 */
export function ExpressiveKineticText({
  text,
  highlightWords = [],
  highlightClass = "text-blue-700",
  className = ""
}) {
  const words = text.split(" ");
  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9₹+-]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase() || hw.toLowerCase() === word.toLowerCase()
        );
        return (
          <span key={i} className={isHighlighted ? highlightClass : ""}>
            {word}{i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

export function KineticMarqueeStrip() {
  return null;
}

export function CollaborativeCursorsOverlay() {
  return null;
}

export function InteractiveZapBurstButton() {
  return null;
}

export function LiveActivityStreamBadge() {
  return null;
}
