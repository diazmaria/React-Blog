import { CardGrid } from "../card-grid/CardGrid";

export const BlogSection = ({ hideDescription }) => {
  return (
    <div className="blog-section">
      <hr />
      <h2 className="blog-section__title">Latest Posts</h2>
      <hr />
      <div className="home__content">
        {!hideDescription && (
          <div className="home__description">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </div>
        )}
      </div>
      <CardGrid />
    </div>
  );
};
