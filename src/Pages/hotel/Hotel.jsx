import React from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FaSearchLocation } from "react-icons/fa";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {

const photos =[{
  src:"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  src:"https://images.pexels.com/photos/764827/pexels-photo-764827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  src:"https://images.pexels.com/photos/5615873/pexels-photo-5615873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  src:"https://images.pexels.com/photos/1262493/pexels-photo-1262493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  src:"https://images.pexels.com/photos/5615832/pexels-photo-5615832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
  src:"https://images.pexels.com/photos/1714975/pexels-photo-1714975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
},
];





  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelcontainer">
        <div className="hotelwrapper">
          <h1 className="hoteltitle">London Hotel</h1>
          <div className="hoteladress">
            <div className="hotelicon">
              <FaSearchLocation size="1.3em" />
              <span>Elton street, London </span>
            </div>
          </div>
          <span className="hoteldistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPH">
            Book a stay over £114 at this property and get a free airport taxi
          </span>
          <div className="hotelimgs">
            {photos.map(photo=> (
              <div className="hotelimgwrapper">
                <img 
                
                src={photo.src}
                alt=""
                 className="hotelimg" />
              </div>
            ))}
          </div>
          <div className="hoteldetail">
            <div className="hotel-DT">
              <h1 className="hotel-title">Stay in the heart of the city</h1>
              <p className="hoteldescription">
                located 5 minutes away from, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quibusdam dicta soluta dolorum
                nobis delectus! Eius suscipit alias et nisi, rerum maiores
                quaerat molestias quam quo aliquam ut magni corrupti vero.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat qui quidem in earum perferendis odio, unde consequatur
                illum cumque. Similique odit recusandae voluptatum. Tempore,
                delectus deserunt. Tenetur error in voluptas? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Debitis officia,
                eveniet, nobis cumque alias labore aliquam tempora dolores dicta
                nemo aut at! Sequi repellendus fugiat non, illum expedita totam
                id? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus repellendus quis temporibus sunt. Ab ipsa alias
                sint repellat facilis distinctio vero voluptates doloribus,
                perspiciatis dolorem. Aspernatur sunt temporibus ipsa? Sequi?
              </p>
            </div>
            <div className="hotel-DP">
              <h1>Perfect for a 10-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>£345</b> (10 nights)
              </h2>
              <button className="hotel-button">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Hotel;
