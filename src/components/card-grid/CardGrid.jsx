import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../card/Card";

export const CardGrid = ({ section }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://krat.es/7494a720b99bec5a4d1a/${section}`
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card-grid">
      <div className="card-grid__content">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
