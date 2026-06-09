import React from 'react';
import styles from './Header.module.css';
import { Phone, Drop as Droplet, List } from '@phosphor-icons/react';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Droplet size={32} weight="fill" color="var(--color-primary)" />
          <span className={styles.logoText}>ДонРесурс</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#benefits">Преимущества</a>
          <a href="#howItWorks">Как работаем</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#reviews">Отзывы</a>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+79490000000" className={styles.phone}>
            <Phone size={24} weight="fill" />
            <span className={styles.phoneNumber}>+7 (949) 000-00-00</span>
          </a>
          <button className={styles.ctaBtn} onClick={() => document.getElementById('quiz')?.scrollIntoView({behavior: 'smooth'})}>
            Заявка
          </button>
        </div>
      </div>
    </header>
  );
};
