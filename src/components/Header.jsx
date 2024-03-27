import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faMoon,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from "./DropDownMenu";

function Header() {
  const headerStyle = {
    backgroundColor: "#eb3636",
    textAlign: "center",
    color: "white",
    height: "40px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  };

  const headerTitle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
    color: "white",
    height: "120px",
    alignItems: "center",
  };

  return (
    <>
      <div style={headerStyle}>Free Delivery on orders over £90.</div>
      <div style={headerTitle}>
        <div style={{ position: "relative", marginLeft: "80px" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              backgroundColor: "black",
              color: "grey",
              fontSize: "16px",
              paddingLeft: "10px",
              paddingRight: "200px",
              height: "40px",
              border: "none",
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "grey",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "20px",
            marginRight: "200px",
          }}
        >
          ShopApp
        </div>
        <div style={{ display: "flex", marginRight: "80px", fontSize: "30px" }}>
          <FontAwesomeIcon icon={faMoon} style={{ marginRight: "20px" }} />
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "20px" }} />
          <FontAwesomeIcon icon={faHeart} style={{ marginRight: "20px" }} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <DropDownMenu />
    </>
  );
}

export default Header;
