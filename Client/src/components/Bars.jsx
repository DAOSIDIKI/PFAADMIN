import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Cell } from 'recharts';

const Bars = () => {
  // Sample data - replace with your actual data
  const data = [
    { name: 'Critique', detections: 320 },
    { name: 'Élevé', detections: 280 },
    { name: 'Moyen', detections: 210 },
    { name: 'Faille', detections: 131 },
  ];

  // Custom colors for each risk level
  const getColor = (name) => {
    switch(name) {
      case 'Critique': return '#FF3D00'; // Red
      case 'Élevé': return '#FF9100';   // Orange
      case 'Moyen': return '#FFC400';   // Yellow
      case 'Faille': return '#00C853';  // Green
      default: return '#8884d8';
    }
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <p style={{ textAlign: 'center', marginBottom: 30 }}>Nombre de Détections: 941</p>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="detections" 
            name="Nombre de Détections"
            label={{ position: 'right' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bars;