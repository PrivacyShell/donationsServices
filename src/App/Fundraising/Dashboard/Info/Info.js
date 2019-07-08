import { Progress } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import Stats from './Stats';

const Info = ({ data }) => {
  const total = data.getProject.investments.reduce((acc, cur) => acc + cur.amount, 0);
  const { inveStone } = data.getProject;
  const percent = (total / inveStone) * 100;

  return (
    <div style={{ padding: '0% 0%' }}>
      <Stats data={data} goal={inveStone} total={total} />
    </div>
  );
};

Info.propTypes = {
  data: PropTypes.object,
};

Info.defaultProps = {
  data: {},
};

export default Info;
