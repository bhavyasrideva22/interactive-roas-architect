
import { RoasData } from "./calculator";
import { formatCurrency } from "./utils";

// Simulate PDF generation functionality
export const generatePdf = async (data: RoasData): Promise<void> => {
  return new Promise((resolve) => {
    console.log("Generating PDF with data:", data);
    
    // Create a very simple PDF-like structure for demonstration purposes
    const pdfContent = `
      ROAS Analysis Report
      --------------------------------
      
      Campaign Performance Summary
      
      Ad Spend: ₹${formatCurrency(data.adSpend)}
      Revenue: ₹${formatCurrency(data.revenue)}
      ROAS: ${data.roas.toFixed(2)}x
      Profit: ₹${formatCurrency(data.profit)}
      
      Generated on: ${new Date().toLocaleDateString()}
    `;
    
    console.log("PDF Content:", pdfContent);
    
    // In a real implementation, we would generate an actual PDF file
    // and trigger a download. For now, we'll just create a text file.
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ROAS-Report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Simulate a delay to mimic PDF generation time
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
