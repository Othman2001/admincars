import { useAppState } from "../../services/config";
import { Row, Col } from "antd";
import "./brands.css";
import { Link } from "react-router-dom";

export const Brands = () => {
  const {
    admin: { brands },
  } = useAppState();
  return (
    <Row>
      {brands.map((brand) => (
        <Col className="brands-mb-30" lg={4} md={6} sm={24}>
          <Link to={`/workshops/${brand.id}`}>
            <div className="brands-image-container">
              <img
                className="brands-image"
                alt={brand.name}
                src={brand.imageUrl}
              />
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
