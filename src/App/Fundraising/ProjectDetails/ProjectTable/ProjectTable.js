import { Table } from 'antd';
import React from 'react';

import data from '../../../../App/shared/data/projectsData.json';

const columns = [
  {
    title: 'Transaction Proof',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Value ($)',
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
  return data.map(campaign => {
  if(props.idprops === campaign.id)
    
    return (
      <Table dataSource={campaign.investments} columns={columns} rowKey="id" />
      );
    });
  };

export default ProjectTable;
