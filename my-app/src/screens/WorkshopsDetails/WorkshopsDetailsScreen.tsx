import { Button, Col, Row } from "antd";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LayoutComponent from "../../components/Layout/Layout";
import { WorkshopsDetails } from "../../components/WorkshopsDetails/WorkshopsDetails";
import { useActions, useAppState } from "../../services/config";

export default function WorkshopsDetailsScreen() {
  let { name } = useParams();
  const {
    admin: { fetchWorkshops },
  } = useActions();
  const {
    admin: { workshops },
  } = useAppState();

  useEffect(() => {
    if (name) {
      fetchWorkshops({ name });
    }
  }, []);

  return (
    <LayoutComponent selectedKey="4">
      <Row>
        <Col span={20}>
          <h1> workshops </h1>
        </Col>
        <Col span={4}>
          <Link to={`/workshops/add/${name}`}>
            <Button>Add Workshop</Button>
          </Link>
        </Col>
      </Row>
      {/* @ts-ignore */}
      <WorkshopsDetails workshops={workshops && workshops} />;
    </LayoutComponent>
  );
}
