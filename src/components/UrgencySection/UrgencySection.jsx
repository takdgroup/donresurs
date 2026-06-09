import React from 'react';
import { motion } from 'framer-motion';
import styles from './UrgencySection.module.css';
import { ClockCountdown } from '@phosphor-icons/react';

export const UrgencySection = () => {
  return (
    <section className={styles.urgency}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.iconBox}>
            <ClockCountdown size={48} color="var(--color-on-primary)" />
          </div>
          <h2>Свободные даты бурения закрываются ежедневно</h2>
          <p>
            Дефицит воды в ДНР заставляет сотни семей переходить на автономные источники. 
            Из-за этого график нашей мини-станции расписан на недели вперед. Максимальная пропускная способность — всего 3 скважины в неделю.
          </p>
          <p className={styles.highlight}>
            Забронировав дату сегодня, вы фиксируете цену и гарантируете себе воду, избегая ожидания в пик летней жары и переплат за привозную воду.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
