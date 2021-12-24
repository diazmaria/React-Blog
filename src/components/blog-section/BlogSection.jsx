import { useParams } from "react-router";
import { CardGrid } from "../card-grid/CardGrid";

export const BlogSection = () => {
  const { slug = "trending" } = useParams();

  return (
    <div className="blog-section">
      <hr />
      <h2 className="blog-section__title">{slug}</h2>
      <hr />
      <CardGrid section={slug} />
    </div>
  );
};
