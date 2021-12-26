import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <h2 className="post__title">Docker</h2>
      <hr />
      <div className="post__content">
        <img
          alt="post-image"
          className="post__image"
          src="https://i.ibb.co/mtMZfHK/docker-containers.jpg"
        />
        <br />
        <h3>🔑 KEY TAKEAWAYS</h3>
        <ul>
          <li className="post__item">
            <h2>
              <b>What is Docker?</b>
            </h2>

            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
          </li>
          <li className="post__item">
            <h2>
              <b>What is a Docker image?</b>
            </h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
          </li>
          <li className="post__item">
            <h2>
              <b>What is a Docker container?</b>
            </h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
          </li>
          <li className="post__item">
            <h2>
              <b>Docker commands</b>
            </h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
          </li>
          <li className="post__item">
            <h2>
              <b>How to create your own Docker Image?</b>
            </h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
