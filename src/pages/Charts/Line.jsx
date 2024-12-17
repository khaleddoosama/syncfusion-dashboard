import React from 'react';

import { ChartsHeader, LineChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-100">
        <LineChart />
      </div>
    </div>
  );
};
export default Line;
