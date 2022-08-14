import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ProductsToCategory() {
  let [prod, setProd] = useState([]);
  let locationPathname = window.location.pathname
  useEffect(() => {
    let pathname = window.location.pathname.split("/");
    let path_charter = pathname[1];
    let path_category = pathname[2];
    let path_code = pathname[3];
    let lol = async () => {
      // setInterval(async() => {
        let jkhy = await axios.post(
          `http://localhost:5000/api/products/searchProducts/${path_charter}/${path_category}`
        );
        let { data } = await jkhy;
        setProd(data);
      // }, 1000);

    };
    lol();

    console.log(prod);
  }, []);
  console.log(prod);

  return <div>
    <NavBar />
    {prod && prod.map((value, index, array) => {
      return(
      <ul>
        <li>
        {value.name}
        <br />
        {value.code}
        <img style={{width: "100px"}} src={value.img} alt=""/>
        </li>
      </ul>)
    })}
  </div>;
}

export default ProductsToCategory;
