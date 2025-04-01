
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, BadgeIndianRupee, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoasData } from "@/lib/calculator";
import { formatCurrency } from "@/lib/utils";
import RoasResultChart from "./RoasResultChart";
import { useToast } from "@/components/ui/toast";
import { generatePdf } from "@/lib/pdf-generator";
import { sendEmail } from "@/lib/email-service";

interface RoasResultProps {
  data: RoasData;
  onReset: () => void;
}

const RoasResult = ({ data, onReset }: RoasResultProps) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generatePdf(data);
      toast({
        title: "Download successful",
        description: "Your ROAS report has been downloaded.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was a problem downloading your report.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsEmailing(true);
    try {
      await sendEmail(emailInput, data);
      toast({
        title: "Email sent",
        description: `Your ROAS report has been sent to ${emailInput}`,
        duration: 3000,
      });
      setShowEmailInput(false);
      setEmailInput("");
    } catch (error) {
      toast({
        title: "Email failed",
        description: "There was a problem sending your email.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsEmailing(false);
    }
  };

  // Define the ROAS status and description
  let roasStatus: { label: string; color: string; description: string } = {
    label: "Good",
    color: "text-green-600",
    description: "Your advertising campaigns are performing well. Consider scaling up your spend.",
  };

  if (data.roas < 1) {
    roasStatus = {
      label: "Poor",
      color: "text-red-600",
      description: "Your campaigns are losing money. Consider optimizing or pausing them.",
    };
  } else if (data.roas < 3) {
    roasStatus = {
      label: "Average",
      color: "text-yellow-600",
      description: "Your campaigns are profitable but there's room for improvement.",
    };
  } else if (data.roas < 5) {
    roasStatus = {
      label: "Good",
      color: "text-green-600", 
      description: "Your advertising campaigns are performing well. Consider scaling up your spend.",
    };
  } else {
    roasStatus = {
      label: "Excellent",
      color: "text-darkGreen",
      description: "Your campaigns are highly profitable. Congratulations!",
    };
  }

  return (
    <Card className="w-full shadow-lg border-mintGreen/30 animate-scale-in">
      <CardHeader className="gradient-bg text-white rounded-t-lg">
        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Your ROAS Results
        </CardTitle>
        <CardDescription className="text-white/90">
          Detailed analysis of your Return on Ad Spend
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-0">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Ad Spend</p>
                <p className="text-2xl font-bold text-darkGreen flex items-center">
                  <BadgeIndianRupee className="w-5 h-5 mr-1" />
                  {formatCurrency(data.adSpend)}
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                <p className="text-2xl font-bold text-darkGreen flex items-center">
                  <BadgeIndianRupee className="w-5 h-5 mr-1" />
                  {formatCurrency(data.revenue)}
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-muted-foreground">Profit from Ads</p>
                <p className="text-lg font-bold text-darkGreen flex items-center">
                  <BadgeIndianRupee className="w-4 h-4 mr-1" />
                  {formatCurrency(data.profit)}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-darkGreen h-2.5 rounded-full" 
                  style={{ width: `${Math.min(100, (data.profit / data.revenue) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-mintGreen/20 border border-mintGreen/30 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-darkGreen font-medium">ROAS</p>
                  <p className="text-3xl font-bold text-darkGreen mt-1">{data.roas.toFixed(2)}x</p>
                </div>
                <div>
                  <span className={`text-sm font-medium ${roasStatus.color} px-2 py-1 bg-white rounded-full`}>
                    {roasStatus.label}
                  </span>
                </div>
              </div>
              <p className="text-sm text-darkGreen/90 mt-2">{roasStatus.description}</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-darkGreen flex items-center">
                  <BarChart3 className="w-4 h-4 mr-1" /> ROAS Visualization
                </h3>
              </div>
              <div className="h-[250px]">
                <RoasResultChart data={data} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white flex gap-2"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <Download className="w-4 h-4" />
            {isDownloading ? "Downloading..." : "Download PDF"}
          </Button>
          
          {showEmailInput ? (
            <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="input-bordered flex-1"
                required
              />
              <Button 
                type="submit"
                variant="outline" 
                className="border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white whitespace-nowrap"
                disabled={isEmailing}
              >
                {isEmailing ? "Sending..." : "Send"}
              </Button>
            </form>
          ) : (
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white flex gap-2"
              onClick={() => setShowEmailInput(true)}
            >
              <Mail className="w-4 h-4" />
              Email Report
            </Button>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-darkGreen w-full sm:w-auto"
          onClick={onReset}
        >
          Calculate Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoasResult;
