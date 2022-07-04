import { Button, Card } from "antd";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Firebase } from "../../firebase";
import { ModalComponent } from "./ModalComponent";
interface ICardProps {
  title: string;
  brandName: string;
  description: string;
}
export const CardComponent = ({
  title,
  brandName,
  description,
}: ICardProps) => {
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card
          title={`${title}Workshop`}
          bordered={true}
          style={{
            width: 500,
            marginBottom: 10,
          }}
        >
          <h3> brand {brandName} </h3>
          <h4 style={{}}> {description} </h4>
          <ModalComponent brandName={brandName} workshopName={title} />

          <Button
            style={{
              marginLeft: 20,
            }}
            danger
            onClick={() => {
              const db = getFirestore(Firebase);
              const ref = doc(
                db,
                `carWorkshops/${brandName}/workshops/${title}`
              );
              deleteDoc(ref);
            }}
          >
            delete
          </Button>
        </Card>
      </div>
    </>
  );
};
