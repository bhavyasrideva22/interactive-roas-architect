
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeIndianRupee, Calculator, TrendingUp, BarChart3 } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => (
  <Card className="card-hover">
    <CardHeader className="pb-2">
      <div className="bg-mintGreen/20 w-10 h-10 rounded-full flex items-center justify-center text-darkGreen mb-2">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base text-charcoal/80">{description}</CardDescription>
    </CardContent>
  </Card>
);

const InfoSection = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Use Our ROAS Calculator?</h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Make data-driven decisions for your advertising campaigns with our powerful and user-friendly ROAS calculator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard 
            icon={<Calculator className="w-5 h-5" />}
            title="Accurate Calculations" 
            description="Our calculator provides precise ROAS metrics to help you evaluate your ad campaign performance with confidence."
          />
          <InfoCard 
            icon={<BadgeIndianRupee className="w-5 h-5" />}
            title="Optimize Ad Spend" 
            description="Identify which campaigns deliver the best return on investment to allocate your budget more effectively."
          />
          <InfoCard 
            icon={<TrendingUp className="w-5 h-5" />}
            title="Track Performance" 
            description="Download reports to track and compare your ROAS over time across different marketing channels."
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
