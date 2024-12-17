import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className=" overlay nav-item ">
      <div className={`${currentMode}-bg vh-100 w-400 position-fixed top-0 end-0 overflow-auto`}>
        <div className="d-flex justify-content-between align-items-center p-3 ms-3">
          <p className={`fw-semibold fs-5 lh-base ${currentMode}-text `}>Settings</p>
          
          <button
            type="button"
            className="lh-base fs-5 rounded-circle mt-3 bg-transparent border-0 background-hover"
            style={{ color: currentColor }}
            onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>

        </div>
        <div className="d-flex-col border-top border-top-1 p-3 ms-3">
          <p className={`fw-semibold fs-6 ${currentMode}-text `}>Theme Option</p>

          <div className="mt-3">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="light" className={`ms-2 fs-6 lh-sm ${currentMode}-text`}>
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              checked={currentMode === 'Dark'}

            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dark" className={`ms-2 fs-6 lh-sm ${currentMode}-text`}>
              Dark
            </label>
          </div>
        </div>
        <div className="p-3 border-top border-1 ms-3">
          <p className={`fw-semibold fs-5 ${currentMode}-text `}>Theme Colors</p>
          <div className="row">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter" className='col p-2'>
                <div
                  className="position-relative mt-2"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="rounded-circle w-10 h-10 d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`fs-1 lh-base text-white ${item.color === currentColor ? 'd-block' : 'd-none'}`}
                    style={{margin:'-5px'}}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
      <div className='w-100 h-100'
        onClick={() => setThemeSettings(false)}
      >

      </div>
    </div>
  );
};

export default ThemeSettings;
