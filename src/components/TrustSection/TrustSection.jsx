import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustSection.module.css';
import { CheckCircle } from '@phosphor-icons/react';

export const TrustSection = () => {
  return (
    <section className={styles.trust}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Сотни скважин в ДНР. <br/>Без пустых обещаний.</h2>
        </motion.div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.trustCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.iconBox}>
              <CheckCircle size={32} weight="fill" color="var(--color-primary)" />
            </div>
            <h3>Оплата 0 рублей до появления воды</h3>
            <p>Мы полностью убрали финансовый риск. Мы не берем предоплат. Вы подписываете акт и оплачиваете работу только после того, как из шланга потечет кристально чистая вода. Нет воды — цена 0 рублей.</p>
          </motion.div>

          <motion.div 
            className={styles.trustCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.iconBox}>
              <CheckCircle size={32} weight="fill" color="var(--color-primary)" />
            </div>
            <h3>Честный 1 год гарантии на скважину</h3>
            <p>Мы не даем сказочных гарантий на 50 лет — в условиях ДНР и сдвигов грунта от вибраций это обман. Мы даем 1 год гарантии на бурение. А если в первый год сломается насос — мы бесплатно достанем его и заменим на новый.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
