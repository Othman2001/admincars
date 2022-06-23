import { useEffect } from "react";
import { Brands } from "../../components/Brands/Brands";
import LayoutComponent from "../../components/Layout/Layout";

function Workshops() {
  useEffect(() => {}, []);
  return (
    <LayoutComponent selectedKey="4">
      <>
        <h1> Brands </h1>
        <Brands />
      </>
    </LayoutComponent>
  );
}

export default Workshops;
