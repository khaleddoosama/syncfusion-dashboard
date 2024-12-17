import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();

  return (
    <div className=" mb-5">
      <p className="fs-5 lh-base text-muted">{category}</p>
      <p className={`fs-4 lh-lg fw-bolder tracking-tight text-slate-900 ${currentMode}-text`}>
        {title}
      </p>
    </div>
  );
}

export default Header;
