import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Cartes de Crédit', value: 35 },
  { name: 'Emails', value: 25 },
  { name: 'Téléphones', value: 20 },
  { name: 'Séc. Sociale', value: 15 },
  { name: 'Autres', value: 5 },
];

const COLORS = ['#4285F4', '#00B894', '#F9A825', '#7E57C2', '#ECEFF1'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${data[index].name} ${Math.round(percent * 100)}%`}
    </text>
  );
};

const Charts = () => {
  return (
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
  );
};

export default Charts;
