import React from "react";
import './header.css';

function Header(){
    return (
        <>
        <div className='main-header'>
          <div className='main-header1'>
            <div className='logo-text'>
              <a href='/portfolio' className='ab1'>VK</a>
              <a href='/portfolio' className='ab2'> PORTFOLIO</a>
            </div>
            <div className='navbar'>
              <ul>
                  <li>
                      <a href='#main-app'>Home</a>
                  </li>
                  <li>
                      <a href='#aboutbtn'>About</a>
                  </li>
                  <li>
                      <a href='#expbtn'>Experience</a>
                  </li>
                  <li>
                      <a href='#projbtn'>Projects</a>
                  </li>
              </ul>
            </div>
            <div className='con-btn'>
                  <a href='#conbtn'>Contact</a>
            </div>
          </div>
        </div>
        </>
    )
}
export default Header;