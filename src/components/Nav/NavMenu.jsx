import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import navitemlist from "../../dataJson/navitemlist.json";

export default function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");

  const navBarShow = () => {
    if (navBar == "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist == "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  return (
    <div className="ak-main_header">
      <div className="ak-nav-container">
        <div className="ak-main_header_in">
          <div className="ak-main_header_left">
            <Link
              className="ak-site_branding"
              to="/"
              style={{
                fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
                fontSize: "1.5rem",
                letterSpacing: "0.3em",
                color: "#FFD28D",
                textDecoration: "none",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              VELOUR
            </Link>
          </div>
          <div className="ak-main_header_right">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return <MenuItem props={item} key={i} />;
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
