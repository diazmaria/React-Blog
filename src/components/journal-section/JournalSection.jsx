import { useParams } from "react-router";
import { CardGrid } from "../card-grid/CardGrid";

export const JournalSection = () => {
  const { slug } = useParams();

  return (
    <div className="journal-section">
      <h2 className="journal-section__title">{slug}</h2>
      <hr />
      <CardGrid section={slug} />
    </div>
  );
};
