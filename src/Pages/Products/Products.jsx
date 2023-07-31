import React, { useState, useEffect } from "react";
import s from "./Products.module.css";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/loader/Loader";
import sl from "../../Components/loader/Loader.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://13.53.82.132/email/product/api/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={sl.sorry}>
        Просим прощения, что-то пошло не так, ошибка при загрузке товаров.
      </div> 
    );
  }

  return (
    <>
      <h3 className={s.products}>ПРОДУКЦИЯ</h3>
      <div className={s.grid}>
        {products.map((product) => (
          <div key={product.id}> 
             <img src={product.image} alt={product.name} className={s.cutlets_img} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;


// import React, { useState, useEffect } from "react";
// import s from "./Products.module.css";
// import cart from "../../assets/cart.svg";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import { Loader } from "../../Components/loader/Loader";
// import sl from '../../Components/loader/Loader.module.css'

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true); // Устанавливаем состояние загрузки перед началом запроса

//     fetch("http://16.170.232.252/email/product/api/")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false); // Устанавливаем состояние загрузки как завершенное после успешного получения данных
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setError(true); // Устанавливаем состояние ошибки в случае неудачного запроса
//         setLoading(false); // Устанавливаем состояние загрузки как завершенное после ошибки
//       });
//   }, []);


//   if (loading) {
//     return <Loader />; // Показываем компонент Loader, если данные еще загружаются
//   }

//   if (error) {
//     return <div className={sl.sorry}>
//       Просим прощения, что-то пошло не так, ошибка при загрузке товаров.
//       </div>; // Показываем сообщение об ошибке, если не удалось получить данные
//   }

//   return (
//     <>
//       <h3 className={s.products}>
//       ПРОДУКЦИЯ
//         </h3>
//       <div className={s.grid}>
//         {products.map((product) => (
//   <div key={product.id}>
//     <img src={'http://16.170.232.252/media/image/'} alt={product.name} />
//     <h3>{product.name}</h3>
//   </div>
// ))}
//         {/* {products.map((product) => (
//           <div className={s.card} key={product.id}>
//              <img src={'/media/image/${product.image}'} alt={product.name} />
//             <img src={product.image} alt={product.name} className={s.cutlets_img} />
//             <h3 className={s.cutlets}>{product.name}</h3>
//             <button className={s.cart}>
//               <Link className={s.link} to="/order">
//                 <img src={cart} alt="" className={s.cart_img} />
//                 ЗАКАЗАТЬ
//               </Link>
//             </button>
//           </div>
//         ))} */}
//       </div>
//     </>
//   );
// };

// export default Products;
