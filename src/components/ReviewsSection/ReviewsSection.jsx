import React from 'react';
import { motion } from 'framer-motion';
import styles from './ReviewsSection.module.css';
import { Star } from '@phosphor-icons/react';

const reviews = [
  { name: "Александр, Макеевка", text: "Боялся за плитку. Приехали ребята с прицепом, аккуратно заехали, всё сделали за день. Вода чистая, ни капли грязи на фасаде." },
  { name: "Елена, Донецк", text: "До этого приезжали на ЗИЛе, порвали провода и уехали. ДонРесурс проехали без проблем под газовой трубой. Насос качает отлично!" }
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Нам доверяют в ДНР</h2>
        <div className={styles.grid}>
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.stars}>
                {[1,2,3,4,5].map(s => <Star key={s} size={20} weight="fill" color="#F59E0B" />)}
              </div>
              <p className={styles.text}>"{rev.text}"</p>
              <p className={styles.author}>{rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
