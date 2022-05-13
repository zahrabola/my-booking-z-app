import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaSearchLocation, FaTrash} from "react-icons/fa";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
const [SlideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false);

const photos = [
  {
    src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/764827/pexels-photo-764827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11",
  },
  {
    src: "https://images.pexels.com/photos/1262493/pexels-photo-1262493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/5615832/pexels-photo-5615832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/1262493/pexels-photo-1262493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const handleOpen =(i) =>{
  setSlideNumber(i);
  setOpen(true);
}





  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelcontainer">
        {open && (
          <div className="slider">
            <div className="hotelicon">
              <FaTrash
                size="1.3em"
                className="close"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="hotelicon">
              <FaArrowAltCircleLeft size="1.3em" className="arrow"/>
            </div>
            <div className="sliderwrapper">
              <img src={photos[SlideNumber].src} alt="" className="sliderimg" />
              <div className="hotelicon">
                <FaArrowAltCircleRight size="1.3em" className="arrow" />
              </div>
            </div>
          </div>
        )}

        <div className="hotelwrapper">
          <button className="hotel-button">Reserve or Book Now!</button>
          <h1 className="hoteltitle">Tower Street Apartments</h1>
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
            {photos.map((photo, i) => (
              <div className="hotelimgwrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelimg"
                />
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
