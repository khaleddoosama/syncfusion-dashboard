import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <Header category="App" title="Calender" />
      <div className="text-center">
        <div id="preview" />
        <div className="d-flex justify-content-center align-items-center flex-wrap"
          style={{ gap: '10rem' }}>
          <div>
            <p className="fs-5 lh-base fw-semibold mt-2 mb-4">Inline Pallete</p>
            <CustomColorPicker id="inline-palette" mode="Palette" />
          </div>
          <div>
            <p className="fs-5 lh-base fw-semibold mt-2 mb-4">Inline Picker</p>
            <CustomColorPicker id="inline-picker" mode="Picker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
