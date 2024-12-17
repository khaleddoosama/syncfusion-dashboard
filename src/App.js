import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import './css/style.css'

import { useStateContext } from './contexts/ContextProvider';


const App = () => {

  const { setCurrentColor, setCurrentMode, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  // useStateContext
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'bg-dark' : ''}
      style={{ backgroundColor: 'rgb(250 251 251)' }}
    >
      <BrowserRouter>
        <div className="d-flex position-relative"
        >
          <div
            className="position-fixed end-0 bottom-0 p-3"
            style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="TopCenter">

              <button
                className={`border-0 fs-4 rounded-circle text-white d-flex align-items-center p-2 shadow-hover`}
                onClick={() => setThemeSettings(true)}
                style={{ backgroundColor: currentColor }}

              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className={`w-72 position-fixed sidebar ${currentMode}-bg`}>
              <Sidebar />
            </div>
          ) : (
            <div className='d-none'>
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? `min-vh-100 md-ms-72 w-100`
                : 'w-100 min-vh-100 flex-2'
            }
          >

            <div className="navbar w-100 ">
              <Navbar />
            </div>

            <div>
              {themeSettings && (<ThemeSettings />)}


              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;