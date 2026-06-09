import React from 'react';
import { motion } from 'framer-motion';
import styles from './MythBusterSection.module.css';
import { WarningCircle } from '@phosphor-icons/react';

export const MythBusterSection = () => {
  return (
    <section className={styles.mythBuster}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.alert}>
            <WarningCircle size={24} color="var(--color-destructive)" />
            <span>Важно знать перед заказом</span>
          </div>
          <h2>Осторожно: Миф о «Двойной Обсадке»</h2>
          <p>
            Многие бригады навязывают «двойную обсадку» (металл + пластик) как единственный стандарт надежности. На деле это способ продать вам больше погонных метров дешевой технической трубы.
          </p>
          <p>
            При малейшей вибрации или сдвиге слоев грунта внешняя труба сдавливает внутреннюю. Итог — ваш дорогой насос <strong>намертво застревает внутри</strong>, скважина умирает, а вам приходится платить за бурение новой.
          </p>
          <div className={styles.solutionBox}>
            <strong>Наше решение:</strong> Мы бурим строго по «Системе 125» — используем одну толстостенную пищевую полимерную трубу 125 мм. Она эластична, выдерживает колоссальное давление и гарантирует свободный ход насоса навсегда.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
