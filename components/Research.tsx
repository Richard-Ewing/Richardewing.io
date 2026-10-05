import Link from "next/link";

const research = [
  {
    category: "CIO",
    title: "Your Claude API bill is higher than your revenue",
    date: "05.21.26",
    href: "/compare/why-anthropic-bills-spike-with-tool-use"
  },
  {
    category: "FRAMEWORK",
    title: "The Inference Dividend Model",
    date: "08.13.26",
    href: "/concepts/inference-dividend-model"
  },
  {
    category: "CIO",
    title: "GitHub Copilot is generating more code than your team can review",
    date: "06.10.26",
    href: "/compare/why-copilot-didnt-reduce-engineering-headcount"
  },
  {
    category: "PRODUCT",
    title: "Why your CFO hates your agile transformation",
    date: "03.12.26",
    href: "/compare/vibe-coding-vs-agile"
  },
  {
    category: "CIO",
    title: "Salesforce and SAP are putting AI agents inside your workflows",
    date: "08.27.26",
    href: "/runtime-failure-index"
  }
];

export default function Research() {
  return (
    <section className="section research">
      <div className="container">
        <div className="section-meta">
          <span>RESEARCH</span>
          <Link href="/research">VIEW ALL ↗</Link>
        </div>
        <div className="research-intro">
          <h2>
            Ideas worth <br /> <em>following.</em>
          </h2>
          <p>
            Research on AI economics, product strategy, governance, and the changing economics of software.
          </p>
        </div>
        <div className="research-list">
          {research.map((item, index) => (
            <Link
              href={item.href}
              className="research-row"
              key={index}
            >
              <span className="research-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="research-category">
                {item.category}
              </span>
              <h3>{item.title}</h3>
              <span className="research-date">
                {item.date}
              </span>
              <span className="research-arrow">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
