import { Card } from "../card/Card";

export const CardGrid = () => {
  const items = [];

  for (let i = 0; i < 6; i++) {
    items.push(<Card key={Math.random()}/>); //Change this for id
  }

  return (
    <div className="card-grid">
      <div className="card-grid__content">{items}</div>
    </div>
  );
};
