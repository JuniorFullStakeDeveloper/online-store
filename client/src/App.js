// import axios from "axios";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ProductsToCategory from "./components/ProductsToCategory";
import axios from "axios";
import Register from "./components/Register";
import { Provider } from 'react-redux'
import { store } from "./store";

// import Int from "./components/Int";

function App() {
  let [ngou, setngou] = useState([]);
  useEffect(() => {
    let mnbguiojkmnjiu = async () => {
      let ngy = await axios.post(
        "http://localhost:5000/api/products/searchprod/zhenskaya-odezhda"
      );
      let { data } = await ngy;
      data.map((value, index, array) => {
        ngou.push(value.category);
      });
    };
    mnbguiojkmnjiu();
  }, []);
  let unique = ngou.filter((item, i, ar) => ar.indexOf(item) === i);

  let [bhvghcfgc, yfftvjhm] = useState([]);

  useEffect(() => {
    let asyncFunc = async () => {
      let nhjio = await axios.get(
        "http://localhost:5000/api/products/allProducts"
      );
      let { data } = await nhjio;
      yfftvjhm(data);
    };
    asyncFunc();
  }, []);
  // console.log(axios("http://checkip.dyndns.org/"))
  let InfoForCode = () =>
    useRoutes(
      bhvghcfgc.map((value, index, array) => {
        return {
          path: `/${value.charter}/${value.category}/${value.code}`,
          element: <ProductInfo />,
        };
      })
    );
  let InfoForCode2 = () =>
    useRoutes(
      bhvghcfgc.map((value, index, array) => {
        return {
          path: `/${value.charter}/${value.category}`,
          element: <ProductsToCategory />,
        };
      })
    );
  console.log('port 3000 has been started');
  return (
    <div className="App">
      <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Header />} />
          <Route path="/zhenskaya-odezhda" element={<Content />} />
        </Routes>
        <InfoForCode />
        <InfoForCode2 />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
