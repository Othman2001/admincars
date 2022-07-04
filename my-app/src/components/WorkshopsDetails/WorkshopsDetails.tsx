import { Col, Row } from "antd";
import { CardComponent } from "./Card";

interface IWorkshopDetailsProps {
  workshops: any[];
}

export const WorkshopsDetails = ({ workshops }: IWorkshopDetailsProps) => {
  return (
    <>
      <Row>
        {workshops?.map((workshop: any, index: any) => {
          return (
            <div
              style={{
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Col span={6} key={index}>
                <CardComponent
                  title={workshop.title}
                  description={workshop.description}
                  brandName={workshop.brand}
                  key={index}
                />
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
};
