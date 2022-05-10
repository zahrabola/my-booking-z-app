import "./featuredproperties.css";

const FeaturedProperties = () => {
    return (
      <div className="featuredproperties">
        <div className="fp-card">
          <img
            src="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="fp-img"
          />
          <span className="fpName">Apartment Scotland</span>
          <span className="fpCity">Edinburgh</span>
          <span className="fpPrice">Starting from £120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fp-card">
          <img
            src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="fp-img"
          />
          <span className="fpName">Kingdom hotel</span>
          <span className="fpCity">London</span>
          <span className="fpPrice">Starting from £170</span>
          <div className="fpRating">
            <button>8.0</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fp-card">
          <img
            src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="fp-img"
          />
          <span className="fpName">Dub land- hotel</span>
          <span className="fpCity">Dublin</span>
          <span className="fpPrice">Starting from £100</span>
          <div className="fpRating">
            <button>7.5</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fp-card">
          <img
            src="https://images.pexels.com/photos/6510302/pexels-photo-6510302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="fp-img"
          />
          <span className="fpName">Wales Canon</span>
          <span className="fpCity">Cardiff</span>
          <span className="fpPrice">Starting from £90</span>
          <div className="fpRating">
            <button>9.2</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    );
}









export default FeaturedProperties;