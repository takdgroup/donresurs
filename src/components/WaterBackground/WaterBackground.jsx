import React from 'react';
import styles from './WaterBackground.module.css';

export const WaterBackground = () => {
  // Генерируем 35 капель с разными размерами, позициями и скоростями
  const drops = Array.from({ length: 35 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 12 + 8}s`,
    delay: `-${Math.random() * 20}s`,
    size: `${Math.random() * 15 + 10}px`,
    opacity: Math.random() * 0.5 + 0.2
  }));

  return (
    <div className={styles.waterContainer}>
      {drops.map(drop => (
        <div
          key={drop.id}
          className={styles.drop}
          style={{
            left: drop.left,
            width: drop.size,
            height: drop.size,
            animationDuration: drop.animationDuration,
            animationDelay: drop.delay,
            opacity: drop.opacity
          }}
        />
      ))}
    </div>
  );
};
