
import { useMemo } from "react";
import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, Cell, CartesianGrid, ReferenceLine } from "recharts";
import { RoasData } from "@/lib/calculator";
import { formatCurrency } from "@/lib/utils";

interface RoasResultChartProps {
  data: RoasData;
}

const RoasResultChart = ({ data }: RoasResultChartProps) => {
  // Transform the data for the chart
  const chartData = useMemo(() => {
    const baseData = [
      {
        name: "Ad Spend",
        value: data.adSpend,
        fill: "#245e4f", // darkGreen
      },
      {
        name: "Revenue",
        value: data.revenue,
        fill: "#7ac9a7", // mintGreen
      },
      {
        name: "Profit",
        value: data.profit,
        fill: "#e9c46a", // gold
      }
    ];
    
    return baseData;
  }, [data]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded text-sm">
          <p className="font-medium text-charcoal">{`${label}`}</p>
          <p className="text-darkGreen">{`₹${formatCurrency(payload[0].value)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#666', fontSize: 12 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#666', fontSize: 12 }}
          tickFormatter={(value) => `₹${value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine y={0} stroke="#666" />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RoasResultChart;
