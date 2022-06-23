import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { Firebase } from "../../firebase";

interface IModalComponentProps {
  brandName: string;
  workshopName: string;
}

export const ModalComponent = ({
  brandName,
  workshopName,
}: IModalComponentProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onDescriptionChangeFinish = (values: {
    description: string;
    descriptionAr: string;
  }) => {
    const db = getFirestore(Firebase);
    const workshopRef = doc(
      db,
      `carWorkshops/${brandName}/workshops/${workshopName}`
    );
    updateDoc(workshopRef, {
      description: values.description,
      descriptionAr: values.descriptionAr,
    });
    console.log(values, "values");
  };
  const onLocationChangeFinish = (values: { lat: number; long: number }) => {};
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        modify data
      </Button>
      <Modal
        title="Workshop data"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onLocationChangeFinish} onFinishFailed={onFinishFailed}>
          <h3>Workshop Location</h3>
          <Form.Item
            rules={[
              {
                required: true,
                type: "number",
                message: "Please input your location!",
              },
            ]}
            name="long"
          >
            <Input type="number" placeholder="long" />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                type: "number",
                message: "Please input your location!",
              },
            ]}
            name="lat"
          >
            <Input type="number" placeholder="lat" />
          </Form.Item>
          <Button type="primary">change location </Button>
        </Form>

        <Form
          onFinishFailed={onFinishFailed}
          onFinish={onDescriptionChangeFinish}
        >
          <h3>Workshop Description</h3>
          <Form.Item
            required
            rules={[{ required: true, message: "Please input description!" }]}
            name="descriptionAr"
          >
            <Input placeholder="arabic description" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input description!" }]}
            name="description"
          >
            <Input placeholder="english description" />
          </Form.Item>
          <Button htmlType="submit" type="primary" onClick={() => {}}>
            change description
          </Button>
        </Form>
      </Modal>
    </>
  );
};
