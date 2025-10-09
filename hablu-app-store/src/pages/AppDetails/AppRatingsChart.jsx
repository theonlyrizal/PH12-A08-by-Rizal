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
  return (
    <div className="w-full h-72">
      <h1 className="text-[#001931] text-xl font-bold mb-4">Ratings</h1>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart data={ratings} layout="vertical">
          <XAxis type="number" domain={[0, ratings[4]['count']+ratings[4]['count']*0.1]}/>
          <YAxis type="category" dataKey="name" reversed/>
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingsChart;
