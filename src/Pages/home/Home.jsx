import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Propertylist from "../../components/propertyList/Propertylist";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import "./Home.css";

const Home = () =>{
    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <Propertylist />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
           <MailList/>
           </div>
        </div>
      
    );
}
export default Home;