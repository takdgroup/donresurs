import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CalculatorSection.module.css';
import { CaretRight, Calculator } from '@phosphor-icons/react';

export const CalculatorSection = () => {
  const [depth, setDepth] = useState(50);
  const pricePerMeter = 3750;
  const total = depth * pricePerMeter;

  return (
    <section id="calculator" className={styles.calcSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}><Calculator size={20} /> Прозрачная смета</div>
          <h2>Калькулятор стоимости бурения</h2>
          <p>В среднем глубина скважины в ДНР составляет <strong>50 метров</strong> (бывает до 80-150 м). Рассчитайте ориентировочную стоимость для вашего участка прямо сейчас.</p>
        </div>
        
        <motion.div 
          className={styles.calcCard} 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <div className={styles.sliderContainer}>
            <div className={styles.sliderHeader}>
              <span>Предполагаемая глубина:</span>
              <span className={styles.depthValue}>{depth} метров</span>
            </div>
            
            <input 
              type="range" 
              min="10" 
              max="150" 
              value={depth} 
              onChange={(e) => setDepth(Number(e.target.value))}
              className={styles.slider}
              style={{ backgroundSize: `${((depth - 10) * 100) / 140}% 100%` }}
            />
            
            <div className={styles.sliderLabels}>
              <span>10 м</span>
              <span>150 м</span>
            </div>
          </div>
          
          <div className={styles.resultContainer}>
            <div className={styles.priceRow}>
              <span>Стоимость 1 п.м.:</span>
              <strong>{pricePerMeter} ₽</strong>
            </div>
            <div className={styles.totalRow}>
              <span>Итого под ключ:</span>
              <strong className={styles.totalPrice}>{total.toLocaleString('ru-RU')} ₽</strong>
            </div>
          </div>
          
          <button className={styles.orderBtn} onClick={() => document.getElementById('quiz')?.scrollIntoView({behavior: 'smooth'})}>
            Зафиксировать цену <CaretRight size={20} weight="bold" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
