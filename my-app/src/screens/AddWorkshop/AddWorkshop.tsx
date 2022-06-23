import { Button, Form, Input } from "antd";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutComponent from "../../components/Layout/Layout";
import { Firebase } from "../../firebase";

export const AddWorkshop = () => {
  let { name } = useParams();
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onFinished = (values: {
    closedHours: number;
    description: string;
    descriptionAr: string;
    location: string;
    lat: string;
    lng: string;
    name: string;
    openHours: number;
  }) => {
    const db = getFirestore(Firebase);

    const docRef = doc(db, `carWorkshops/${name}/workshops/${values.name}`);
    setDoc(docRef, {
      brand: name,
      title: values.name,
      name: values.name,
      closedHours: values.closedHours,
      openHours: values.openHours,
      closeHours: values.closedHours,
      description: values.description,
      descriptionAr: values.descriptionAr,
      location: values.location,
      distance: 0,
      id: `2001232${Math.floor(Math.random() * 100)}`,
      geopoint: {
        latitude: parseFloat(values.lat),
        longitude: parseFloat(values.lng),
      },
    });
  };
  return (
    <LayoutComponent selectedKey="4">
      <>
        <h1> add workshop in {name} </h1>
        <Form onFinish={onFinished} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Workshop Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label=" description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please workshop Description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="arabic description"
            name="descriptionAr"
            rules={[
              {
                required: true,
                message: "Please workshop Description arabic version!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="open hour"
            name="openHours"
            rules={[
              {
                required: true,
                message: "please enter open hour for the workshop",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="closed hour"
            name="closedHours"
            rules={[
              {
                required: true,
                message: "please enter closed hour for the workshop",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="location lattitude"
            name="lat"
            rules={[
              {
                required: true,
                message: "please enter Location Lat",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="location longitude"
            name="lng"
            rules={[
              {
                required: true,
                message: "please enter Location lng",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="location"
            name="location"
            rules={[
              {
                required: true,
                message: "please enter Location address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button size="large" type="primary" htmlType="submit">
              {" "}
              Submit
            </Button>
          </div>
        </Form>
      </>
    </LayoutComponent>
  );
};
