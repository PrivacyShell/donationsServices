import PropTypes from 'prop-types';
import React from 'react';
import {
  CartesianGrid, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';

const Chart = ({ data }) => {
  const { goals } = data.getProject;
  const bars = goals
    .reduce((acc, cur) => acc.concat(cur.expenses), [])
    .map(expense => ({
      name: expense.dateTime,
      amount: expense.amount,
    }))
    .sort((a, b) => new Date(a.name) - new Date(b.name));

  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart data={bars}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis dataKey="amount" />
        <Tooltip />
        <Bar type="monotone" dataKey="amount" fill="#4854A1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
};

Chart.defaultProps = {
  data: {},
};

export default Chart;
