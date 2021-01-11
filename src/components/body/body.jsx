import img from "../../static/logo.png";
import search from "../../static/search.jpg";
import microphone from "../../static/microphone.png";

function Body() {
  return (
    <div className="body-wrapper">
      <div className="logo">
        <img id="g-img" src={img} />
      </div>
      <div className="input-wrapper">
        <img
          class="search-icon"
          src={search}
          height="20px"
          width="20px"
          style={{ position: "relative", top: "13px", left: "55px" }}
        />

        <img
          class="microphone-icon"
          src={microphone}
          height="20px"
          width="20px"
          style={{ position: "relative", top: "13px", left: "560px" }}
        />

        <input id="input" type="text" />
      </div>
      <div className="button-wrapper">
        <button id="search-btn">Google Search</button>
        <button id="search-btn">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default Body;
