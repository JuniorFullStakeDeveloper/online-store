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
                    ?????????????? ????????????
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
                    ?????????????? ????????????
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
                    ?????????????? ??????????????
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
                    ??????????
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
                    ????????????????????
                  </Link>
                </li>
              </ul>

              {dropdown === "?????????????? ????????????" && (
                <div
                  onMouseOver={() => {
                    // setTimeout(() => {
                    setdropdown("?????????????? ????????????");

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
      </div>
    </div>
  );
}

export default NavBar;
