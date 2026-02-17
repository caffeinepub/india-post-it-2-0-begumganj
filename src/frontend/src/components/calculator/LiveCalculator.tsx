import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { SchemeData } from '@/data/schemes';

interface LiveCalculatorProps {
  scheme: SchemeData;
}

/**
 * Interactive calculator with animated blue/yellow/black text for non-RBP schemes, replacing pink styling.
 */
export function LiveCalculator({ scheme }: LiveCalculatorProps) {
  const [amount, setAmount] = useState<string>('10000');
  const [result, setResult] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if this is an RBP scheme (SB, RD, TD, SSA, MIS)
  const isRbpScheme = ['SB', 'RD', 'TD', 'SSA', 'MIS'].includes(scheme.id);

  useEffect(() => {
    const numAmount = parseFloat(amount) || 0;
    
    // Simple interest calculation based on scheme
    let calculatedResult = 0;
    switch (scheme.id) {
      case 'SB':
        calculatedResult = numAmount * 0.04; // 4% annual interest
        break;
      case 'RD':
        calculatedResult = numAmount * 12 * 1.058; // 5.8% for 1 year
        break;
      case 'TD':
        calculatedResult = numAmount * 1.071; // 7.1% for 1 year
        break;
      case 'SSA':
        calculatedResult = numAmount * 1.082; // 8.2% for 1 year
        break;
      case 'MIS':
        calculatedResult = numAmount * 0.074; // 7.4% monthly income scheme
        break;
      case 'PLI_RPLI':
        calculatedResult = numAmount * 1.06; // 6% estimated return
        break;
      default:
        calculatedResult = numAmount;
    }
    
    setResult(calculatedResult);
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [amount, scheme.id]);

  return (
    <div className="official-panel p-5 space-y-4">
      <h3 className={`heading-md mb-3 ${isRbpScheme ? 'rbp-scheme-title' : 'text-metallic-gold'}`}>
        Quick Calculator
      </h3>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="amount" className="body-sm animated-blue-yellow-black-text mb-2 block">
            Enter Amount (₹)
          </Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-matte-black/40 border-metallic-gold/30 text-details-red focus:border-icon-accent-red focus:ring-icon-accent-red"
            placeholder="10000"
          />
        </div>

        <div className={`p-4 rounded-lg bg-matte-black/30 border border-metallic-gold/20 transition-all duration-300 ${isAnimating ? 'scale-105 shadow-lg shadow-neon-red/20' : ''}`}>
          <p className="body-sm animated-blue-yellow-black-text mb-1">Estimated Returns:</p>
          <p className={`text-2xl font-bold ${isRbpScheme ? 'rbp-scheme-title' : 'animated-blue-yellow-black-text'}`}>
            ₹{result.toFixed(2)}
          </p>
        </div>

        <p className="body-sm animated-blue-yellow-black-text italic">
          * This is an approximate calculation. Actual returns may vary based on scheme terms and conditions.
        </p>
      </div>
    </div>
  );
}
