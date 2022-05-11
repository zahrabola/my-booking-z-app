import "./MailList.css";

const MailList = () => {
    return (
      <div className="Mail">
        <h1 className="mailtitle">Save time and Money</h1>
        <span className="maildescription">
          Sign up and We'll send the best deals to you
        </span>
        <div className="mail-inputcontainer">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    );
}






export default MailList