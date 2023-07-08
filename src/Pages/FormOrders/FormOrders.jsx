import React, { useEffect, useState } from 'react';
import s from './FormOrders.module.css';
import Rectangle from '../../assets/Rectangle 16.svg';

const FormOrders = () => {
    const [formvalue, setFormvalue] = useState({ name: '', email: '', message: '' });
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);
    const [textMessage, setTextMessage] = useState(false);

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    };

    const validationform = (value) => {
        const errors = {};
        if (!value.name) {
            errors.name = '* Пожалуйста, введите имя';
        }
        if (!value.email) {
            errors.email = 'Необходимый';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
            errors.email = 'Необходимый';
        }
        if (!value.message) {
            errors.message = '* Пожалуйста, введите сообщение';
        }
        return errors;
    };


    useEffect(() => {
        if (Object.keys(formerror).length === 0 && issubmit) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formvalue),
            };
            fetch('http://13.53.133.130/email/email/api/', requestOptions)
                .then((response) => response.json())
                .catch((error) => console.error(error));
            setTextMessage(true);
        }
    }, [formerror, formvalue, issubmit]);

    return (
        <>
            <p className={s.write_us}>
            Вы можете заказать или задать интересующие вас вопросы, мы будем рады ответить! 😊ы можете заказать или задать интересующие вас вопросы, мы будем рады ответить! 😊
                </p>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    type="text"
                    className={s.name}
                    name="name"
                    value={formvalue.name}
                    onChange={handlevalidation}
                    placeholder="Имя"
                />
                <span className={s.message_error}>
                    {formerror.name}
                </span>
                <input
                    type="text"
                    className={s.email}
                    name="email"
                    value={formvalue.email}
                    onChange={handlevalidation}
                    placeholder="Почта"
                />
                <span className={s.message_error}>{formerror.email}</span>

                <textarea
                    className={s.message}
                    name="message"
                    value={formvalue.message}
                    onChange={handlevalidation}
                    placeholder="Сообщение"
                />

                <span className={s.message_error}>{formerror.message}</span>

                <button className={s.send} type="submit" name="button">
                Отправить
                </button>

                {textMessage && <p>
                    Спасибо, Ваше письмо отправлено!
                    </p>}
            </form>
            <img src={Rectangle} alt="" className={s.rectan} />
        </>
    );
};

export default FormOrders;
