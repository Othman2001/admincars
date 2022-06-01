import React from "react";
import LayoutComponent from "../components/Layout";
import { Form, Input, Button } from "antd";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Firebase } from "../firebase";
// @ts-ignore

export const AddUser = () => {
  const onFinish = (values: {
    Email: string;
    password: string;
    FirstName: string;
    lastname: string;
    phoneNumber: string;
  }) => {
    console.log(values, "values");
    // @ts-ignore
    const auth = getAuth(Firebase);
    // @ts-ignore
    const db = getFirestore(Firebase);
    const userDoc = collection(db, "users");

    createUserWithEmailAndPassword(auth, values.Email, values.password).then(
      (user) => {
        addDoc(userDoc, {
          id: user.user.uid,
          firstName: values.FirstName,
          lastName: values.lastname,
          phoneNumber: values.phoneNumber,
          email: values.Email,
          role: "user",
        });
      }
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutComponent>
      <div
        style={{
          marginTop: 50,
          marginLeft: 30,
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 10 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            tooltip="Enter the email of the user you want to add"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input  email ",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="First Name"
            tooltip="Enter the first name of the user"
            name="FirstName"
            rules={[
              {
                required: true,
                message: "Please input  first name ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            tooltip="Enter the last name of the user you want to add "
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input  Last Name ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            tooltip="enter correct phone number for user"
            rules={[{ required: true, message: "Please user phone number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            tooltip="make sure to enter a strong password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LayoutComponent>
  );
};
