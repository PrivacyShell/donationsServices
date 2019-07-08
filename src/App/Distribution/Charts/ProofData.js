import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {
  Cell, Legend, Pie, PieChart, ResponsiveContainer,
} from 'recharts';

const colors = [
  '#71553B',
  '#71553B',
  '#A45914'
];

const ProofData = ({ data }) => {
  const { goals } = data.getProject;

  const expenses = goals.reduce((acc, cur) => acc.concat(cur.expenses), []);
  const proofs = goals.reduce((acc, cur) => acc.concat(cur.proofs), []);

  const values = [
    {
      value: expenses.length,
      name: 'Total Expenses',
    },
    {
      value: proofs.length,
      name: 'Verified Spend',
    },
  ];

  return (
    <Fragment>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={values} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="100%">
            {values.map((entry, i) => (
              <Cell key={entry.id + 1} fill={colors[i + 1]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

ProofData.propTypes = {
  data: PropTypes.object,
};

ProofData.defaultProps = {
  data: {},
};

export default ProofData;
