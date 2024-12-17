import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type='button'
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`fs-${size} w-${width} ${bgHoverColor === 'background-hover' ? 'background-hover' : 'shadow-hover'}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;