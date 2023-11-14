import React from 'react';
import { styles } from "../styles";
import { ttech, ttechlogo } from '../assets';


const Footer = () => {
  return (
    <div className="footer relative w-full h-full mx-auto bg-blend-difference justify-center">
      <img className='footer_logo' src={ttech} alt="" />
      <h1 className={`${styles.sectionSubText} mt-2 text-blue-600`} >Copyright 2023. <br /> This portfolio website is designed and developed from T-Tech Studios</h1>
      <img className='ttechlogo' src={ttechlogo} alt="" />
    </div>
  )
}

export default Footer