import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link to={`/post/${item.id}`}>
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
            <p className="card__description">{item.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
