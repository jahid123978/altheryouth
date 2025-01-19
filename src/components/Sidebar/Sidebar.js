import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/style.css';
import { IoHome } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md"
import { CiMobile3 } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(".sidebar-fabar");
        if(header){
          if (window.scrollY > 50) {
            header.classList?.add("scrolled");
          } else {
            header.classList?.remove("scrolled");
          }
        }
        
      };
      if(window.classList != null)
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="sidebar-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars className="sidebar-fabar"  style={{ color: isOpen ? 'inherit' : window.scrollY > 50? '#1dc468 ' : 'white' }}/>}
      </button>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='sidebar-icons'>
          <IoHome/>
          <a href="/">Home</a>
        </div>
        <div className='sidebar-icons'>
          <FaRegQuestionCircle/>
        <a href="/">How it works</a>
        </div>
        <div className='sidebar-icons'>
          <FcAbout/>
        <a href="/">Scholarship</a>
        </div>
        <div className='sidebar-icons'>
          <FcCollaboration/>
        <a href="/">Collaborate</a>
        </div>
        <div className='sidebar-icons'>
          <MdOutlinePolicy/>
        <a href="/">Scholarship Policy</a>
        </div>
        <div className='sidebar-icons'>
          < MdOutlineMessage/>
        <a href="/collaborate">Get in touch</a>
        </div>
        <div className='sidebar-icons'>
        <CiMobile3/>
        <a href="/">Get the app</a>
        </div>
        <div className='sidebar-icons'>
          <FiLogIn/>
        <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

