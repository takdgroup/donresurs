import React from 'react';
import { motion } from 'framer-motion';
import styles from './BenefitSection.module.css';
import { Drop, Car, Shield } from '@phosphor-icons/react';

const benefits = [
  {
    icon: <Drop size={48} weight="duotone" color="var(--color-primary)" />,
    title: "Абсолютно чистый двор",
    description: "Мы аккуратно вымываем породу водой в специальный приямок. Никакой пыли и грязи на фасаде и окнах, в отличие от устаревшего компрессорного бурения."
  },
  {
    icon: <Car size={48} weight="duotone" color="var(--color-primary)" />,
    title: "Компактность и маневренность",
    description: "Бурим мини-установкой на базе прицепа. Легко проедем под низкими трубами, сохраним ваш газон, забор и тротуарную плитку в первозданном виде."
  },
  {
    icon: <Shield size={48} weight="duotone" color="var(--color-primary)" />,
    title: "Честный диаметр 125мм",
    description: "Используем сертифицированную полимерную трубу. В неё гарантированно проходит насос любого размера, полностью исключая риск его заклинивания."
  }
];

export const BenefitSection = () => {
  return (
    <section id="benefits" className={styles.benefits}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Никаких разрушений участка. <span className={styles.highlight}>Только вода.</span></h2>
        </div>
        
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
