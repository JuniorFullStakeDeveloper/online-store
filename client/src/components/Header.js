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
            ??????????????
          </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div>
            <input type="email" name="email" placeholder="??????????" />
            <br />
            <input type="password" name="password" placeholder="????????????" />
            <br />
            <br />
            <button style={{ background: "black", height: "50px", width: "190px", borderRadius: "5px" }}>
              <p style={{ color: "white" }}>??????????????????????</p>
            </button>
            <br />
            ?????? ???????????????? - <Link to="/register">??????????????????????????????????</Link>
            <br />
            <Link to="/">???????????? ?????????????</Link>
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
                  ?????????????? ????????????
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
                  ?????????????? ????????????
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
                  ?????????????? ??????????????
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
                  ??????????
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
                  ????????????????????
                </Link>
              </li>
            </ul>

            {dropdown === "?????????????? ????????????" && (
              <div
                onMouseOver={() => {
                  // setTimeout(() => {
                  setdropdown("?????????????? ????????????");
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
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/bluzki"
                    >
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/bryuki-i-brizhki"
                    >
                      ?????????? ?? ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/byustgaltery-i-komplekty"
                    >
                      ???????????????????????? ?? ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/verkhnyaya-odezhda"
                    >
                      ?????????????? ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/vodolazki"
                    >
                      ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/dzhinsy"
                    >
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/kombinezony"
                    >
                      ??????????????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/kostyumy"
                    >
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/kofty-i-kardigany"
                    >
                      ??????????, ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/losiny-i-legginsy"
                    >
                      ???????????? ?? ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/mayki"
                    >
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/nizhneye-belye"
                    >
                      ???????????? ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/odezhda-dlya-doma"
                    >
                      ???????????? ?????? ????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/pidzhaki-i-zhakety"
                    >
                      ??????????????, ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/plyazhnaya-odezhda"
                    >
                      ?????????????? ????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/rubashki"
                    >
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/svitery"
                    >
                      ??????????????
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
                      ????????????????, ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/tuniki"
                    >
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/futbolki"
                    >
                      ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/shorty"
                    >
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link
                      className="dropdown__block-link"
                      to="/zhenskaya-odezhda/yubki"
                    >
                      ????????
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {dropdown === "?????????????? ????????????" && (
              <div
                onMouseOver={() => {
                  // setTimeout(() => {
                  setdropdown("?????????????? ????????????");
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
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ?????????????? ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????, ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ???????????? ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ???????????? ?????? ????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????, ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????????, ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????, ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {dropdown === "?????????????? ??????????????" && (
              <div
                onMouseOver={() => {
                  // setTimeout(() => {
                  setdropdown("?????????????? ??????????????");
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
                      ????????????, ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????, ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ???????????????????????? ?? ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ???????????????? ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????, ??????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????, ??????????????, ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ???????????? ??????????
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
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ?????????????? ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????, ??????????????????
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {dropdown === "??????????" && (
              <div
                onMouseOver={() => {
                  // setTimeout(() => {
                  setdropdown("??????????");
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
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????????????
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {dropdown === "????????????????????" && (
              <div
                onMouseOver={() => {
                  // setTimeout(() => {
                  setdropdown("????????????????????");
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
                      ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ????????????, ??????????
                    </Link>
                  </li>
                  <li className="dropdown__block-ul-li">
                    <Link className="dropdown__block-link" to="/">
                      ??????????
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
                ??????????????????
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
        <h1>???????????????????? ??????????????????</h1>
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
