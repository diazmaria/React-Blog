/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const takeawayPoint = (takeaway) => (
  <li className="post__item">
    <h2>
      <b>{takeaway?.title}</b>
    </h2>

    <p>{takeaway?.takeaway}</p>
  </li>
);

export const Post = () => {
  const { slug } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://krat.es/7494a720b99bec5a4d1a/${slug}`
        );
        setData(response[0]);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="post">
      <h2 className="post__title">{data.title}</h2>
      <hr />
      <div className="post__content">
        <img alt="post-image" className="post__image" src={data.image} />
        <br />
        <h3>🔑 KEY TAKEAWAYS</h3>
        <ul>{data?.takeaways?.map((takeaway) => takeawayPoint(takeaway))}</ul>
      </div>
    </div>
  );
};
