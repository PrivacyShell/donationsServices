import { Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

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

const ProjectTable = ({ data }) => {
  const { investments } = data.getProject;

  return <Table dataSource={investments} columns={columns} rowKey="id" />;
};

ProjectTable.propTypes = {
  data: PropTypes.object,
};

ProjectTable.defaultProps = {
  data: {},
};

export default ProjectTable;
