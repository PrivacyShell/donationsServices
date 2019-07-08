import React from 'react';
import { Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackButton = ({ history: { goBack } }) => (
  <Button onClick={goBack}>
    <Icon type="arrow-left" />
  </Button>
);

BackButton.propTypes = {
  history: PropTypes.object,
};

BackButton.defaultProps = {
  history: {},
};

export default withRouter(BackButton);
