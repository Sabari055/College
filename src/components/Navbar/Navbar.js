import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import {
  AiOutlineGlobal,
  AiOutlineTeam,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineTrendingUp,
  MdOutlineEventNote,
  MdHistory,
} from "react-icons/md";
import { BiBookmark, BiSupport, BiPaint } from "react-icons/bi";
import "./Navbar.css"; 
import Header from "../Header/Header";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Header />
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          type="button"
          className="menu-button md:hidden"
        >
          <FaBars className="menu-icon" />
        </button>
      )}

      <aside
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        aria-label="Sidebar"
      >
        <div className="sidebar-content">
          <ul className="sidebar-menu">
            <li>
              <a href="#" className="sidebar-item">
                <FaHome className="icon" />
                <span>Home</span>
              </a>
            </li>

            <li className="sidebar-subheading">Explore</li>
            <li>
              <a href="#" className="sidebar-item">
                <MdOutlineTrendingUp className="icon" />
                <span>Trending</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <AiOutlineGlobal className="icon" />
                <span>Cultural</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <MdOutlineEventNote className="icon" />
                <span>Webinar</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <AiOutlineTeam className="icon" />
                <span>Jobs</span>
              </a>
            </li>

            <li className="sidebar-subheading">Myself</li>
            <li>
              <a href="#" className="sidebar-item">
                <MdHistory className="icon" />
                <span>History</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <BiBookmark className="icon" />
                <span>Bookmarks</span>
              </a>
            </li>

            <li className="sidebar-subheading">Settings</li>
            <li>
              <a href="#" className="sidebar-item">
                <AiOutlineSetting className="icon" />
                <span>Notification</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <BiPaint className="icon" />
                <span>Appearance & Accessibility</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <AiOutlineGlobal className="icon" />
                <span>Language</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <BiSupport className="icon" />
                <span>Help & Center</span>
              </a>
            </li>

        
            <li className="sidebar-subheading">Create</li>
            <li>
              <a href="#" className="sidebar-item">
                <AiOutlineSetting className="icon" />
                <span>Webinar</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <BiPaint className="icon" />
                <span>Hackathon</span>
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-item">
                <BiPaint className="icon" />
                <span>Culturals</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
