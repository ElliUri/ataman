import React from "react";
import s from "./Products.module.css";
import pelmeniReal from '../../assets/pelmeni-real.jpeg'
import pelmeniStolich from '../../assets/pelmeni-stolich.jpg'
import chuchvara from '../../assets/chuchvara.jpg'
import chuchvaraVostok from '../../assets/chuchvara-vostok.jpg'
import dough from '../../assets/dough.jpg'
import mantyMeat from '../../assets/manty-meat.jpg'
import mantyPump from '../../assets/manty-pumpkin.jpg'
import vareniky from '../../assets/vareniky.jpg'
import frika from '../../assets/mini-meatballs-for-freezing2.jpg'
import kotlety from '../../assets/kotlety.jpeg'

const Products = () => {
  return (
    <>
      <h3 className={s.products}>ПРОДУКЦИЯ</h3>
      <div className={s.grid}>
      
          <div className={s.card}>
            <img src={pelmeniReal} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ПЕЛЬМЕНИ НАСТОЯЩИЕ</h3>
          </div>
          <div className={s.card}>
            <img src={kotlety} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>КОТЛЕТЫ ГОВЯЖЬИ</h3>
          </div>
          <div className={s.card}>
            <img src={frika} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ФРИКАДЕЛЬКИ ГОВЯЖЬИ</h3>
          </div>
          <div className={s.card}>
            <img src={chuchvara} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ЧУЧВАРА</h3>
          </div>
          <div className={s.card}>
            <img src={vareniky} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ВАРЕНИКИ С КАРТОФЕЛЕМ</h3>
          </div>
          <div className={s.card}>
            <img src={dough} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>БЕЗДРОЖЖЕВОЕ СЛОЕНОЕ ТЕСТО</h3>
          </div>
          <div className={s.card}>
            <img src={mantyMeat} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>МАНТЫ С МЯСОМ</h3>
          </div>
          <div className={s.card}>
            <img src={mantyPump} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>МАНТЫ С ТЫКВОЙ</h3>
          </div>
          <div className={s.card}>
            <img src={chuchvaraVostok} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ЧУЧВАРА ВОСТОЧНАЯ</h3>
          </div>
          <div className={s.card}>
            <img src={pelmeniStolich} alt='пельмени' className={s.cutlets_img} />
            <h3 className={s.cutlets}>ПЕЛЬМЕНИ СТОЛИЧНЫЕ</h3>
          </div>
      </div>
    </>
  );
};

export default Products;