import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { SchemeData } from '@/data/schemes';

interface LiveCalculatorProps {
  scheme: SchemeData;
}

export function LiveCalculator({ scheme }: LiveCalculatorProps) {
  const { calculator } = scheme;
  const [amount, setAmount] = useState(calculator.defaultAmount);
  const [tenure, setTenure] = useState(calculator.defaultTenure);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when amount or tenure changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [amount, tenure]);

  // Generic calculation based on scheme type
  const calculateResult = () => {
    const principal = amount;
    const rate = calculator.interestRate / 100;
    const time = tenure;

    // For MIS, calculate monthly income
    if (scheme.id === 'MIS') {
      const monthlyIncome = (principal * rate) / 12;
      return monthlyIncome;
    }

    // For RD, calculate maturity with monthly compounding
    if (scheme.id === 'RD') {
      const months = time * 12;
      const monthlyRate = rate / 12;
      const maturity = principal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      return maturity;
    }

    // For SSA, calculate with annual compounding over tenure
    if (scheme.id === 'SSA') {
      const maturity = principal * Math.pow(1 + rate, time);
      return maturity;
    }

    // For others (SB, TD, PLI_RPLI), use compound interest
    const maturity = principal * Math.pow(1 + rate, time);
    return maturity;
  };

  const result = calculateResult();

  return (
    <div className="frosted-glass-light rounded-xl p-6 border-2 border-neon-red/40 shadow-official">
      <h3 className="heading-md text-neon-red mb-6">
        Live 2026 Calculator
      </h3>

      <div className="space-y-6">
        {/* Amount Input */}
        <div className="space-y-3">
          <Label htmlFor="amount" className="body-base text-official-primary font-semibold">
            {calculator.label}
          </Label>
          <div className="flex gap-4 items-center">
            <Slider
              id="amount"
              min={calculator.minAmount}
              max={calculator.maxAmount}
              step={calculator.step}
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              className="flex-1"
            />
            <Input
              type="number"
              value={amount}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= calculator.minAmount && val <= calculator.maxAmount) {
                  setAmount(val);
                }
              }}
              className="w-32 bg-white border-metallic-gold/30 text-neon-red font-semibold focus:border-metallic-gold placeholder:text-neon-red/50 caret-neon-red"
              min={calculator.minAmount}
              max={calculator.maxAmount}
              step={calculator.step}
            />
          </div>
          <p className="body-sm text-official-tertiary">
            Range: ₹{calculator.minAmount.toLocaleString('en-IN')} - ₹{calculator.maxAmount.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Tenure Input (if applicable) */}
        {calculator.minTenure !== calculator.maxTenure && (
          <div className="space-y-3">
            <Label htmlFor="tenure" className="body-base text-official-primary font-semibold">
              Tenure (Years)
            </Label>
            <div className="flex gap-4 items-center">
              <Slider
                id="tenure"
                min={calculator.minTenure}
                max={calculator.maxTenure}
                step={1}
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                className="flex-1"
              />
              <Input
                type="number"
                value={tenure}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= calculator.minTenure && val <= calculator.maxTenure) {
                    setTenure(val);
                  }
                }}
                className="w-32 bg-white border-metallic-gold/30 text-neon-red font-semibold focus:border-metallic-gold placeholder:text-neon-red/50 caret-neon-red"
                min={calculator.minTenure}
                max={calculator.maxTenure}
              />
            </div>
            <p className="body-sm text-official-tertiary">
              Range: {calculator.minTenure} - {calculator.maxTenure} years
            </p>
          </div>
        )}

        {/* Result Display */}
        <div className="mt-6 p-6 bg-gradient-to-br from-white/95 to-white/90 rounded-lg border-2 border-metallic-gold/40">
          <p className="body-sm text-gray-700 mb-2 font-medium">
            {calculator.resultLabel} {calculator.minTenure !== calculator.maxTenure ? `${tenure} years` : ''}
          </p>
          <p className={`text-3xl md:text-4xl font-bold text-black transition-all duration-300 ${isAnimating ? 'live-result-animate' : ''}`}>
            ₹{result.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </p>
          <p className="body-sm text-gray-600 mt-3 leading-relaxed">
            * This is a generic calculation model. Actual returns may vary based on specific scheme rules and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
