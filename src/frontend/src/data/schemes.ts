export type SchemeId = 'SB' | 'SSA' | 'RD' | 'MIS' | 'TD' | 'PLI_RPLI';

export interface SchemeCalculatorConfig {
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  step: number;
  defaultTenure: number;
  minTenure: number;
  maxTenure: number;
  interestRate: number;
  label: string;
  resultLabel: string;
}

export interface SchemeTabContent {
  history: string;
  eligibility: string;
  benefits: string;
  documents: string;
}

export interface SchemeData {
  id: SchemeId;
  label: string;
  shortLabel: string;
  iconPath: string;
  description: string;
  tabs: SchemeTabContent;
  calculator: SchemeCalculatorConfig;
}

export const schemes: Record<SchemeId, SchemeData> = {
  SB: {
    id: 'SB',
    label: 'Post Office Savings Account',
    shortLabel: 'Savings Account',
    iconPath: '/assets/generated/icon-sb-hourglass.dim_1024x1024.png',
    description: 'A secure savings account with competitive interest rates',
    tabs: {
      history: 'The Post Office Savings Account has been a cornerstone of India\'s financial inclusion since 1882. It provides a safe and accessible banking solution for millions of Indians, especially in rural areas. The scheme has evolved to offer modern banking facilities while maintaining the trust and reliability that India Post is known for.',
      eligibility: 'Any individual can open a Post Office Savings Account. Minimum age: No restriction (minors can open with guardian). Maximum balance: No limit. Joint accounts are permitted. NRIs are not eligible for this scheme.',
      benefits: 'Interest Rate (2026): 4.0% per annum, compounded annually. Tax Benefits: Interest up to ₹10,000 is exempt under Section 80TTA. Maturity: No fixed maturity; account remains active as long as maintained. Additional perks include free ATM card, mobile banking, and passbook facility.',
      documents: 'Required Documents: (1) Aadhaar Card, (2) PAN Card, (3) Recent passport-size photograph, (4) Address proof (Voter ID/Driving License/Utility Bill), (5) Account opening form (available at post office). For minors: Birth certificate and guardian\'s KYC documents.'
    },
    calculator: {
      defaultAmount: 10000,
      minAmount: 500,
      maxAmount: 1000000,
      step: 500,
      defaultTenure: 5,
      minTenure: 1,
      maxTenure: 30,
      interestRate: 4.0,
      label: 'Deposit Amount (₹)',
      resultLabel: 'Estimated Value After'
    }
  },
  SSA: {
    id: 'SSA',
    label: 'Sukanya Samriddhi Account',
    shortLabel: 'Sukanya Samriddhi',
    iconPath: '/assets/generated/icon-ssa-small-girl.dim_1024x1024.png',
    description: 'A special savings scheme for the girl child with attractive returns',
    tabs: {
      history: 'Launched in 2015 as part of the "Beti Bachao, Beti Padhao" campaign, Sukanya Samriddhi Yojana is a government-backed savings scheme designed to secure the financial future of girl children. It encourages parents to invest in their daughter\'s education and marriage expenses with one of the highest interest rates among small savings schemes.',
      eligibility: 'Account can be opened for a girl child from birth until she attains the age of 10 years. Only one account per girl child is permitted. Maximum two accounts per family (one for each girl child). Parents or legal guardians can open and operate the account.',
      benefits: 'Interest Rate (2026): 8.2% per annum, compounded annually. Tax Benefits: Eligible for deduction under Section 80C up to ₹1.5 lakh. Interest earned and maturity amount are tax-free under Section 10. Maturity: 21 years from the date of opening or marriage after 18 years. Partial withdrawal (50%) allowed after girl turns 18 for education/marriage.',
      documents: 'Required Documents: (1) Girl child\'s birth certificate, (2) Parent/Guardian\'s Aadhaar Card, (3) Parent/Guardian\'s PAN Card, (4) Address proof, (5) Recent passport-size photographs of girl child and guardian, (6) SSA account opening form. Minimum deposit: ₹250 per year; Maximum: ₹1.5 lakh per year.'
    },
    calculator: {
      defaultAmount: 50000,
      minAmount: 250,
      maxAmount: 150000,
      step: 250,
      defaultTenure: 21,
      minTenure: 21,
      maxTenure: 21,
      interestRate: 8.2,
      label: 'Annual Deposit (₹)',
      resultLabel: 'Maturity Value (21 years)'
    }
  },
  RD: {
    id: 'RD',
    label: 'Recurring Deposit Account',
    shortLabel: 'Recurring Deposit',
    iconPath: '/assets/generated/icon-rd-coin-staircase.dim_1024x1024.png',
    description: 'Build wealth systematically with monthly deposits',
    tabs: {
      history: 'The Post Office Recurring Deposit scheme has been helping Indians build savings discipline since decades. It allows individuals to deposit a fixed amount every month and earn attractive interest. This scheme is particularly popular among salaried individuals and those looking to create a corpus for specific goals like education, marriage, or purchasing assets.',
      eligibility: 'Any individual can open an RD account. Minimum age: 10 years (minors can open with guardian). Joint accounts are allowed. Multiple accounts can be opened. Account tenure: 5 years from the date of opening.',
      benefits: 'Interest Rate (2026): 6.7% per annum, compounded quarterly. Tax Benefits: Eligible for deduction under Section 80C. Maturity: 5 years. Premature closure allowed after 3 years with reduced interest. Loan facility available against the deposit (up to 50% of balance).',
      documents: 'Required Documents: (1) Aadhaar Card, (2) PAN Card, (3) Recent passport-size photograph, (4) Address proof, (5) RD account opening form. Minimum monthly deposit: ₹100; Maximum: No limit. Deposits must be made by the 15th of each month.'
    },
    calculator: {
      defaultAmount: 5000,
      minAmount: 100,
      maxAmount: 100000,
      step: 100,
      defaultTenure: 5,
      minTenure: 5,
      maxTenure: 5,
      interestRate: 6.7,
      label: 'Monthly Deposit (₹)',
      resultLabel: 'Maturity Value (5 years)'
    }
  },
  MIS: {
    id: 'MIS',
    label: 'Monthly Income Scheme',
    shortLabel: 'Monthly Income',
    iconPath: '/assets/generated/icon-mis-clock-coins.dim_1024x1024.png',
    description: 'Earn regular monthly income from your investment',
    tabs: {
      history: 'The Post Office Monthly Income Scheme (POMIS) was introduced to provide a regular monthly income to investors, particularly retirees and those seeking stable returns. It is a low-risk investment option backed by the Government of India, making it one of the safest investment avenues for generating monthly income.',
      eligibility: 'Any individual can open an MIS account. Minimum age: 10 years (minors can open with guardian). Joint accounts are permitted (maximum 3 adults). Maximum investment: ₹9 lakh for single account, ₹15 lakh for joint account.',
      benefits: 'Interest Rate (2026): 7.4% per annum, paid monthly. Tax Benefits: No tax deduction under Section 80C, but interest is taxable. Maturity: 5 years. Premature closure allowed after 1 year with penalty. Bonus: 10% of principal on maturity if held for full term.',
      documents: 'Required Documents: (1) Aadhaar Card, (2) PAN Card (mandatory for deposits above ₹50,000), (3) Recent passport-size photograph, (4) Address proof, (5) MIS account opening form. Minimum deposit: ₹1,000; Maximum: ₹9 lakh (single), ₹15 lakh (joint).'
    },
    calculator: {
      defaultAmount: 100000,
      minAmount: 1000,
      maxAmount: 900000,
      step: 1000,
      defaultTenure: 5,
      minTenure: 5,
      maxTenure: 5,
      interestRate: 7.4,
      label: 'Deposit Amount (₹)',
      resultLabel: 'Monthly Income'
    }
  },
  TD: {
    id: 'TD',
    label: 'Time Deposit (Fixed Deposit)',
    shortLabel: 'Time Deposit',
    iconPath: '/assets/generated/icon-td-vault.dim_1024x1024.png',
    description: 'Lock in your savings for guaranteed returns',
    tabs: {
      history: 'Post Office Time Deposit, also known as Fixed Deposit, is one of the oldest and most trusted savings instruments in India. It offers guaranteed returns and capital protection, making it ideal for risk-averse investors. The scheme has been a preferred choice for senior citizens and conservative investors seeking stable returns.',
      eligibility: 'Any individual can open a TD account. Minimum age: 10 years (minors can open with guardian). Joint accounts are allowed. Multiple accounts can be opened. Available tenures: 1 year, 2 years, 3 years, and 5 years.',
      benefits: 'Interest Rates (2026): 1-year: 6.9%, 2-year: 7.0%, 3-year: 7.1%, 5-year: 7.5% per annum, compounded quarterly. Tax Benefits: 5-year TD eligible for deduction under Section 80C up to ₹1.5 lakh. Maturity: As per chosen tenure. Premature closure allowed after 6 months with penalty. Loan facility available.',
      documents: 'Required Documents: (1) Aadhaar Card, (2) PAN Card (mandatory for deposits above ₹50,000), (3) Recent passport-size photograph, (4) Address proof, (5) TD account opening form. Minimum deposit: ₹1,000; Maximum: No limit.'
    },
    calculator: {
      defaultAmount: 100000,
      minAmount: 1000,
      maxAmount: 10000000,
      step: 1000,
      defaultTenure: 5,
      minTenure: 1,
      maxTenure: 5,
      interestRate: 7.5,
      label: 'Deposit Amount (₹)',
      resultLabel: 'Maturity Value'
    }
  },
  PLI_RPLI: {
    id: 'PLI_RPLI',
    label: 'Postal Life Insurance / Rural Postal Life Insurance',
    shortLabel: 'PLI / RPLI',
    iconPath: '/assets/generated/icon-pli-shield.dim_1024x1024.png',
    description: 'Comprehensive life insurance coverage for you and your family',
    tabs: {
      history: 'Postal Life Insurance (PLI) was introduced in 1884 for postal employees and later extended to other government employees. Rural Postal Life Insurance (RPLI) was launched in 1995 to provide affordable insurance to rural populations. Both schemes offer life insurance coverage with attractive bonus rates and are among the oldest insurance schemes in India.',
      eligibility: 'PLI: Available to Central/State Government employees, PSU employees, and employees of certain financial institutions. RPLI: Available to residents of rural areas. Age: 19-55 years at entry. Medical examination required for higher sum assured.',
      benefits: 'Premium Rates (2026): Competitive rates based on age and plan. Tax Benefits: Premium eligible for deduction under Section 80C; maturity/death benefit tax-free under Section 10(10D). Bonus: Annual bonus declared (approx. ₹50-60 per ₹1,000 sum assured). Loan facility available after 3 years. Multiple plan options: Whole Life, Endowment, Convertible Whole Life, Anticipated Endowment.',
      documents: 'Required Documents: (1) Aadhaar Card, (2) PAN Card, (3) Recent passport-size photographs, (4) Age proof (Birth certificate/School certificate), (5) Address proof, (6) Income proof, (7) Medical examination report (if required), (8) Employer certificate (for PLI). Minimum sum assured: ₹10,000 (RPLI), ₹20,000 (PLI); Maximum: ₹50 lakh.'
    },
    calculator: {
      defaultAmount: 500000,
      minAmount: 10000,
      maxAmount: 5000000,
      step: 10000,
      defaultTenure: 20,
      minTenure: 10,
      maxTenure: 35,
      interestRate: 6.0,
      label: 'Sum Assured (₹)',
      resultLabel: 'Estimated Maturity Value'
    }
  }
};

export const getScheme = (id: SchemeId): SchemeData => schemes[id];
export const getAllSchemes = (): SchemeData[] => Object.values(schemes);
