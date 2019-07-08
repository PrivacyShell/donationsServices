import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Table } from 'antd';
import { Redirect, withRouter } from 'react-router-dom';

class Overview extends Component {
  state = { redirect: null };

  redirect = (record) => {
    // redirect to goal's id, which is conveniently the key
    this.setState({ redirect: record.key });
  };

  render() {
    const { redirect } = this.state;
    const { projectId, data } = this.props;

    const dataSource = data.getProject.goals.map((goal) => {
      const goalId = goal.id;
      const proofs = goal.proofs.length;
      const date = goal.dateTime;

      return {
        key: goalId,
        goal: goalId,
        proofs,
        date,
      };
    });

    const columns = [
      {
        title: 'InveStone',
        dataIndex: 'goal',
        key: 'goal',
      },
      {
        title: 'Proofs',
        dataIndex: 'proofs',
        key: 'proofs',
      },
      {
        title: 'Start',
        dataIndex: 'date',
        key: 'date',
      },
    ];

    if (redirect) {
      return <Redirect push to={`/distribution/project/${projectId}/goals/${redirect}`} />;
    }

    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={record => ({
          onClick: () => this.redirect(record),
        })}
      />
    );
  }
}

Overview.propTypes = {
  data: PropTypes.object,
  projectId: PropTypes.string,
};

Overview.defaultProps = {
  data: {},
  projectId: '',
};

export default withRouter(Overview);
