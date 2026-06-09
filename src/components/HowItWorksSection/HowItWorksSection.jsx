import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorksSection.module.css';

const steps = [
  { num: "01", title: "Бронирование", desc: "Вы оставляете заявку, мы рассчитываем параметры под ваш район." },
  { num: "02", title: "Аккуратный заезд", desc: "Наша компактная мини-буровая заезжает на участок без демонтажа ворот." },
  { num: "03", title: "Чистое бурение", desc: "Бурим с водяной промывкой породы. Фасад дома остается чистым." },
  { num: "04", title: "Обсадка и прокачка", desc: "Устанавливаем полимерную трубу 125 мм и прокачиваем скважину до кристально чистой воды." },
  { num: "05", title: "Сдача объекта", desc: "Вы лично проверяете напор, принимаете работу, и мы подключаем насос к дому." }
];

export const HowItWorksSection = () => {
  return (
    <section id="howItWorks" className={styles.howItWorks}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>5 простых шагов к чистой воде по «Системе 125»</h2>
        </div>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.stepCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
