import React, { useState } from "react";

const useForm = (steps: React.ReactNode[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length) return;
    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastSteap: currentStep + 1 == steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
};

export default useForm;
