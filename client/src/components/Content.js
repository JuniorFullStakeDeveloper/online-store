import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Content.css";
import cartImg from "./img/cart.png";
import profileImg from "./img/profile.png";
import searchImg from "./img/search.png";
import whiteHeart from "./img/white_heart.png";
import eye from "./img/eye.png";
import NavBar from "./NavBar";
import("./Header.css");

function Content() {
  let [products, setproducts] = useState([]);
  let [heartAndEye, setHeartAndEye] = useState();
  let [heartAndEyeActive, setHeartAndEyeActive] = useState(false);

  let [relatedTarget, setrelatedTarget] = useState();
  let [dropdown, setdropdown] = useState();

  let location = useLocation();
  // console.log(location);
  useEffect(() => {
    // return () => {
      let getProducts = axios
        .post(
          "http://localhost:5000/api/products/searchprod/zhenskaya-odezhda/"
        )
        .then((value) => {
          setproducts(value.data);
        });
    // };
  }, []);

  return (
    <div className="container">
      <NavBar />
      <br />
      <Link to={"/"}>Домой</Link> /{" "}
      <Link to={"/zhenskaya-odezhda"}>
        {location.pathname === "/zhenskaya-odezhda" ||
        location.pathname === "/zhenskaya-odezhda/"
          ? "Женская одежда"
          : "?"}
      </Link>
      <h1>
        {location.pathname === "/zhenskaya-odezhda" ||
        location.pathname === "/zhenskaya-odezhda/"
          ? "женская одежда"
          : "?"}
      </h1>
      <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Link to={"/zhenskaya-odezhda/platya"} className="ulli">
          Платья
        </Link>
        <Link to={"/zhenskaya-odezhda/bluzki"} className="ulli">
          Блузки
        </Link>
        <Link to={"/zhenskaya-odezhda/bryuki-i-brizhki"} className="ulli">
          Брюки и брижки
        </Link>
        <Link to={"/zhenskaya-odezhda/byustgaltery-i-komplekty"} className="ulli">
          Бюстгальтеры и комплекты
        </Link>
        <Link to={"/zhenskaya-odezhda/verkhnyaya-odezhda"} className="ulli">
          Верхняя одежда
        </Link>
        <Link to={"/"} className="ulli">
          Водолазки
        </Link>
        <Link to={"/"} className="ulli">
          Джинсы
        </Link>
        <Link to={"/zhenskaya-odezhda/kombinezony"} className="ulli">
          Комбинезоны
        </Link>
        <Link to={"/"} className="ulli">
          Костюмы
        </Link>
        <Link to={"/"} className="ulli">
          Кофты, кардиганы
        </Link>
        <Link to={"/"} className="ulli">
          Лосины и легинсы
        </Link>
        <Link to={"/"} className="ulli">
          Майки
        </Link>
        <Link to={"/"} className="ulli">
          Нижнее белье
        </Link>
        <Link to={"/"} className="ulli">
          Одежда для дома
        </Link>
        <Link to={"/"} className="ulli">
          Пиджаки, жакеты
        </Link>
        <Link to={"/"} className="ulli">
          Пляжная одежда
        </Link>
        <Link to={"/"} className="ulli">
          Рубашки
        </Link>
        <Link to={"/"} className="ulli">
          Свитеры
        </Link>
        <Link to={"/"} className="ulli">
          Свитшоты, толстовки
        </Link>
        <Link to={"/"} className="ulli">
          Туники
        </Link>
        <Link to={"/"} className="ulli">
          Футболки
        </Link>
        <Link to={"/"} className="ulli">
          Шорты
        </Link>
        <Link to={"/"} className="ulli">
          Юбки
        </Link>
      </ul>
      <br />
      <div className="products__wrapper">
        {products &&
          products.map((value, index, array) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="product__wrapper"
                  onMouseEnter={(e) => {
                    setHeartAndEye(value.code);
                  }}
                  onMouseLeave={(e) => {
                    setHeartAndEye("");
                  }}
                >
                  <Link to={`${value.category}/${value.code}`}>
                    <img className="product__img" src={value.img} alt="" />
                    <div className="product__price">{value.price} р.</div>
                  </Link>
                  <div className="heartAndYey__img">
                    <div
                      className={
                        heartAndEye === value.code
                          ? "product__white_heart"
                          : "product__white_heart none"
                      }
                    >
                      <img
                        className="product__white_heart-img"
                        src={whiteHeart}
                        alt=""
                      />
                      <p className="product__white_heart-text">В закладки</p>
                    </div>
                    <div
                      className={
                        heartAndEye === value.code
                          ? "product__eye"
                          : "product__eye none"
                      }
                    >
                      <img className="product__eye-img" src={eye} alt="" />
                      <p className="product__eye-text">Быстрый просмотр</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "9px",
                  }}
                >
                  {value.name}
                </div>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Content;
