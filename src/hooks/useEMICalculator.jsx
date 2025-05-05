import { useCallback } from "react";

export function useEMICalculator() {
  const calculateEMI = useCallback((principal, annualRatePct, years) => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(annualRatePct) / 100;
    const N = parseInt(years, 10) * 12;
    const R = annualRate / 12;

    // EMI calculation 
    const factor = Math.pow(1 + R, N);
    const rawEmi = (P * R * factor) / (factor - 1);
    
    const emi = Number(rawEmi.toFixed(2));

    // amortization schedule 
    let balance = P;
    const schedule = [];

    for (let month = 1; month <= N; month++) {
      const interestPayment = Number((balance * R).toFixed(2));
      const principalPayment = Number((emi - interestPayment).toFixed(2));
      balance = Number((balance - principalPayment).toFixed(2));
      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance,
      });
    }

    return { emi, schedule };
  }, []);

  return calculateEMI;
}
