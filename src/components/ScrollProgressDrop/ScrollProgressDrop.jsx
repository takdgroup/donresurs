import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Drop } from '@phosphor-icons/react';

export const ScrollProgressDrop = () => {
  const { scrollYProgress } = useScroll();
  
  // Плавная анимация заполнения линии (высота от 0 до 100%)
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Плавное перемещение самой капельки (от 0vh до 95vh)
  const yPos = useTransform(scrollYProgress, [0, 1], ["0vh", "95vh"]);
  const yPosSpring = useSpring(yPos, { stiffness: 100, damping: 30 });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: '20px',
      width: '4px',
      backgroundColor: 'rgba(2, 132, 199, 0.15)',
      zIndex: 50,
      pointerEvents: 'none',
      borderRadius: '4px'
    }}>
      <motion.div 
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0284C7',
          scaleY,
          transformOrigin: 'top',
          borderRadius: '4px',
          boxShadow: '0 0 10px rgba(2, 132, 199, 0.5)'
        }} 
      />
      <motion.div 
        style={{
          position: 'absolute',
          top: yPosSpring,
          left: '-14px',
          color: '#0284C7',
          filter: 'drop-shadow(0 4px 8px rgba(2, 132, 199, 0.6))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Drop size={32} weight="fill" />
      </motion.div>
    </div>
  );
};
