import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="position-relative lh-base fs-5 border-0 bg-transparent background-hover rounded-circle"
    >
      <span
        style={{
          background: dotColor,right: '9px', top: '10px' }}
        className=" position-absolute d-inline-flex rounded-circle h-2 w-2"
        />

        {icon}
      
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, screenSize, setScreenSize, currentColor, setIsClicked, initialState } = useStateContext();
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  useEffect(() => {
    if (screenSize <= 900)
      setActiveMenu(false);
    else
      setActiveMenu(true);
  }, [screenSize])

  return (
    <div className='md-active d-flex justify-content-between p-2 md:mx-6 md:mr-6  position-relative w-100'>
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} dotColor=""  color={currentColor} icon={< AiOutlineMenu />} />
    
      <div className="d-flex position-relative">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="d-flex align-items-center gap-2  p-1 rounded-2 background-hover"
            onClick={() => handleClick('userProfile')}
            style={{cursor:'pointer'}}
          >
            <img
              className="rounded-circle w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p className='m-auto'>
              <span className="text-muted text-14">Hi,</span>{' '}
              <span className="text-muted fw-bold ms-1 text-14">
                Khaled
              </span>
            </p>
            <MdKeyboardArrowDown className="text-muted text-14" />
          </div>
        </TooltipComponent>
        
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
        
      </div>

    </div>


  )
}

export default Navbar