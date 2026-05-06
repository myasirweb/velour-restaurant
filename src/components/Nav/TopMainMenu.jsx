import { useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Headerlogo = {
  title: "reservations",
  link: "/reservations",
};

export default function TopMainMenu(props) {
  const { Topnavlist } = props;

  const [showTopNavFullScreen, setshowTopNavFullScreen] = useState("");
  const showTopnav = () => {
    let topAllList = gsap.utils.toArray(".top-main-menu-li");
    let i = 1;

    if (showTopNavFullScreen == "") {
      setshowTopNavFullScreen("active");
      gsap.set(".ak-main_header_right", {
        display: "none",
      });

      topAllList.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            delay: i++ * 0.4,
            opacity: 1,
          }
        );
      });
    } else {
      gsap.set(".ak-main_header_right", {
        display: "block",
        delay: 0.5,
        duration: 1.5,
      });

      topAllList.forEach((item) => {
        gsap.set(item, {
          y: 0,
          opacity: 0,
        });
      });
      setshowTopNavFullScreen("");
    }
  };

  return (
    <div className="header-top">
      <div className="wrapper">
        <div className="header-logo">
          <Link to={Headerlogo?.link} className="logo">
            {Headerlogo?.title}
          </Link>
        </div>
        <div className="center-log">
          <Link
            to="/"
            style={{
              fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
              fontSize: "1.8rem",
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

        <div className="nav-toggles" onClick={showTopnav}>
          <span
            id="navBar"
            className={`ak-munu_toggles-top ${showTopNavFullScreen}`}
          >
            <span></span>
          </span>
        </div>

        <ul className={`top-main-menu ${showTopNavFullScreen}`}>
          {Topnavlist?.map((item, i) => (
            <li className="top-main-menu-li" key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
