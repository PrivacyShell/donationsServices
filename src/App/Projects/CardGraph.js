import React from 'react';

import { PieChart, Pie, Cell } from 'recharts';

const data = [{ name: 'Group A', value: 400 }];
const COLORS = ['#f1f1f1', '#4854A1'];

const CardGraph = () => (
  <PieChart width={850} height={300}>
    <Pie
      data={data}
      cx={420}
      cy={200}
      startAngle={40}
      endAngle={-220}
      innerRadius={72}
      outerRadius={80}
      fill="#201C1C"
      paddingAngle={5}
    >
      {data.map((entry, index) => (
        <Cell fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Pie
      data={data}
      cx={420}
      cy={200}
      startAngle={40}
      endAngle={-160}
      innerRadius={72}
      outerRadius={80}
      fill="#4854A1"
      paddingAngle={5}
    >
      {data.map((entry, index) => (
        <Cell fill={COLORS[(index % COLORS.length) + 1]} />
      ))}
    </Pie>
  </PieChart>
);

export default CardGraph;
