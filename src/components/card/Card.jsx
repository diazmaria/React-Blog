import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link to={`/blog/${item.id}`}>
      <article className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        ></div>
        <div>
          <div className="card__metadata">
            <p className="card__title">{item.title}</p>
            <div className="card__category">{item.category}</div>
            <p className="card__description">{item.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
