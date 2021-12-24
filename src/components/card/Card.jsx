import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <Link to="">
      <article className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url("https://i.ytimg.com/vi/aJ5dZaWofmg/hqdefault.jpg")`,
          }}
        ></div>
        <div>
          <div className="card__metadata">
            <p className="card__title">Lorem ipsum dolor sit</p>
            <div className="card__category">Soft Skills</div>
            <p className="card__description">
              Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
              kullanılan...
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};
