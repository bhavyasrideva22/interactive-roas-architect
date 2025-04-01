
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RoasContent = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Understanding Return on Ad Spend (ROAS)</h2>
        <div className="prose prose-lg max-w-none text-charcoal">
          <p>
            Return on Ad Spend (ROAS) is a crucial marketing metric that measures the effectiveness of digital advertising campaigns. 
            Unlike ROI, which considers all expenses, ROAS specifically evaluates how much revenue is generated for every rupee spent on advertising.
          </p>
          <p>
            For businesses investing in digital marketing, ROAS provides a clear picture of which campaigns, channels, and strategies deliver the best results, 
            enabling data-driven decisions about budget allocation and campaign optimization.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How to Calculate ROAS</CardTitle>
          <CardDescription>
            The formula for calculating ROAS is straightforward
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-mintGreen/10 p-4 rounded-lg border border-mintGreen/30 mb-6">
            <p className="text-center font-medium text-xl text-darkGreen">
              ROAS = Revenue from Ad Campaign ÷ Cost of Ad Campaign
            </p>
          </div>
          <p className="text-charcoal">
            For example, if you spend ₹10,000 on a Google Ads campaign and generate ₹40,000 in revenue from that campaign, your ROAS would be:
          </p>
          <p className="font-medium text-center my-4">
            ROAS = ₹40,000 ÷ ₹10,000 = 4x
          </p>
          <p className="text-charcoal">
            This means for every rupee spent on advertising, you're generating ₹4 in revenue.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">What is a Good ROAS?</h2>
        <p className="mb-4 text-charcoal">
          What constitutes a "good" ROAS varies by industry, business model, and marketing objectives. However, here's a general guideline:
        </p>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">ROAS Value</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Interpretation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Less than 1x</TableCell>
              <TableCell className="text-red-600">Poor</TableCell>
              <TableCell>You're losing money on your advertising investment</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1x - 3x</TableCell>
              <TableCell className="text-yellow-600">Average</TableCell>
              <TableCell>Your campaigns are profitable but could be optimized further</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3x - 5x</TableCell>
              <TableCell className="text-green-600">Good</TableCell>
              <TableCell>Your campaigns are performing well</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5x and above</TableCell>
              <TableCell className="text-darkGreen font-medium">Excellent</TableCell>
              <TableCell>Your campaigns are highly effective and should be scaled</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Factors Affecting ROAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Industry and Business Model</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal">
                Different industries have varying profit margins and conversion rates. E-commerce businesses with high-margin products may achieve higher ROAS compared to those selling low-margin items.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ad Quality and Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal">
                Well-designed ads that target the right audience with compelling messaging tend to generate higher conversion rates and better ROAS.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Landing Page Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal">
                The quality of your landing pages significantly impacts conversion rates. Fast-loading, mobile-friendly pages with clear CTAs improve ROAS.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ad Platform and Targeting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-charcoal">
                Different platforms (Google, Facebook, Instagram) may yield varying ROAS based on your audience demographics and product offering.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How to Improve Your ROAS</h2>
        <div className="prose prose-lg max-w-none text-charcoal">
          <ol>
            <li>
              <strong>Refine your audience targeting:</strong> Focus your ad spend on the demographics, interests, and behaviors that convert best.
            </li>
            <li>
              <strong>Optimize your ad creative and copy:</strong> Test different ad formats, images, headlines, and calls-to-action to find what resonates with your audience.
            </li>
            <li>
              <strong>Improve landing page experience:</strong> Ensure your landing pages are fast, mobile-friendly, and designed to convert.
            </li>
            <li>
              <strong>Bid optimization:</strong> Adjust your bidding strategies to maximize results for your budget.
            </li>
            <li>
              <strong>Test different platforms:</strong> Experiment with various ad platforms to find where your audience engages most.
            </li>
            <li>
              <strong>Reduce ad waste:</strong> Regularly audit your campaigns to identify and eliminate underperforming ads and keywords.
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">ROAS vs. ROI: Understanding the Difference</h2>
        <div className="prose prose-lg max-w-none text-charcoal">
          <p>
            While ROAS and ROI (Return on Investment) both measure the effectiveness of your marketing efforts, they differ in important ways:
          </p>
          <ul>
            <li>
              <strong>ROAS</strong> focuses specifically on ad spend and the revenue it generates. It's calculated as: Revenue ÷ Ad Spend.
            </li>
            <li>
              <strong>ROI</strong> takes into account all costs associated with your marketing efforts, including staff salaries, agency fees, creative costs, etc. It's calculated as: (Revenue - Cost) ÷ Cost.
            </li>
          </ul>
          <p>
            ROAS is particularly useful for evaluating and optimizing specific ad campaigns or channels, while ROI provides a more comprehensive view of your overall marketing profitability.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why Tracking ROAS is Essential for Your Business</h2>
        <div className="prose prose-lg max-w-none text-charcoal">
          <p>
            Consistently monitoring your ROAS offers several benefits:
          </p>
          <ul>
            <li>Identifies which campaigns, channels, and strategies deliver the best results</li>
            <li>Helps allocate marketing budgets more effectively</li>
            <li>Enables data-driven decisions about scaling or pausing campaigns</li>
            <li>Provides insights for continuous improvement of your advertising efforts</li>
            <li>Demonstrates the tangible value of your marketing activities to stakeholders</li>
          </ul>
          <p>
            By regularly calculating and analyzing your ROAS, you can optimize your advertising strategies and maximize the return on every rupee spent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoasContent;
