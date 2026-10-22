export default function Sponsors({ items }) {
  return (
    <section className={`sponsors${items.length === 1 ? ' sponsors--single' : ''}`}>
      {items.map((sponsor) => (
        <div className="sponsor" key={sponsor.name}>
          <h2>{sponsor.name}</h2>
        </div>
      ))}
    </section>
  );
}
