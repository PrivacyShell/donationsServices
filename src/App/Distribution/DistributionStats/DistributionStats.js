import PropTypes from 'prop-types';
import React from 'react';

import Strong from '../../shared/components/Strong';

const DistributionStats = ({ data }) => {
  // total the donation amounts
  const totalFunds = data.getProject.investments
    .map(donation => donation.amount)
    .reduce((prev, next) => prev + next);

  const { inveStone } = data.getProject;

  // total the number of expenses (makeshift agent amount)
  const activeAgents = data.getProject.goals
    .map(thisGoal => thisGoal.expenses.length)
    .reduce((prev, next) => prev + next);
  const totalSpent = data.getProject.spent;

  return (
    <div style={{ padding: '5%' }}>
      <Strong>${totalFunds} CAD</Strong>
      <p>Allocated of ${inveStone} CAD inveStone</p>
      {/* <Strong>{activeAgents}</Strong>
      <p>active agents</p> */}
      <Strong>${totalSpent} CAD</Strong>
      <p>Spent on investments</p>
    </div>
  );
};

DistributionStats.propTypes = {
  data: PropTypes.object,
};

DistributionStats.defaultProps = {
  data: {},
};

export default DistributionStats;
