import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const Blog = () => {
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
    <div className="blog-section">
      <hr />
      <h2 className="blog-section__title">{data.title}</h2>
      <hr />
      <div
        className="blog__image"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <h3 className="blog__highlights-title">
        Highlights (or should this be called intro?)
      </h3>
      <p className="blog__highlights">{data.highlights}</p>
      <div className="split">
        <div className="leftPane">
          <h4>Maria's key takeaway</h4>
          <p>{data.maria}</p>
        </div>
        <div className="rightPane">
          <h4>Suraj's key takeaway</h4>
          <p>{data.suraj}</p>
        </div>
      </div>
    </div>
  );
};
