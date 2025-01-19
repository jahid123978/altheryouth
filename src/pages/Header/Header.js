import React, { useEffect, useState } from "react";
import LogoAy2 from "../../assets/icons/LogoAy2";
import LogoAy1 from "../../assets/icons/LogoAy1";
import { FaBars } from "react-icons/fa6";
import "../../styles/style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if(header){
        if (window.scrollY > 50) {
          header.classList?.add("scrolled");
          setIsTrue(true);
        } else {
          header.classList?.remove("scrolled");
          setIsTrue(false);
        }
      }
     
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="header-container">
        <header className="header">
          <div className="header-left">
            <span className="header-fabar">
              {/* <FaBars /> */}
              <Sidebar />
            </span>
            <a href="/">
              <span className="header-logo">
               {isTrue? <LogoAy2/> : <LogoAy1 />}
              </span>
            </a>
          </div>
          <div className="header-right">
            <a href="/">About</a>
            <a href="/">How it works</a>
            <a href="/">Scholarship</a>
            <a href="/">Collaborate</a>
            <a href="/">Login</a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
