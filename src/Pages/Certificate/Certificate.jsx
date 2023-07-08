import React from 'react'
import certificate from '../../assets/certificate.svg' 
import backYellow from '../../assets/Rectangle22.svg';
import Rectangle from '../../assets/Rectangle 16.svg'
import certificate2 from '../../assets/certificate2.svg'
import certificate3 from '../../assets/certificate3.svg'
import certificate4 from '../../assets/certificate4.svg'
import certificate5 from '../../assets/certificate5.svg'
import certificate6 from '../../assets/certificate6.svg'
import certificate7 from '../../assets/certificate7.svg'
import s from './Certificate.module.css'

const Certificate = () => {
  return (
  <>          
  <div className={s.certificate_img}>
  <img src={certificate} alt="сертификат качества" />
  </div>
  <div className={s.box_certificate}>
      <img src={certificate2} alt="сертификат качества" className={s.img_right} />
  <img src={certificate3} alt="сертификат качества" className={s.img_left} />
  </div>
<div className={s.box_certificate}>
    <img src={certificate4} alt="сертификат качества" className={s.img_right}/>
  <img src={certificate5} alt="сертификат качества" className={s.img_left}  />
</div> 

<div className={s.box_certificate}>
    <img src={certificate6} alt="сертификат качества" className={s.img_right}/>
  <img src={certificate7} alt="сертификат качества" className={s.img_left}  />
</div>

  <img src={backYellow} alt="сертификат качества" className={s.yellow}/>
  <img src={Rectangle} alt="сертификат качества" className={s.rectan} />
  </>
  )
}

export default Certificate