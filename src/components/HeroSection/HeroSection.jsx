import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ShieldCheck, Drop, Target } from '@phosphor-icons/react';

export const HeroSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Target size={18} weight="bold" />
            <span>Работаем по всему ДНР</span>
          </div>
          <h1 className={styles.title}>
            Бурение скважин на воду по «Системе 125» 
            <span className={styles.highlight}> Без скрытых наценок</span>
          </h1>
          <p className={styles.subtitle}>
            Вся правда о скважинах: почему стандартная "двойная обсадка" убьет ваш насос при первом же сдвиге грунта. Мы используем одну сертифицированную толстостенную полимерную трубу 125 мм.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><Drop size={24} weight="fill" /></div>
              <span>Оплата 0 ₽ до визуально чистой воды</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}><ShieldCheck size={24} weight="fill" /></div>
              <span>Честная гарантия 1 год по договору</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formCard}>
            {submitted ? (
               <div className={styles.successBox}>
                 <ShieldCheck size={64} weight="fill" color="var(--color-primary)" />
                 <h3>Заявка принята!</h3>
                 <p>Инженер свяжется с вами в течение 10 минут.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.leadForm}>
                <h3>Зафиксировать цену</h3>
                <p>Получите бесплатный расчет стоимости под ваш район ДНР</p>
                <input 
                  type="text" 
                  placeholder="Как к вам обращаться?" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={styles.input}
                />
                <input 
                  type="tel" 
                  placeholder="+7 (949) 000-00-00" 
                  required 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className={styles.input}
                />
                <button type="submit" className={styles.submitBtn}>
                  Забронировать дату
                </button>
                <div className={styles.urgencyAlert}>
                  🔥 Свободных мест на этой неделе: 2
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
