import Link from "next/link";

const concepts = [
  {
    number: "01",
    title: "Inference",
    text: "Intelligence introduces a variable cost into software.",
    href: "/framework"
  },
  {
    number: "02",
    title: "Economics",
    text: "Every intelligent action creates a new unit-economic relationship.",
    href: "/framework"
  },
  {
    number: "03",
    title: "Governance",
    text: "Systems need constraints before intelligence becomes expensive.",
    href: "/exogram"
  }
];

export default function Thesis() {
  return (
    <section className="section thesis">
      <div className="container">
        <div className="section-meta">
          <span>THE THESIS</span>
          <span>PRODUCT ECONOMICS</span>
        </div>
        <div className="thesis-statement">
          Software used to scale. <br />
          <em>Intelligence compounds.</em>
        </div>
        <div className="thesis-grid">
          {concepts.map((item) => (
            <Link href={item.href} className="concept-card" key={item.number}>
              <div className="concept-top">
                <span>{item.number}</span>
                <span>↗</span>
              </div>
              <div className="concept-bottom">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
