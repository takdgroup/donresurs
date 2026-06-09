import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.info}>
          <h3 className={styles.brandName}>ДонРесурс</h3>
          <p>Бурение скважин по "Системе 125" в ДНР.</p>
          <p>© {new Date().getFullYear()} Все права защищены.</p>
        </div>
        <div className={styles.links}>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};
