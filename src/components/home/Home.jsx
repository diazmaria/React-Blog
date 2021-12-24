import { BlogSection } from "../blog-section/BlogSection";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__description">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </div>
      </div>
      <BlogSection />
    </div>
  );
};
