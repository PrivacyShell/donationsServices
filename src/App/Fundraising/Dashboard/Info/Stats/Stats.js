import { differenceInCalendarDays } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';

import Strong from '../../../../shared/components/Strong';

const Stats = ({ data, goal, total }) => {
  const topDonation = data.getProject.investments.reduce(
    (acc, cur) => Math.max(acc, cur.amount),
    0,
  );

  const averageDonation = Math.floor(total / data.getProject.investments.length);

  // const days = differenceInCalendarDays(data.getProject.endDate, data.getProject.startDate);

  return (
    <div style={{ padding: '5%', borderBottom: 'orange 2px solid' }}>
      <Strong>${total} CAD</Strong>
      <p>Invested of ${goal} goal</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div>
          <Strong>{data.getProject.investments.length}</Strong>
          <p>UNIQUE INVESTORS</p>
          {/* <Strong>{days}</Strong>
          <p>days to go</p> */}
        </div>
        <div>
          <Strong>${topDonation} CAD</Strong>
          <p>TOP INVESTMENT</p>
        </div>
        <div>
          <Strong>${averageDonation} CAD</Strong>
          <p>AVERAGE INVESTMENT</p>
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  data: PropTypes.object,
  goal: PropTypes.number,
  total: PropTypes.number,
};

Stats.defaultProps = {
  data: {},
  goal: 0,
  total: 0,
};

export default Stats;
