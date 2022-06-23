import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutComponent from "../../components/Layout/Layout";
import { useActions, useAppState } from "../../services/config";
import { CardComponent } from "./Card";

interface IWorkshopDetailsProps {
  workshops: any[];
}

export const WorkshopsDetails = ({ workshops }: IWorkshopDetailsProps) => {
  useEffect(() => {
    console.log(workshops, "state");
  }, []);

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
