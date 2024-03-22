import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const LocationCard = ({ locationId, name, type, dimension }) => {
  return (
    <Card className="my-3" style={{ width: "auto" }}>
      <Link to={`/locations/${locationId}`}>
        <Card.Title className="px-2 py-2" style={{ color: "#0a0a0a" }}>
          {name}
        </Card.Title>
        <Card.Text className="px-2 py-2 text-muted">
          {type}, {dimension}
        </Card.Text>
      </Link>
    </Card>
  );
};

export default LocationCard;
