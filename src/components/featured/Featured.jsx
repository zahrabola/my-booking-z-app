import "./Featured.css";

const Featured = () => {
  return (
    <div className=" featured">
      <div className="featurecard">
        <img
          src="https://images.pexels.com/photos/6588993/pexels-photo-6588993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="feautre-img"
          alt="feature1"
        />
        <div className="featureTitle">
          <h1>London</h1>
          <h2>120 properties</h2>
        </div>
      </div>

      <div className="featurecard">
        <img
          src="https://images.pexels.com/photos/3035122/pexels-photo-3035122.jpeg?cs=srgb&dl=pexels-anna-urlapova-3035122.jpg&fm=jpg"
          className="feautre-img"
          alt="feature2"
        />
        <div className="featureTitle">
          <h1>Edinburgh </h1>
          <h2>90 properties</h2>
        </div>
      </div>

      <div className="featurecard">
        <img
          src="https://images.pexels.com/photos/6029313/pexels-photo-6029313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="feautre-img"
          alt="feature3"
        />
        <div className="featureTitle">
          <h1>Cardiff</h1>
          <h2>160 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
