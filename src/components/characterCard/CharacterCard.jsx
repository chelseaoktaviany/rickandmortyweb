import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CharacterCard = ({ id, name, image }) => {
  return (
    <Card className="my-3" style={{ width: "auto" }}>
      <Link to={`/characters/${id}`}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          width={200}
          height={350}
          style={{ objectFit: "cover" }}
        />
        <Card.Title className="px-2 py-3" style={{ color: "#0a0a0a" }}>
          {name}
        </Card.Title>
      </Link>
    </Card>
  );
};

export default CharacterCard;
