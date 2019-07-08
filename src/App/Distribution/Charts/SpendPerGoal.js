import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {
  Cell, Legend, Pie, PieChart, ResponsiveContainer,
} from 'recharts';

const colors = [
  '#F1B57D',
  '#A45914',
];

const SpendPerGoal = ({ data }) => {
  const { goal, spent } = data.getProject;

  const values = [
    {
      spent: goal - spent,
      name: 'Remaining Investone',
    },
    {
      spent,
      name: 'Spent Funds',
    },
  ];

  return (
    <Fragment>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={values} dataKey="spent" nameKey="name" cx="50%" cy="50%" outerRadius="100%">
            {values.map((entry, i) => (
              <Cell key={entry.id + 1} fill={colors[i]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

SpendPerGoal.propTypes = {
  data: PropTypes.object,
};

SpendPerGoal.defaultProps = {
  data: {},
};

export default SpendPerGoal;
