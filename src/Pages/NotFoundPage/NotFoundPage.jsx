import React from 'react'
import s from './NotFound.module.css'
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <>
      <div className={s.not}>
      Эта страница не существует. Идти на
       <Link to="/" className={s.home}>
        ГЛАВНУЮ СТРАНИЦУ
        </Link>
    </div>
    </>
  )
}

export default NotFoundPage