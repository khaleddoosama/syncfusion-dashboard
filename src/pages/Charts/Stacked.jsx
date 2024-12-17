import React from 'react';
import { ChartsHeader, Stacked as StackedChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-100">
        <StackedChart />
      </div>
      
    </div>
  )
};

export default Stacked;
