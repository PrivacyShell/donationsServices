import { Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import data from '../../../../App/shared/data/projectsData.json';

const columns = [
  {
    title: 'Investors',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Date and Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
    defaultSortOrder: 'descend',
    sorter: (a, b) => new Date(b.datetime) - new Date(a.datetime),
  },
];

const ProjectTable = (props) => {
  console.log(props, "inv");

  // return <Table dataSource={investments} columns={columns} rowKey="id" />;
};

ProjectTable.propTypes = {
  data: PropTypes.object,
};

ProjectTable.defaultProps = {
  data: {},
};

export default ProjectTable;
