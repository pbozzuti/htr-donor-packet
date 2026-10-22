export default function Timeline({ items }) {
  return (
    <>
      <h3 className="timeline-label">Timeline</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.date}>
            <span className="timeline-date">{item.date}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
