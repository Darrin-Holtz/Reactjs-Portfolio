import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Darrin-Holtz" aria-label="GitHub Link">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100095272927131" aria-label="Facebook Link">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/akadarrinholtz/" aria-label="Instagram Link">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/darrin-holtz-a6909a2b1/" aria-label="Linkedin Link">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
