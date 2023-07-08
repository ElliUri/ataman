import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../../assets/logo.svg';
import logoPhone from '../../../assets/logo-phone.svg'
import s from './Header.module.css';

const Header = () => {
 
  const [header, setHeader] = useState(false);

  return (
  <>
     <header className={s.header}>
      <Link to="/">
        <img src={logo} alt="" className={s.logo}/>
        <img src={logoPhone} alt="" className={s.logoPhone}/>
        </Link>   
        <ul
          className={
                header ? [s.menu, s.active].join(' ') : [s.menu]}> 
            <li className={s.li_links}>
                     <Link 
                className={s.links} 
                to='/'
                >
                    ГЛАВНАЯ
                    </Link> 
              
               
            </li>
            <li className={s.li_links}>
                <Link 
                className={s.links} 
                to='/products'>
                    ПРОДУКЦИЯ
                    </Link>
            </li>
            <li className={s.li_links}>
                <Link 
                className={s.links} 
                to='certificates'>   
                 СЕРТИФИКАТЫ
                </Link>
                </li>
            <li className={s.li_links}>

                <Link 
                to='about-us' 
                className={s.links}>
                    О НАС
                    </Link>
            </li>
            <li className={s.li_links}>
   
                <Link 
                className={s.links} 
                to='contacts'>
                    КОНТАКТЫ
                    </Link>
            </li>
           </ul> 
           <div onClick={() => setHeader(!header)} className={s.mobile_btn}>
            {header ? <AiOutlineClose size={30} className={s.header_icon} /> : <AiOutlineMenu size={30} className={s.header_icon} />}
             
            </div>
    </header>
        </>    
  )
}

export default Header