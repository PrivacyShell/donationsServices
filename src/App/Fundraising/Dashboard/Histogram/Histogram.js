import React from 'react';

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Histogram = ({ data }) => {
  const { investments } = data.getProject;
  
  const dates = {};

  investments.forEach((investment) => {
    const { amount, dateTime } = investment;
    const date = dateTime.split('T');

    dates[date[0]] = dates[date[0]] + amount || amount;
  });

  const values = Object.entries(dates)
    .map(k => ({ amount: k[1], dateTime: k[0] }))
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  return (
    <ResponsiveContainer width="95%" height={300}>
      <LineChart width={950} height={450} data={values}>
        <CartesianGrid />
        <XAxis dataKey="dateTime" />
        <YAxis dataKey="amount" />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#4854A1" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Histogram;
