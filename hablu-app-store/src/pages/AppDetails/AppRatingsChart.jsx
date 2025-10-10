import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AppRatingsChart = ({ ratings }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#f0f0f0] rounded-lg p-2 text-white shadow-md">
          <p className="font-bold text-gray-500">{label}</p>
          <p className="font-bold text-gray-500">{`Count: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="w-full h-72">
      <h1 className="text-[#777777] text-xl font-bold mb-4">Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ratings} layout="vertical">
          <XAxis type="number" domain={[0, ratings[4]['count'] + ratings[4]['count'] * 0.1]} />
          <YAxis type="category" dataKey="name" reversed />
          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="count" fill="#FF8811" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingsChart;
