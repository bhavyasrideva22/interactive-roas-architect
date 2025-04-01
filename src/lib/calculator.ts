
export interface RoasFormValues {
  adSpend: number;
  revenue: number;
}

export interface RoasData extends RoasFormValues {
  roas: number;
  profit: number;
}

export const calculateRoas = (formValues: RoasFormValues): RoasData => {
  const { adSpend, revenue } = formValues;
  
  // Calculate ROAS: Revenue / Ad Spend
  const roas = revenue / adSpend;
  
  // Calculate Profit: Revenue - Ad Spend
  const profit = revenue - adSpend;
  
  return {
    adSpend,
    revenue,
    roas,
    profit
  };
};
