const products = [
  {
    number: "01",
    name: "Exogram",
    description: "A deterministic governance layer for intelligent systems.",
    url: "/exogram",
    displayUrl: "exogram.ai",
    className: "product-exogram"
  },
  {
    number: "02",
    name: "CareerWin",
    description: "An intelligence system for navigating the labor market.",
    url: "/careerwin",
    displayUrl: "careerwin.ai",
    className: "product-careerwin"
  }
];

export default function Products() {
  return (
    <section className="section products">
      <div className="container">
        <div className="section-meta">
          <span>BUILT</span>
          <span>PRODUCTS</span>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <a
              href={product.url}
              className={`product-card ${product.className}`}
              key={product.name}
            >
              <div className="product-top">
                <span>{product.number}</span>
                <span>PRODUCT ↗</span>
              </div>
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <div className="product-footer">
                <span>{product.displayUrl}</span>
                <span>Explore ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
