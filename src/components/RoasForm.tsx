
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronDown, BadgeIndianRupee, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { calculateRoas } from "@/lib/calculator";

// Defining the form schema with validation
const formSchema = z.object({
  adSpend: z.coerce
    .number()
    .min(1, { message: "Ad spend must be at least ₹1" })
    .max(999999999, { message: "Ad spend is too high" }),
  revenue: z.coerce
    .number()
    .min(1, { message: "Revenue must be at least ₹1" })
    .max(999999999, { message: "Revenue is too high" }),
});

export type RoasFormValues = z.infer<typeof formSchema>;

interface RoasFormProps {
  onSubmit: (values: RoasFormValues) => void;
  isCalculating: boolean;
}

const RoasForm = ({ onSubmit, isCalculating }: RoasFormProps) => {
  const { toast } = useToast();
  const [previewRoas, setPreviewRoas] = useState<number | null>(null);
  
  const form = useForm<RoasFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adSpend: 10000,
      revenue: 50000,
    },
  });

  // Preview ROAS calculation as user types
  const onValuesChange = (values: Partial<RoasFormValues>) => {
    const currentValues = form.getValues();
    const adSpend = values.adSpend !== undefined ? values.adSpend : currentValues.adSpend;
    const revenue = values.revenue !== undefined ? values.revenue : currentValues.revenue;
    
    if (adSpend && revenue && adSpend > 0) {
      const result = calculateRoas({ adSpend, revenue });
      setPreviewRoas(result.roas);
    } else {
      setPreviewRoas(null);
    }
  };

  const handleSubmit = (values: RoasFormValues) => {
    toast({
      title: "Calculation in progress",
      description: "Analyzing your ad campaign performance...",
    });
    onSubmit(values);
  };

  return (
    <Card className="w-full shadow-lg border-mintGreen/30 animate-scale-in">
      <CardHeader className="gradient-bg text-white rounded-t-lg">
        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Calculate Your ROAS
        </CardTitle>
        <CardDescription className="text-white/90">
          Enter your advertising spend and revenue to calculate your Return on Ad Spend
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form 
            onChange={() => onValuesChange(form.getValues())} 
            onSubmit={form.handleSubmit(handleSubmit)} 
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="adSpend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center">
                    <BadgeIndianRupee className="w-4 h-4 mr-1 text-darkGreen" /> Ad Spend
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">₹</span>
                      <Input 
                        placeholder="10000" 
                        className="pl-7 input-bordered" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(e);
                          onValuesChange({ adSpend: parseFloat(e.target.value) || 0 });
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Enter your total advertising expenditure
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="revenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base flex items-center">
                    <BadgeIndianRupee className="w-4 h-4 mr-1 text-darkGreen" /> Revenue
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">₹</span>
                      <Input 
                        placeholder="50000" 
                        className="pl-7 input-bordered" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(e);
                          onValuesChange({ revenue: parseFloat(e.target.value) || 0 });
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Enter the total revenue generated from your ads
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {previewRoas !== null && (
              <div className="bg-mintGreen/20 p-3 rounded-md border border-mintGreen/40">
                <p className="text-darkGreen text-sm font-medium">
                  Estimated ROAS: 
                  <span className="ml-1 font-bold">
                    {previewRoas.toFixed(2)}x
                  </span>
                </p>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold/90 text-charcoal flex items-center justify-center gap-2 h-11"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate ROAS"}
              <ChevronDown className={`w-4 h-4 transition-transform ${isCalculating ? "rotate-180" : ""}`} />
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-gray-50 rounded-b-lg flex flex-col items-start px-6 py-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-darkGreen">ROAS</span> measures the revenue generated for every rupee spent on advertising.
        </p>
      </CardFooter>
    </Card>
  );
};

export default RoasForm;
