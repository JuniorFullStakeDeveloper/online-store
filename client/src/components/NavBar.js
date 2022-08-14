import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "./img/cart.png";
import profileImg from "./img/profile.png";
import searchImg from "./img/search.png";
import("./Header.css");
import { useSelector, useDispatch } from 'react-redux'
import { profileActiveHeader } from '../features/hea/headerSlice'

function NavBar() {
  let [products, setproducts] = useState([]);
  let [heartAndEye, setHeartAndEye] = useState();
  let [relatedTarget, setrelatedTarget] = useState();
  let [dropdown, setdropdown] = useState();


    
  const profileActive = useSelector((state) => state.header.profileActive)
  const dispatch = useDispatch()






  return (
    <div>
      <div className="container">
        <div
          // className="container"
          style={
            {
              // background: color2 ? color2 : color,
            }
          }
        >
          <div className="header-block container">
            <div className="logo-block">
              <Link className="text-logo" to="/">
                akella
              </Link>
            </div>
            <div className="dropdown-block">
              <ul className="dropdown__block-ul">
                <li
                  onMouseOver={(e) => {
                    // setTimeout(() => {
                    setdropdown(e.target.innerHTML);
                    // setlastdropdown(e.target.innerHTML)
                    //
                    // }, 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // }, 290);
                  }}
                  // onMouseOut={(e) => {
                  //   console.log(e.target.innerHTML);
                  // }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                  }}
                >
                  <Link to="/zhenskaya-odezhda" className="dropdown__block-li">
                    Женская одежда
                  </Link>
                </li>

                <li
                  onMouseOver={(e) => {
                    // console.log(e.target.innerHTML);
                    setdropdown(e.target.innerHTML);

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                  }}
                >
                  <Link to="/muzhskaya-odezhda" className="dropdown__block-li">
                    Мужская одежда
                  </Link>
                </li>
                <li
                  onMouseOver={(e) => {
                    setdropdown(e.target.innerHTML);
                    //
                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                  }}
                >
                  <Link to="/bolshie-razmery" className="dropdown__block-li">
                    Большие размеры
                  </Link>
                </li>
                <li
                  onMouseOver={(e) => {
                    setdropdown(e.target.innerHTML);
                    //
                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                >
                  <Link to="/sumki" className="dropdown__block-li">
                    Сумки
                  </Link>
                </li>
                <li
                  onMouseOver={(e) => {
                    setdropdown(e.target.innerHTML);

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                  }}
                >
                  <Link to="/aksessuary" className="dropdown__block-li">
                    Аксессуары
                  </Link>
                </li>
              </ul>

              {dropdown === "Женская одежда" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("Женская одежда");

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // setrelatedTarget("")
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                    // console.log(e.target);
                    // console.log(dropdown);
                  }}
                  className="dropdown__block-ul-li-block"
                >
                  <ul
                    onMouseOut={(e) => {
                      // console.log(e.target.innerHTML);
                    }}
                    className="dropdown__block-ul-li-block-ul"
                  >
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/platya"
                      >
                        Платья
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/bluzki"
                      >
                        Блузки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/bryuki-i-brizhki"
                      >
                        Брюки и брижки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/byustgaltery-i-komplekty"
                      >
                        Бюстгальтеры и комплекты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/verkhnyaya-odezhda"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/vodolazki"
                      >
                        Водолазки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/dzhinsy"
                      >
                        Джинсы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/kombinezony"
                      >
                        Комбинезоны
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/kostyumy"
                      >
                        Костюмы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/kofty-i-kardigany"
                      >
                        Кофты, кардиганы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/losiny-i-legginsy"
                      >
                        Лосины и легинсы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/mayki"
                      >
                        Майки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/nizhneye-belye"
                      >
                        Нижнее белье
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/odezhda-dlya-doma"
                      >
                        Одежда для дома
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/pidzhaki-i-zhakety"
                      >
                        Пиджаки, жакеты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/plyazhnaya-odezhda"
                      >
                        Пляжная одежда
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/rubashki"
                      >
                        Рубашки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/svitery"
                      >
                        Свитеры
                      </Link>
                    </li>
                    <li
                      className="dropdown__block-ul-li"
                      // onMouseLeave={(e) => {
                      //   console.log(e, "jhgf");
                      //   if (
                      //     e.target.className ===
                      //     ("dropdown__block-ul-li" || "dropdown__block-link")
                      //   ) {
                      //   } else {
                      //     setrelatedTarget("");
                      //     setdropdown("");
                      //     setcolor2(false);
                      //   }
                      // }}
                    >
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/svitshoty-i-tolstovki "
                      >
                        Свитшоты, толстовки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/tuniki"
                      >
                        Туники
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/futbolki"
                      >
                        Футболки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/shorty"
                      >
                        Шорты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link
                        className="dropdown__block-link"
                        to="/zhenskaya-odezhda/yubki"
                      >
                        Юбки
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {dropdown === "Мужская одежда" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("Мужская одежда");

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                    // console.log(e.target);
                    // console.log(dropdown);
                  }}
                  className="dropdown__block-ul-li-block"
                >
                  <ul className="dropdown__block-ul-li-block-ul">
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Брюки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Верхняя одежда
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Водолазки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Джинсы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Жилеты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Костюмы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Кофты, кардиганы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Куртки
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Лонгсливы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Майки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Нижнее белье
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Одежда для дома
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Рубашки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Свитеры, пуловеры
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Толстовки, свитшоты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Футболки
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Рубашки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Свитеры
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Свитшоты, толстовки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Туники
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Футболки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Шорты
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {dropdown === "Большие размеры" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("Большие размеры");

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                    // console.log(e.target);
                    // console.log(dropdown);
                  }}
                  className="dropdown__block-ul-li-block"
                >
                  <ul className="dropdown__block-ul-li-block-ul">
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Блузки, рубашки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Брюки, бриджи
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Бюстгальтеры и комплекты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Водолазки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Джинсы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Домашняя одежда
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Жакеты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Костюмы
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Кофта, кардиганы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Лосины, легинсы, колготки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Майки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Нижнее белье
                      </Link>
                    </li>
                    <li
                      className="dropdown__block-ul-li"
                      // onMouseLeave={(e) => {
                      //   console.log(e, "jhgf");
                      //   if (
                      //     e.target.className ===
                      //     ("dropdown__block-ul-li" || "dropdown__block-link")
                      //   ) {
                      //   } else {
                      //     setrelatedTarget("");
                      //     setdropdown("");
                      //     setcolor2(false);
                      //   }
                      // }}
                    >
                      <Link
                        className="dropdown__block-link"
                        // onMouseLeave={(e) => {
                        //   console.log(e, "jhgf");
                        //   if (
                        //     e.target.className ===
                        //     ("dropdown__block-ul-li" || "dropdown__block-link")
                        //   ) {
                        //   } else {
                        //     setrelatedTarget("");
                        //     setdropdown("");
                        //     setcolor2(false);
                        //   }
                        // }}
                        to="/"
                      >
                        Платья
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Пляжная одежда
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Свитеры
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Свитшоты, толстовки
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Туники
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Футболки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Шорты
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Юбки
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {dropdown === "Сумки" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("Сумки");

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                    // console.log(e.target);
                    // console.log(dropdown);
                  }}
                  className="dropdown__block-ul-li-block"
                >
                  <ul className="dropdown__block-ul-li-block-ul">
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Женские
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Мужские
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Детские
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Рюкзаки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Спортивные
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {dropdown === "Аксессуары" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("Аксессуары");

                    // 290);
                  }}
                  onMouseLeave={() => {
                    // setTimeout(() => {
                    // setdropdown("");
                    // setcolor2(false);
                    // 290);
                  }}
                  onMouseOut={(e) => {
                    // console.log(e.target);
                    // if (e.relatedTarget == div.classwhite__background-block) {
                    // console.log("yes");
                    // } "white__background-block"
                    // console.log(e.relatedTarget.className);
                    setrelatedTarget(e.relatedTarget.className);
                    // console.log(e.target);
                    // console.log(dropdown);
                  }}
                  className="dropdown__block-ul-li-block"
                >
                  <ul className="dropdown__block-ul-li-block-ul">
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/noski">
                        Носки
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Платки, шарфы
                      </Link>
                    </li>
                    <li className="dropdown__block-ul-li">
                      <Link className="dropdown__block-link" to="/">
                        Шапки
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="cart_search_profile-wrapper">
              <div>
                <button
                  type=""
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={cartImg}
                    alt=""
                    style={{
                      width: "23px",
                      height: "23px",
                      marginRight: "3px",
                    }}
                  />
                  <div
                    style={{
                      background: "black",
                      width: "23px",
                      height: "23px",
                      borderRadius: "13px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "1px",
                    }}
                  >
                    <span style={{ color: "white" }}>0</span>
                  </div>
                </button>
              </div>
              <div
                style={{
                  marginLeft: "13px",
                }}
              >
                <button type="">
                  <img
                    src={searchImg}
                    alt=""
                    style={{ width: "20px", height: "20px", marginTop: "1px" }}
                  />
                </button>
              </div>
              <div>
                <button
                  type=""
                  style={{
                    display: "flex",
                  }}
                  onClick={() => dispatch(profileActiveHeader())}
                >
                  <img
                    src={profileImg}
                    alt=""
                    style={{
                      width: "22px",
                      height: "22px",
                      marginLeft: "13px",
                      marginRight: "5px",
                    }}
                  />
                  <div
                    style={{
                      background: "black",
                      width: "23px",
                      height: "23px",
                      borderRadius: "13px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "1px",
                    }}
                  >
                    <span style={{ color: "white" }}>0</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-line"></div>
      </div>
    </div>
  );
}

export default NavBar;
