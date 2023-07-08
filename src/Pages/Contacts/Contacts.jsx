import React from 'react';
import location from '../../assets/Vector-location.png';
import phone from '../../assets/Vector-phone.png';
import back from '../../assets/Rectangle12.svg';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <>
      <h2 className={s.contact}>                   
      КОНТАКТЫ
</h2>
    <div className={s.box}>
       <ul className={s.first}>
      <li className={s.li1}>
        ОсОО “ АТАМАН KG “
        </li>
      <li className={s.li}>
      кыргызская республика
        </li>
      <li className={s.li}>
      город бишкек
        </li>
      <li className={s.li}>
      улица осташковская 48 
        <img src={location} alt="" />
        </li>
    </ul>

    <ul className={s.second}>
      <li className={s.li}>
      наши контакты: 
        </li>
      <li className={s.li}>
        <img src={phone} alt="" />
        <a href="tel:0551788146"
         className={s.num}>
        +996 551 788 146
        </a>
        </li>

        <li className={s.li}>ОТДЕЛ ПРОДАЖ:</li>
        <li className={s.li}>
        <img src={phone} alt="" />
        <a href="tel:+996 553 117 773"
         className={s.num}>
        +996 553 117 773
        </a>
        </li>
        <li className={s.li}>
        <img src={phone} alt="" />
        <a href="tel:+996 999 519 010"
         className={s.num}>
        +996 999 519 010
        </a>
        </li>

      <li className={s.li}>
         <a href='mailto:ataman.product01@gmail.com'
        className={s.li}
        > email: ataman.product01</a> 
         </li>
    </ul> 
    </div>
 
  <img src={back} alt="" className={s.back} />

  <div className={s.box2}>
       <ul className={s.first2}>
      <li className={s.ataman}>
        ОсОО “ АТАМАН KG “
        </li>
      <li className={s.li2}>
      кыргызская республика
        </li>
      <li className={s.li2}>
      город бишкек
        </li>
      <li className={s.li2}>
      улица осташковская 48  
        <img src={location} alt="" />
        </li>
    </ul>

    <ul className={s.second2}>
      <li className={s.li2}>
      наши контакты: 
        </li>
      <li className={s.li2}>
        <img src={phone} alt="" />
        <a href="tel: 0551788146"
         className={s.num2}>
        +996 551 788 146
        </a>
        </li>
        <li className={s.li2}>
        ОТДЕЛ ПРОДАЖ:
          </li>
        <li className={s.li2}>
        <img src={phone} alt="" />
        <a href="tel:+996 553 117 773"
         className={s.num}>
        +996 553 117 773
        </a>
        </li>
        <li className={s.li2}>
        <img src={phone} alt="" />
        <a href="tel:+996 999 519 010"
         className={s.num}>
        +996 999 519 010
        </a>
        </li>

      <li className={s.li2}>
         <a href='mailto:ataman.product01@gmail.com'
        className={s.li2}
        >ataman.product01</a> 
         </li>
    </ul> 
    </div>
    </>
  )
}

export default Contacts