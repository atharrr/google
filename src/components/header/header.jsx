import svg from "../../static/nine-squares.svg";

function Header() {
  return (
    <div className="header-container">
      <span id="gmail">Gmail</span>
      <span id="images">Images</span>
      <img id="square-svg" src={svg} width="15px" height="15px" />
    </div>
  );
}

export default Header;
