import "./SearchItem.css";

const SearchItem = () => {
    return (
      <div className="searchitem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="searchitemimg"
        />
        <div className="searchitemdescription">
          <h1 className="si-title">Apartemnt </h1>
          <span className="si-distance">0.5 miles form center</span>
          <span className="si-taxi">
            Airport transfer : Train, Bus, Coach and Taxi
          </span>
          <span className="si-subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="si-feature">.3 bedroom .2 bathrom</span>
          <span className="si-cancelation">Free cancellation</span>
          <span className="si-cancel-subtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="si-detail">
          <div className="si-rating">
            <span>Excellent</span>
            <button className="rating-btn">8.5</button>
          </div>
          <div className="si-detailtext">
            <span className="si-price">£112</span>
            <button className="si-button">See Availiabilty</button>
          </div>
        </div>
      </div>
    );
}
 
export default SearchItem;