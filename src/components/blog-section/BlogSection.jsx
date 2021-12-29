import { useParams } from "react-router";
import { CardGrid } from "../card-grid/CardGrid";

export const BlogSection = () => {
  const { slug = "latest" } = useParams();

  return (
    <div className="blog-section">
      <h2 className="blog-section__title">{slug}</h2>
      <hr />
      <CardGrid section={slug} />
    </div>
  );
};
