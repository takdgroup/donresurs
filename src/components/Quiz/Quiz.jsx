import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizState } from '../../hooks/useQuizState';
import styles from './Quiz.module.css';
import { CheckCircle, XCircle } from '@phosphor-icons/react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

export const Quiz = () => {
  const { step, answers, nextStep, prevStep, updateAnswer } = useQuizState();
  const [direction, setDirection] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  const handleNext = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="quiz" className={styles.quizSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.quizBox}>
            <div className={styles.successMessage}>
              <h3>Заявка успешно отправлена!</h3>
              <p>Наш инженер свяжется с вами в ближайшее время для уточнения деталей и расчета стоимости.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className={styles.quizSection}>
      <div className={`container ${styles.container}`}>
        
        {/* S.I.N. Offer: Steps 5, 6, 12 */}
        <div className={styles.offerSummary}>
          <h2 className={styles.summaryTitle}>Финальное предложение: Зафиксируйте цену сегодня</h2>
          
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <h3>Что вы получаете:</h3>
              <ul className={styles.summaryList}>
                <li><CheckCircle size={20} color="var(--color-primary)" weight="fill" /> Чистая вода 24/7 без грязи на участке.</li>
                <li><CheckCircle size={20} color="var(--color-primary)" weight="fill" /> Надежная труба 125мм (насос не застрянет).</li>
                <li><CheckCircle size={20} color="var(--color-primary)" weight="fill" /> 0 рублей предоплаты и честная гарантия 1 год.</li>
                <li><CheckCircle size={20} color="#F59E0B" weight="fill" /> <strong>Бонус:</strong> Бесплатный подбор оборудования.</li>
              </ul>
            </div>
            <div className={styles.lossCard}>
              <h3>Что вы теряете, откладывая:</h3>
              <ul className={styles.summaryList}>
                <li><XCircle size={20} color="var(--color-destructive)" weight="fill" /> Зависимость от жесткого графика водоканала.</li>
                <li><XCircle size={20} color="var(--color-destructive)" weight="fill" /> Переплата за покупку и доставку привозной воды.</li>
                <li><XCircle size={20} color="var(--color-destructive)" weight="fill" /> Риск нарваться на летнее повышение цен на бурение.</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.priceCondition}>
            <strong>Цены и условия:</strong> Мы работаем по прозрачной фиксированной цене за метр бурения. В нее уже включены трубы, фильтры и обсыпка. Никаких скрытых платежей — сумма фиксируется в начале работ!
          </div>
        </div>

        <div className={styles.quizBox}>
          
          <div className={styles.header}>
            <h2>Рассчитайте стоимость скважины</h2>
            <div className={styles.progressContainer}>
              <div 
                className={styles.progressBar} 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <p className={styles.stepIndicator}>Шаг {step} из 3</p>
          </div>

          <div className={styles.contentWrapper}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.slide}
              >
                
                {step === 1 && (
                  <div className={styles.stepContent}>
                    <h3>Где находится ваш участок?</h3>
                    <div className={styles.options}>
                      {['Донецк', 'Макеевка', 'Ясиноватая', 'Горловка', 'Енакиево', 'Харцызск', 'Иловайск', 'Зугрэс', 'Другой'].map(city => (
                        <label key={city} className={styles.optionLabel}>
                          <input 
                            type="radio" 
                            name="location" 
                            value={city}
                            checked={answers.location === city}
                            onChange={(e) => updateAnswer('location', e.target.value)}
                          />
                          <span className={styles.optionText}>{city}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className={styles.stepContent}>
                    <h3>Какая ширина заезда на участок?</h3>
                    <p className={styles.hint}>Наша мини-станция проезжает в калитку от 1 метра.</p>
                    <div className={styles.options}>
                      {['Менее 1 метра', 'От 1 до 2 метров', 'Более 2 метров'].map(width => (
                        <label key={width} className={styles.optionLabel}>
                          <input 
                            type="radio" 
                            name="accessWidth" 
                            value={width}
                            checked={answers.accessWidth === width}
                            onChange={(e) => updateAnswer('accessWidth', e.target.value)}
                          />
                          <span className={styles.optionText}>{width}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form className={styles.stepContent} onSubmit={handleSubmit}>
                    <h3>Куда отправить расчет и бесплатный подбор насоса?</h3>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Ваше имя</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={answers.name}
                        onChange={(e) => updateAnswer('name', e.target.value)}
                        placeholder="Иван"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Номер телефона</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={answers.phone}
                        onChange={(e) => updateAnswer('phone', e.target.value)}
                        placeholder="+7 (949) 000-00-00"
                      />
                    </div>
                    {/* Step 13: Финальный призыв */}
                    <button type="submit" className={styles.submitBtn}>
                      Зафиксировать цену и получить расчет
                    </button>
                  </form>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.footer}>
            {step > 1 && (
              <button className={styles.prevBtn} onClick={handlePrev}>
                Назад
              </button>
            )}
            
            {step < 3 && (
              <button 
                className={styles.nextBtn} 
                onClick={handleNext}
                disabled={step === 1 ? !answers.location : !answers.accessWidth}
              >
                Далее
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
