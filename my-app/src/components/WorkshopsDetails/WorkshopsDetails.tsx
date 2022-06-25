import { Col, Row } from "antd";
import { CardComponent } from "./Card";

interface IWorkshopDetailsProps {
  workshops: any[];
}

export const WorkshopsDetails = ({ workshops }: IWorkshopDetailsProps) => {
  return (
    <>
      <Row>
        {workshops?.map((workshop: any) => {
          return (
            <Col span={8}>
              <CardComponent
                title={workshop.title}
                description={workshop.description}
                brandName={workshop.brand}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
