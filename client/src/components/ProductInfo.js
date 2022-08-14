import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ProductInfo() {
  let [prod, setProd] = useState([]);
  // let [active, setActive] = useState(false);
  // setInterval(() => {
  //   setActive(true);
  // }, 500);

  useEffect(() => {
    let pathname = window.location.pathname.split("/");
    let path_charter = pathname[1];
    let path_category = pathname[2];
    let path_code = pathname[3];
    let lol = async () => {
      let jkhy = await axios.post(
        `http://localhost:5000/api/products/searchProduct/${path_code}`
      );
      console.log(jkhy);
      let { data } = await jkhy;
      console.log(data);
      setProd(data);
    };
    lol();
  }, [window.location.pathname]);
  console.log();
  return (
    <>
      <NavBar />
      <div>
        {prod.name}
        <br />
        {prod.price} руб.
        <br />
        {prod.code}
        <br />
        {prod.country}
        <br />
        <img src={prod.img} alt="" />
        <br />
      </div>
    </>
  );
}

export default ProductInfo;
