"use client";

import React, { useRef, useState, useEffect } from "react";
// Utils
import dataForm from "@/utils/dataform";
// Styles
import styles from "./form.module.scss";

const Form: React.FC = () => {
  // React Ref
  const formRef = useRef<HTMLFormElement>(null);
  // React State
  const [message, setMessage] = useState<null | string>(null);
  // React Effect
  useEffect(() => {
    if (message)
      setTimeout(() => {
        setMessage(null);
      }, 3000);
  }, [message]);

  const sendMail = async () => {
    const form = formRef.current;

    if (form) {
      const data = dataForm<{ name: string; tel: string }>(form);

      if (data) {
        const { name, tel } = data;

        try {
          const data = await fetch("/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, tel }),
          });

          if (data.ok) {
            setMessage("Данные отправлены успешно!");
          } else throw new Error("Что-то пошло не так, повторите позже!");
        } catch (error) {
          if (error instanceof Error) {
            setMessage(error.message);
          }
        }
      }
    }
  };

  return (
    <form ref={formRef} className={styles.form}>
      <h2 className={styles.form__title}>Обратный звонок</h2>
      <ul className={styles.form__list}>
        <li>
          <label htmlFor="name" className={styles.form__label_input}>
            <span>Ваше имя</span>
            <input
              id="name"
              className={styles.form__input}
              placeholder="Ваше имя"
              type="text"
              name="name"
              autoComplete="given-name"
              minLength={2}
              maxLength={20}
              lang="ru"
              required
            />
          </label>
        </li>
        <li>
          <label htmlFor="tel" className={styles.form__label_input}>
            <span>Номер телефона</span>
            <input
              id="tel"
              className={styles.form__input}
              placeholder="Номер телефона"
              type="tel"
              name="tel"
              inputMode="tel"
              autoComplete="tel"
              required
            />
          </label>
        </li>
        <li>
          <label htmlFor="agreement" className={styles.form__label_checkbox}>
            <div className={styles.form__checkbox_box}>
              <input
                id="agreement"
                className={styles.form__checkbox}
                placeholder="Согласие на обработку персональных данных"
                name="agreement"
                type="checkbox"
                defaultChecked
                required
              />
              <span className={styles.form__checkbox_icon} />
            </div>
            <p className={styles.form__checkbox_desc}>
              Согласие на обработку персональных данных
            </p>
          </label>
        </li>
      </ul>
      <button
        className={styles.form__btn}
        type="button"
        onClick={sendMail}
        disabled={Boolean(message)}
      >
        Отправить <span>→</span>
      </button>
      {message && (
        <p className={styles.form__message} role="alert">
          {message}
        </p>
      )}
    </form>
  );
};

export default Form;
