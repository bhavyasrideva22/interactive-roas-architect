
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Mail, BadgeIndianRupee, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="w-full bg-gradient-to-r from-darkGreen to-mintGreen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About ROAS Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted tool for measuring and optimizing advertising effectiveness
          </p>
        </div>
      </section>
      
      <section className="w-full py-12 px-4 bg-creamWhite">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-charcoal">
              <p>
                At ROAS Calculator, our mission is to empower businesses of all sizes to make data-driven marketing decisions. 
                We believe that understanding your Return on Ad Spend (ROAS) is crucial for optimizing your marketing efforts and 
                maximizing your advertising budget's impact.
              </p>
              <p>
                We've created a simple yet powerful tool that helps marketers and business owners calculate their ROAS accurately, 
                visualize their results, and gain actionable insights to improve their advertising performance.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-mintGreen/20 flex items-center justify-center mb-3">
                  <Calculator className="w-6 h-6 text-darkGreen" />
                </div>
                <CardTitle>Easy Calculation</CardTitle>
                <CardDescription>
                  Our calculator makes it simple to determine your ROAS, even if you're not a marketing expert.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  With a user-friendly interface and clear instructions, you can calculate your ROAS in seconds. Just input your advertising 
                  spend and revenue, and our calculator does the rest.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-mintGreen/20 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-darkGreen" />
                </div>
                <CardTitle>Visual Insights</CardTitle>
                <CardDescription>
                  Understand your results at a glance with our intuitive visualizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Our charts and graphs help you visualize your ROAS metrics, making it easier to understand your campaign performance 
                  and identify areas for improvement.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-mintGreen/20 flex items-center justify-center mb-3">
                  <BadgeIndianRupee className="w-6 h-6 text-darkGreen" />
                </div>
                <CardTitle>Local Currency</CardTitle>
                <CardDescription>
                  Built with Indian Rupee (₹) as the default currency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Our calculator is designed specifically for the Indian market, with the Rupee as the default currency, making it 
                  easier for Indian businesses to analyze their advertising performance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-mintGreen/20 flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-darkGreen" />
                </div>
                <CardTitle>Shareable Reports</CardTitle>
                <CardDescription>
                  Download and share your ROAS reports with stakeholders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal">
                  Generate professional PDF reports of your ROAS calculations that you can download or email to team members, 
                  clients, or stakeholders to showcase your advertising performance.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Trust Our Calculator?</h2>
            <div className="prose prose-lg max-w-none text-charcoal">
              <p>
                Our ROAS calculator is built with accuracy and usability in mind. We've designed it to provide reliable results 
                that marketers can trust to make important business decisions.
              </p>
              <p>
                We regularly update our calculator with the latest marketing metrics and best practices to ensure you have access 
                to the most relevant and helpful information for your advertising campaigns.
              </p>
              <p>
                Whether you're managing Google Ads, Facebook campaigns, Instagram promotions, or any other digital advertising channel, 
                our ROAS calculator gives you the insights you need to optimize your strategy and improve your results.
              </p>
            </div>
          </div>
          
          <div className="bg-mintGreen/10 p-6 rounded-lg border border-mintGreen/30">
            <h2 className="text-xl font-bold mb-2">Get Started Today</h2>
            <p className="text-charcoal mb-4">
              Ready to measure and improve your advertising performance? Use our free ROAS calculator now and take the first step towards 
              more effective marketing campaigns.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-gold/90 transition-colors"
            >
              Try Our ROAS Calculator
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
