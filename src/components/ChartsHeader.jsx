import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const ChartsHeader = ({ category, title }) => {
  const { currentMode } = useStateContext();

  return (
    <div className=" mb-5">
      <div>
        <p className="fs-5 lh-base text-muted">Chart</p>
        <p className={`fs-4 lh-lg fw-bolder ${currentMode}-text`}>{category}</p>
      </div>
      <p className={`text-centerfs-5 lh-base mb-2 mt-3 ${currentMode}-text-50`}>{title}</p>
    </div>
  );
}

export default ChartsHeader;
