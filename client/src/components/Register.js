import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { errorMinus, errorPlus } from "../features/hea/headerSlice";
import NavBar from "./NavBar";
import {
  uncorrectEmail,
  uniqueEmail,
  uncorrectPassword,
  uncorrectConfirmPassword,
  uncorrectNameAndPatronymic,
  uncorrectRegion,
  uncorrectIndex,
  uncorrectCity,
  uncorrectAddress,
} from "../features/register/registerSlice";
import validator from "validator";

function Register() {
  const uncorrectEmailWarning = "Некорректный Email";
  const notUniqueEmail = "Данный Email уже зарегистрирован";

  const {
    uniqueEmailState,
    uncorrectEmailState,
    uncorrectPasswordState,
    uncorrectConfirmPasswordState,
    uncorrectNameAndPatronymicState,
    uncorrectRegionState,
    uncorrectIndexState,
    uncorrectCityState,
    uncorrectAddressState,
  } = useSelector((state) => state.register);

  const [formData, setFormData] = useState([
    {
      username: "",
      surname: "",
      email: "",
      phone: "",
      index: Number,
      password: "",
      password__confirm: "",
      address: "",
      city: "",
      country: "",
      region: "",
    },
  ]);
  const [errorEmail, setErrorEmail] = useState([]);
  const errorss = useSelector((state) => state.header.errorss);
  const dispatch = useDispatch();
  useEffect(() => {}, [errorss, formData]);
  const OnSelectionChangeCountry = (country) => {
    setFormData({
      ...formData,
      [country.target.name]: country.target.value,
    });
    console.log(country.target.value);
  };
  const OnSelectionChangeRegion = (region) => {
    setFormData({
      ...formData,
      [region.target.name]: region.target.value,
    });
    console.log(region.target.value);
  };
  const formOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formData);
  const createUser = async (req, res) => {
    const user = await axios.post(
      "http://localhost:5000/api/users/createUser",
      formData
    );
    const { data } = await user;
    console.log(data);
  };
  let checkEmail;
  let checkIndex;
  let checkPassword;
  useEffect(() => {
    checkEmail = async () => {
      if (formData) {
        const user = await axios.post(
          `http://localhost:5000/api/users/checkUniqueEmail/${formData.email}`
        );
        const { data } = await user;
        if (!data) {
          dispatch(uniqueEmail(false));
        } else {
          dispatch(uniqueEmail(true));
        }
      }
    };
    checkIndex = () => {
      if (formData.index.length < 2 || formData.index.length > 10) {
        dispatch(uncorrectIndex(false));
        console.log("Индекс должен содержать от 2 до 10 символов");
      } else {
        dispatch(uncorrectIndex(true));
      }
    };
    checkPassword = () => {
      if (formData.password.length < 4 || formData.password.length > 20) {
        dispatch(uncorrectPassword(false));
      } else {
        dispatch(uncorrectPassword(true));
      }
      if (formData.password != formData.password__confirm) {
        dispatch(uncorrectConfirmPassword(false));
      } else {
        dispatch(uncorrectConfirmPassword(true));
      }
    };
  }, [
    formData.email,
    formData.index,
    formData.password,
    formData.password__confirm,
  ]);

  const validateEmail = () => {
    if (validator.isEmail(formData.email)) {
      dispatch(uncorrectEmail(true));
      console.log("Valid Email :)");
    } else {
      dispatch(uncorrectEmail(false));
      console.log("Enter valid Email!");
    }
  };

  return (
    <div>
      <NavBar />
      <h1>РЕГИСТРАЦИЯ</h1>
      <p>Если вы уже зарегистрированы, перейдите на страницу</p>
      <Link style={{ borderBottom: "1px dashed #000080" }} to="login">
        авторизации
      </Link>
      .
      <br />
      <input
        onChange={(e) => formOnChange(e)}
        type="username"
        name="username"
        placeholder="Имя"
      />
      <br />
      <input
        onChange={(e) => formOnChange(e)}
        type="surname"
        name="surname"
        placeholder="Фамилия"
      />
      <br />
      <input
        onChange={(e) => formOnChange(e)}
        type="email"
        name="email"
        placeholder="E-Mail"
        onBlur={(e) => {
          if (!formData.email) {
            dispatch(uncorrectEmail(false));
          } else {
            validateEmail();
            checkEmail();
          }
        }}
      />
      <br />
      {!uniqueEmailState ? (
        <>
          <p style={{ color: "red" }}>{notUniqueEmail}</p>
        </>
      ) : (
        ""
      )}
      {!uncorrectEmailState ? (
        <>
          <p style={{ color: "red" }}>{uncorrectEmailWarning}</p>
        </>
      ) : (
        ""
      )}
      <input
        onChange={(e) => formOnChange(e)}
        type="tel"
        name="phone"
        placeholder="Телефон"
      />
      <br />
      <input
        onChange={(e) => {
          formOnChange(e);
        }}
        type=""
        name="index"
        placeholder="Индекс"
        onBlur={() => {
          if (!formData.index) {
            dispatch(uncorrectIndex(false));
          } else {
            checkIndex();
          }
        }}
      />
      <br />
      {!uncorrectIndexState ? (
        <>
          <p style={{ color: "red" }}>
            Индекс должен содержать от 2 до 10 символов
          </p>
        </>
      ) : (
        ""
      )}
      <input
        onChange={(e) => formOnChange(e)}
        type="password"
        name="password"
        placeholder="Пароль"
        onBlur={() => {
          if (!formData.password) {
            dispatch(uncorrectPassword(false));
          } else {
            checkPassword();
          }
        }}
      />
      <br />
      {!uncorrectPasswordState ? (
        <>
          <p style={{ color: "red" }}>
            Пароль должен содержать от 4 до 20 символов
          </p>
        </>
      ) : (
        ""
      )}
      <input
        onChange={(e) => formOnChange(e)}
        type="password"
        name="password__confirm"
        placeholder="Подтвердить пароль"
        onBlur={() => {
          if (!formData.password) {
            dispatch(uncorrectPassword(false));
          } else {
            checkPassword();
          }
        }}
      />
      <br />{" "}
      {!uncorrectConfirmPasswordState ? (
        <>
          <p style={{ color: "red" }}>
            Подтверждение пароля должно совпадать с паролем
          </p>
        </>
      ) : (
        ""
      )}
      <input
        onChange={(e) => formOnChange(e)}
        type="text"
        name="address"
        placeholder="Адрес"
      />
      <br />
      <input
        onChange={(e) => formOnChange(e)}
        type="text"
        name="city"
        placeholder="Город"
      />
      <br />
      Страна
      <select
        onChange={(country) => OnSelectionChangeCountry(country)}
        name="country"
      >
        <option value="Страна">Страна</option>
        {/* <option value="">Армения</option>
        <option value="">Азербайджан</option>
        <option value="">Белоруссия(Беларусь)</option>
        <option value="">Грузия</option>
        <option value="">Казахстан</option>
        <option value="">Киргиция</option>
        <option value="">Латвия</option>
        <option value="">Литва</option>
        <option value="">Молдова</option> */}
        <option value="Российская Федерация">Российская Федерация</option>
        {/* <option value="">Таджикистан</option>
        <option value="">Туркменистан</option>
        <option value="">Узбекистан</option>
        <option value="">Украина</option>
        <option value="">Эстония</option> */}
      </select>
      <br />
      Регион
      <select
        onChange={(region) => OnSelectionChangeRegion(region)}
        name="region"
        id="input-zone"
        className="form-control no-border"
      >
        <option value=""> --- Выберите --- </option>
        <option value="Алтайский край">Алтайский край</option>
        <option value="Амурская область">Амурская область</option>
        <option value="Архангельская область">Архангельская область</option>
        <option value="Астраханская область">Астраханская область</option>
        <option value="Белгородская область">Белгородская область</option>
        <option value="Брянская область">Брянская область</option>
        <option value="Владимирская область">Владимирская область</option>
        <option value="Волгоградская область">Волгоградская область</option>
        <option value="Вологодская область">Вологодская область</option>
        <option value="Воронежская область">Воронежская область</option>
        <option value="Еврейская АО">Еврейская АО</option>
        <option value="Забайкальский край">Забайкальский край</option>
        <option value="Ивановская область">Ивановская область</option>
        <option value="Иркутская область">Иркутская область</option>
        <option value="Калининградская область">Калининградская область</option>
        <option value="Калужская область">Калужская область</option>
        <option value="Камчатский край">Камчатский край</option>
        <option value="Карачаево-Черкеcсия">Карачаево-Черкеcсия</option>
        <option value="Кемеровская область">Кемеровская область</option>
        <option value="Кировская область">Кировская область</option>
        <option value="Костромская область">Костромская область</option>
        <option value="Краснодарский край">Краснодарский край</option>
        <option value="Красноярский край">Красноярский край</option>
        <option value="Курганская область">Курганская область</option>
        <option value="Курская область">Курская область</option>
        <option value="Ленинградская область">Ленинградская область</option>
        <option value="Липецкая область">Липецкая область</option>
        <option value="Магаданская область">Магаданская область</option>
        <option value="Москва">Москва</option>
        <option value="Московская область">Московская область</option>
        <option value="Мурманская область">Мурманская область</option>
        <option value="Ненецкий АО">Ненецкий АО</option>
        <option value="Нижегородская область">Нижегородская область</option>
        <option value="Новгородская область">Новгородская область</option>
        <option value="Новосибирская область">Новосибирская область</option>
        <option value="Омская область">Омская область</option>
        <option value="Оренбургская область">Оренбургская область</option>
        <option value="Орловская область">Орловская область</option>
        <option value="Пензенская область">Пензенская область</option>
        <option value="Пермский край">Пермский край</option>
        <option value="Приморский край">Приморский край</option>
        <option value="Псковская область">Псковская область</option>
        <option value="Республика Адыгея">Республика Адыгея</option>
        <option value="Республика Алтай">Республика Алтай</option>
        <option value="Республика Башкортостан">Республика Башкортостан</option>
        <option value="Республика Бурятия">Республика Бурятия</option>
        <option value="Республика Дагестан">Республика Дагестан</option>
        <option value="Республика Ингушетия">Республика Ингушетия</option>
        <option value="Республика Кабардино-Балкария">
          Республика Кабардино-Балкария
        </option>
        <option value="Республика Калмыкия">Республика Калмыкия</option>
        <option value="Республика Карелия">Республика Карелия</option>
        <option value="Республика Коми">Республика Коми</option>
        <option value="Республика Марий Эл">Республика Марий Эл</option>
        <option value="Республика Мордовия">Республика Мордовия</option>
        <option value="Республика Саха">Республика Саха</option>
        <option value="Республика Северная Осетия">
          Республика Северная Осетия
        </option>
        <option value="Республика Татарстан">Республика Татарстан</option>
        <option value="Республика Тыва">Республика Тыва</option>
        <option value="Республика Хакасия">Республика Хакасия</option>
        <option value="Ростовская область">Ростовская область</option>
        <option value="Рязанская область">Рязанская область</option>
        <option value="Самарская область">Самарская область</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Саратовская область">Саратовская область</option>
        <option value="Сахалинская область">Сахалинская область</option>
        <option value="Свердловская область">Свердловская область</option>
        <option value="Смоленская область">Смоленская область</option>
        <option value="Ставропольский край">Ставропольский край</option>
        <option value="Тамбовская область">Тамбовская область</option>
        <option value="Тверская область">Тверская область</option>
        <option value="Томская область">Томская область</option>
        <option value="Тульская область">Тульская область</option>
        <option value="Тюменская область">Тюменская область</option>
        <option value="Удмуртская Республика">Удмуртская Республика</option>
        <option value="Ульяновская область">Ульяновская область</option>
        <option value="Хабаровский край">Хабаровский край</option>
        <option value="Ханты-Мансийский АО - Югра">
          Ханты-Мансийский АО - Югра
        </option>
        <option value="Челябинская область">Челябинская область</option>
        <option value="Чеченская Республика">Чеченская Республика</option>
        <option value="Чувашская Республика">Чувашская Республика</option>
        <option value="Чукотский АО">Чукотский АО</option>
        <option value="Ямало-Ненецкий АО">Ямало-Ненецкий АО</option>
        <option value="Ярославская область">Ярославская область</option>
      </select>
      {/* <select name="zone_id" id="input-zone" class="form-control no-border">
        <option value=""> --- Выберите --- </option>
        <option value="180">Арагацотн</option>
        <option value="181">Арарат</option>
        <option value="182">Армавир</option>
        <option value="189">Вайоц Дзор</option>
        <option value="183">Гегаркуник</option>
        <option value="190">Ереван</option>
        <option value="184">Котайк</option>
        <option value="185">Лори</option>
        <option value="187">Сюник</option>
        <option value="188">Тавуш</option>
        <option value="186">Ширак</option>
      </select>
      <select name="zone_id" id="input-zone" class="form-control no-border">
        <option value=""> --- Выберите --- </option>
        <option value="209">Abseron</option>
        <option value="210">AgcabAdi</option>
        <option value="211">Agdam</option>
        <option value="212">Agdas</option>
        <option value="213">Agstafa</option>
        <option value="214">Agsu</option>
        <option value="208">Ali Bayramli</option>
        <option value="215">Astara</option>
        <option value="217">BabAk</option>
        <option value="216">Baki</option>
        <option value="218">BalakAn</option>
        <option value="219">BArdA</option>
        <option value="220">Beylaqan</option>
        <option value="221">Bilasuvar</option>
        <option value="222">Cabrayil</option>
        <option value="223">Calilabab</option>
        <option value="224">Culfa</option>
        <option value="225">Daskasan</option>
        <option value="226">Davaci</option>
        <option value="227">Fuzuli</option>
        <option value="229">Gadabay</option>
        <option value="228">Ganca</option>
        <option value="230">Goranboy</option>
        <option value="231">Goycay</option>
        <option value="232">Haciqabul</option>
        <option value="233">Imisli</option>
        <option value="234">Ismayilli</option>
        <option value="235">Kalbacar</option>
        <option value="236">Kurdamir</option>
        <option value="238">Lacin</option>
        <option value="237">Lankaran</option>
        <option value="239">Lankaran</option>
        <option value="240">Lerik</option>
        <option value="241">Masalli</option>
        <option value="242">Mingacevir</option>
        <option value="243">Naftalan</option>
        <option value="283">Naxcivan</option>
        <option value="244">Neftcala</option>
        <option value="245">Oguz</option>
        <option value="246">Ordubad</option>
        <option value="247">Qabala</option>
        <option value="248">Qax</option>
        <option value="249">Qazax</option>
        <option value="250">Qobustan</option>
        <option value="251">Quba</option>
        <option value="252">Qubadli</option>
        <option value="253">Qusar</option>
        <option value="255">Saatli</option>
        <option value="256">Sabirabad</option>
        <option value="257">Sadarak</option>
        <option value="258">Sahbuz</option>
        <option value="254">Saki</option>
        <option value="259">Saki</option>
        <option value="260">Salyan</option>
        <option value="262">Samaxi</option>
        <option value="263">Samkir</option>
        <option value="264">Samux</option>
        <option value="265">Sarur</option>
        <option value="266">Siyazan</option>
        <option value="261">Sumqayit</option>
        <option value="268">Susa</option>
        <option value="267">Susa</option>
        <option value="269">Tartar</option>
        <option value="270">Tovuz</option>
        <option value="271">Ucar</option>
        <option value="273">Xacmaz</option>
        <option value="272">Xankandi</option>
        <option value="274">Xanlar</option>
        <option value="275">Xizi</option>
        <option value="276">Xocali</option>
        <option value="277">Xocavand</option>
        <option value="278">Yardimli</option>
        <option value="279">Yevlax</option>
        <option value="280">Zangilan</option>
        <option value="281">Zaqatala</option>
        <option value="282">Zardab</option>
      </select> */}
      <br />
      <button
        onClick={() => {
          createUser();
        }}
      >
        Продолжить
      </button>
    </div>
  );
}

export default Register;
