import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-100">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  );
};

export default Pie;
