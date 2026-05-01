import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-[#8B5E3C]  text-white rounded p-10 gap-2">
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="#">
      <FaYoutube className='text-2xl'/>
      </a>
        <a href="#">
          <FaTwitter className='text-2xl'/>
      </a>
        <a href="#">
          <FaFacebook className='text-2xl'/>
      </a>
    </div>
  </nav>
    <nav className="grid grid-flow-col gap-4">
    <a href="#" className="link link-hover">About us</a>
     <a href="#" className="link link-hover">Contact</a>
  </nav>
  <aside className=''>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by QurbaniHat</p>
  </aside>
</footer>
    );
};

export default Footer;