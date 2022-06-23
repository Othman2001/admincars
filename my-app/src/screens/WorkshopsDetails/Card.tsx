import React from "react";
import { Button, Card } from "antd";
export const CardComponent: React.FC<{}> = () => {
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card title="workshop title" bordered={false} style={{ width: 300 }}>
          <p> brand :kia</p>
          <p> description </p>
          <Button danger> delete </Button>
        </Card>
      </div>
    </>
  );
};
