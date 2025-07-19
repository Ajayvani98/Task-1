// components/Topbar.jsx
import React from 'react';
import '../styles/Topbar.css';
import { FaUniversity, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="logo">
        <h2><FaUniversity /> SBI</h2>
      </div>

      <div className="search-box">
        <input type="text" id="search" placeholder="Search here..." />
        <button><FaSearch /></button>
      </div>

      <div className="topbar-icons">
        <FaBell className="icon" />
        <div className="user">
          <FaUserCircle className="icon user-icon" />
        </div>
      </div>
    </div>
  );
}
