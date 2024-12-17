import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor,currentMode } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900)
      setActiveMenu(false)
  }

  const activeLink = 'd-flex align-items-center gap-3 ps-3 pt-2 pb-2 rounded text-light text-md m-2 text-decoration-none lh-base fs-6';
  const normalLink = `d-flex align-items-center gap-3 ps-3 pt-2 pb-2 rounded text-md ${currentMode}-text  m-2 text-decoration-none lh-base fs-6`;

  return (
    <div className="parent ms-2 vh-100 overflow-auto pb-5 w-72 ">
      {activeMenu && (
        <>
          <div className="d-flex justify-content-between align-items-center w-100 ">
            <Link to="/" onClick={handleCloseSidebar} className={`align-items-center gap-2 ms-2 mt-3 d-flex text-decoration-none lh-base fs-5 fw-bolder ${currentMode}-text bg-transparent`}>
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="lh-base fs-5 rounded-circle mt-3 d-block d-lg-none d-md-block bg-transparent border-0 background-hover"
                style={{ color: currentColor }}
                onClick={() => { setActiveMenu((prevActiveMenu) =>  !prevActiveMenu)}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-5">
            {links.map((item) => (
              <div key={item.title}>
                <p className={`${currentMode}-text-50 text-uppercase m-2 mt-3`}>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : ''
                    })}
                    
                  >
                    {link.icon}
                    <span className="text-capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;