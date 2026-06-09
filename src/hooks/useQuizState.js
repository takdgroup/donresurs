import { useState } from 'react';

export const useQuizState = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    location: '',
    accessWidth: '',
    name: '',
    phone: ''
  });

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  return {
    step,
    answers,
    nextStep,
    prevStep,
    updateAnswer
  };
};
