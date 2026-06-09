import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FaqSection.module.css';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  { q: "У меня очень узкий двор и низкие газовые трубы. Грузовик не проедет.", a: "Наша мини-установка легко проходит в калитку шириной 1 метр и помещается под любым навесом. Высота проезда не имеет значения." },
  { q: "А если вы пробурите, а воды не будет? Я потеряю деньги?", a: "Нет. Наше жесткое правило: нет чистой воды — стоимость работы составляет 0 рублей." },
  { q: "Вся плитка во дворе будет в глине и воде?", a: "Мы используем технологию оборотного водоснабжения. Грязевая вода циркулирует по замкнутому контуру в небольшом приямке, а не течет по всему двору." },
  { q: "Цена вырастет в процессе бурения?", a: "В стоимость метра уже включено всё: бурение, трубы, фильтровая колонна, обсыпка песком, прокачка и монтаж насоса. Сумма фиксируется в начале." }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faq}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Отвечаем на ваши сомнения</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button 
                className={styles.question} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <CaretDown 
                  size={20} 
                  weight="bold" 
                  className={openIndex === i ? styles.iconOpen : styles.iconClosed} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
