
import { useState } from "react";
import RoasForm, { RoasFormValues } from "@/components/RoasForm";
import RoasResult from "@/components/RoasResult";
import InfoSection from "@/components/InfoSection";
import RoasContent from "@/components/RoasContent";
import { calculateRoas, RoasData } from "@/lib/calculator";

const Index = () => {
  const [calculationResult, setCalculationResult] = useState<RoasData | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (values: RoasFormValues) => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const result = calculateRoas(values);
      setCalculationResult(result);
      setIsCalculating(false);
      
      // Scroll to results
      const resultElement = document.getElementById('result-section');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 800);
  };

  const resetCalculation = () => {
    setCalculationResult(null);
    
    // Scroll back to form
    const formElement = document.getElementById('calculator-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="w-full bg-gradient-to-r from-darkGreen to-mintGreen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ROAS Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Measure and optimize your advertising effectiveness with our easy-to-use ROAS calculator.
          </p>
        </div>
      </section>
      
      <section id="calculator-section" className="w-full py-12 px-4 bg-creamWhite">
        <div className="max-w-3xl mx-auto">
          {calculationResult ? (
            <div id="result-section">
              <RoasResult data={calculationResult} onReset={resetCalculation} />
            </div>
          ) : (
            <RoasForm onSubmit={handleCalculate} isCalculating={isCalculating} />
          )}
        </div>
      </section>
      
      <InfoSection />
      
      <section className="w-full bg-white py-12">
        <RoasContent />
      </section>
    </div>
  );
};

export default Index;
