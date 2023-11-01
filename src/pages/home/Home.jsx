import React from "react";
import Catagories from "../../components/TamimCatagories/Catagories";
import Products from "../../components/Products";
import { Safi } from "../../components/Safisrc/Safi";
import AmsCard from "../../components/AMsurur/AmsCard";
const Home = () => {
  return (
    <main>
      <Products />
      <Catagories />
      <AmsCard />
      <Safi />
    </main>
  );
};

export default Home;
