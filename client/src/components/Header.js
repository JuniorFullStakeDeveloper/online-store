import { Link, useLocation } from "react-router-dom";
import React, { createRef, useEffect, useRef, useState } from "react";
import sliders from "./sliders/sliders.json";
// import $ from 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'
import cartImg from "./img/cart.png";
import profileImg from "./img/profile.png";
import searchImg from "./img/search.png";
import axios from "axios";
import NavBar from "./NavBar";

import { useSelector, useDispatch } from 'react-redux'
import { profileActiveHeader } from '../features/hea/headerSlice'

import("./Header.css");
{
  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> */
}
// import WheelIndicator from "wheel-indicator";

function Header() {
  let l = useLocation();
  console.log(l);
  let [dropdown, setdropdown] = useState();
  let [lastdropdown, setlastdropdown] = useState();
  let [relatedTarget, setrelatedTarget] = useState();
  let [animation, setanimation] = useState();
  let [hover, sethover] = useState(false);
  let [count, setcount] = useState(0);
  let [img, setimg] = useState();
  let [color, setcolor] = useState();
  let [color2, setcolor2] = useState(false);
  let [title, settitle] = useState();
  let [subtitle, setsubtitle] = useState();
  let [slideractive, setslideractive] = useState(true);
  let [disabled, setdisabled] = useState(false);
  let [upOrDown, setUpOrDown] = useState();
  let [scrollPosition, setScrollPosition] = useState(0);
  let [act, setact] = useState(true);
  let [scroll, setscroll] = useState(false);
  let [focus, setfocus] = useState();
  let [currentDropdown, setcurrentDropdown] = useState();
  let [allPopularCategories, setAllPopularCategories] = useState([]);
  let [profileOnOff, setProfileOnOff] = useState(false);
  
  const profileActive = useSelector((state) => state.header.profileActive)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   setProfileOnOff(profileActive)
  // }, [profileActive])
  console.log(profileActive);
  

  let handleScroll = () => {
    let position = window.pageYOffset;
      setScrollPosition(position);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll, profileOnOff]);

  useEffect(() => {
    if (act && (profileActive === false)) {
      window.addEventListener("wheel", function (event) {
        if (event.deltaY < 0) {
          setUpOrDown("up");
        } else if (event.deltaY > 0) {
          setUpOrDown("down");
        }
      });
    }
  }, [act, profileActive]);


  useEffect(() => {
    let hgyiu = async () => {
      let allCategories = await axios.get(
        "http://localhost:5000/api/category/allPopularCategory"
      );
      let { data } = await allCategories;
      setAllPopularCategories(data);
    };
    hgyiu();
  }, []);
  
  console.log(allPopularCategories);
console.log(handleScroll);


// console.log(profileOnOff);

  useEffect(() => {
    console.log(upOrDown, scrollPosition);
    if ((upOrDown === "down") && act && (profileActive === false)) {

      if (profileOnOff === false) {

      document.querySelector(".header").className = "header margintopminus";
      let aefasgrdth = setInterval(() => {
        document.querySelector(".nodisplay").className = "nodisplay";

        clearInterval(aefasgrdth);
      }, 109);
      let aefasgrdtjmhjydt = setInterval(() => {
        document.querySelector(".nofixed").className = "nofixed";
        setcolor2(true);
        clearInterval(aefasgrdtjmhjydt);
      }, 500);
    }
    }
    if ((upOrDown === "up") & (scrollPosition === 0) && act && (profileActive === false)) {
      // setact(false)
      if (profileActive === false) {
        document.querySelector(".nofixed").className = "fixed nofixed";
        document.querySelector(".header").className = "header";
        let aefasgrdthnjbhjvg = setInterval(() => {
          document.querySelector(".nodisplay").className = "d0 nodisplay";
          setcolor2(false);
          clearInterval(aefasgrdthnjbhjvg);
        }, 500);
        
      }
    }
  }, [upOrDown, scrollPosition, profileOnOff]);

  let refslideactive = useRef(true);


  if (count === 0) {
    setcount(count + 1);
    if (count === 1) {
      setcolor(sliders[count].color);
      setimg(sliders[count].img);
      settitle(sliders[count].title);
      setsubtitle(sliders[count].subtitle);
    }
  }
  useEffect(() => {
    setcolor(sliders[count].color);
    setimg(sliders[count].img);
    settitle(sliders[count].title);
    setsubtitle(sliders[count].subtitle);
  }, [count, hover, refslideactive.current, disabled]);


  useEffect(() => {
  }, [scroll]);

  
  document.addEventListener("scroll", function (e) {
    
  });
  useEffect(() => {
    setfocus(relatedTarget);
    setcurrentDropdown(dropdown);
    if (
      (currentDropdown != "dropdown__block-ul-li-block") & !dropdown ||
      currentDropdown === ""
    ) {
      // setrelatedTarget("")
      // setdropdown("")
    }
  }, [relatedTarget, dropdown, focus]);



const profileOnOffHandler = () => {
  setProfileOnOff(!profileOnOff)
}

  return (
    <div className="fixed nofixed" style={{ maxHeight: "100vh" }}>
{profileActive ? (
          <div
          className="container"
          style={{ background: "#fff", height: "100vh", width: "80vw" }}
        >
          <NavBar />
          <br />
          <button onClick={() => dispatch(profileActiveHeader())}>
            Закрыть
          </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div>
            <input type="email" name="email" placeholder="Почта" />
            <br />
            <input type="password" name="password" placeholder="Пароль" />
            <br />
            <br />
            <button style={{ background: "black", height: "50px", width: "190px", borderRadius: "5px" }}>
              <p style={{ color: "white" }}>Авторизация</p>
            </button>
            <br />
            Нет аккаунта - <Link to="/register">зарегистрируйтесь</Link>
            <br />
            <Link to="/">Забыли пароль?</Link>
          </div>
        </div>
        ) : ""
      }

      <div
        // className="dn00"
        style={{
          background: color2 ? color2 : color,
        }}
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
                  setcolor2(true);
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
      <div

        className="header"
        style={{
          background: color2 ? color2 : color,
        }}
        onWheel={() => {
          //   if ((winScroll === 0) & scroll) {
          //     setInterval(() => {
          // document.body.style.overflow = "visible"
          //   setscroll(false);
          // }, 2000);
          //   }
          //   if ((winScroll === 0) && (document.body.style.overflow != "hidden") & !scroll) {
          //     // setInterval(() => {
          //       // setInterval(() => {
          //         setInterval(() => {
          // window.style.display = "none";
          //       setscroll(true);
          //         }, 2000);
          //       // }, 10);
          //     // }, 10);
          //   }
          //   console.log("jhgtfdrfsdgrhfjgkjnl");
        }}
      >
        {(dropdown || relatedTarget === "white__background-block") && (
          <div
            className="white__background-block"
            onMouseOut={(e) => {
              // console.log(e.relatedTarget);
              // console.log(e.target);
            }}
            onMouseLeave={() => {
              setrelatedTarget("");
              setdropdown("");
              setcolor2(false);
            }}
          ></div>
        )}
        <div
          // ref={first}
          className="header-content"
          style={{
            margin: "auto auto",
            background: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "93.2vh",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "1345px",
              // justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <div
              onMouseEnter={() => {
                setdropdown("");
                setcolor2(false);
                refslideactive.current = false;
                sethover(true);
              }}
              onMouseLeave={() => {
                refslideactive.current = true;
                sethover(false);
              }}
              className="slider"
            >
              <h3
                className={
                  !animation ? "slider__subtitle" : "slider__subtitle-standart"
                }
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "normal",
                }}
              >
                {subtitle}
              </h3>
              <h1
                className={
                  !animation ? "slider__title" : "slider__title-standart"
                }
                style={{ fontSize: "76px", textAlign: "left", margin: "0" }}
              >
                {title}
              </h1>
              <Link
                to={"/"}
                className={
                  !animation ? "slider__title" : "slider__title-standart"
                }
                style={{
                  width: "150px",
                  height: "56px",
                  background: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",
                  textDecoration: "none",
                  marginTop: "55px",
                }}
              >
                ПОДРОБНЕЕ
              </Link>
            </div>
            <button
              style={{
                cursor: "pointer",
                width: "640px",
                height: "549px",
                background: color,
                border: "none",
                padding: 0,
              }}
              onMouseEnter={() => {
                setdropdown("");
                setcolor2(false);
                refslideactive.current = false;
                sethover(true);
              }}
              onMouseLeave={() => {
                refslideactive.current = true;
                sethover(false);
              }}
              disabled={disabled}
              onClick={() => {
                // clearInt();
                let hgu;
                if (!disabled) {
                  refslideactive.current = false;
                  setdisabled(true);
                  sethover(true);
                  setanimation(true);
                  hgu = setTimeout(() => {
                    if (count < 3) {
                      setcount(count + 1);
                      clearInterval(hgu);
                    } else {
                      setcount(1);
                      clearInterval(hgu);
                    }
                  }, 230);
                }
                let inttt = setInterval(() => {
                  refslideactive.current = true;
                  // sethover(false);
                  // clearInt();
                  // setdisabled(false);
                  clearInterval(inttt);
                  sethover(false);
                  setanimation(false);
                }, 230);
                let intttt = setInterval(() => {
                  setdisabled(false);
                  clearInterval(intttt);
                }, 1000);
              }}
            >
              <img
                style={{ width: "640px", height: "549px" }}
                className="imgg hover"
                src={img}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className="content__wrapper d0 nodisplay"

        onMouseEnter={() => {
          setdropdown("");
          setcolor2(false);
        }}
        onChange={(e) => {
          return true;
        }}
      >
        <h1>Популярные Категории</h1>
        <div className="content__categories-wrapper container">
          {allPopularCategories &&
            allPopularCategories.map((value, index, array) => {
              return (
                <>
                  <Link to={value.http} className="category-wrapper">
                    <img src={value.img} alt="" />
                    <span
                      style={{
                        fontSize: "11",
                        fontWeight: "bold",
                        color: "black",
                        opacity: "0.9",
                        marginTop: "1.5px",
                      }}
                    >
                      {value.nameCategory}
                    </span>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Header;
