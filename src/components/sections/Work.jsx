import work from "../../content/work.content";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Tag from "../ui/Tag";

export default function Work() {
  return (
    <section id="work">
      <SectionTitle
        title="Product & Platform Work"
        subtitle="Enterprise platforms built with embedded GenAI and workflow intelligence."
      />

      <div className="work-grid">
        {work.map((item) => (
          <Card key={item.title}>
            <div className="work-header">
              <h3>{item.title}</h3>
              <span className="work-year">{item.year}</span>
            </div>

            <p>{item.description}</p>

            <div className="work-tags">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
