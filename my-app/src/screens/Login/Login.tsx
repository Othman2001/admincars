import { Form, Input, Button, Checkbox } from "antd";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Firebase } from "../../firebase";
import { useActions } from "../../services/config";

export const Login = () => {
  let navigate = useNavigate();
  const {
    admin: { setUser },
  } = useActions();
  const onFinish = (values: { email: string; password: string }) => {
    const auth = getAuth(Firebase);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (user) => {
        return setPersistence(auth, browserLocalPersistence).then(async () => {
          return await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          ).then(async (result) => {
            const db = getFirestore(Firebase);
            const adminCollection = doc(db, `admins/${user.user.uid}`);

            getDoc(adminCollection).then((docSnap) => {
              if (docSnap.exists()) {
                //   @ts-ignore
                setUser(user.user);
                console.log(user, "user@");
                navigate("/", { replace: true });
              } else {
                alert("you are not admin");
              }
            });
            return result.user;
          });
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column",
          paddingTop: 150,
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
