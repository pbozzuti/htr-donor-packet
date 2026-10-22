export default function Tiers({ items }) {
  return (
    <section className="tiers">
      {items.map((tier) => (
        <div className="tier" key={tier.amount}>
          <h2>{tier.amount}</h2>
          <p>{tier.text}</p>
        </div>
      ))}
    </section>
  );
}
