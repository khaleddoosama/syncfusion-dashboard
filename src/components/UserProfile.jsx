import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className={`nav-item nav-button end-0 ${currentMode}-bg p-4 rounded-2 w-96`}>
      <div className="d-flex justify-content-between align-items-center">
        <p className={`fw-semibold fs-5 lh-lg ${currentMode}-text`}>User Profile</p>
        <Button icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          size="4"
          borderRadius="50%"
          bgColor="transparent"
          bgHoverColor="background-hover"
        />
      </div>
      <div className="d-flex gap-4 align-items-center mt-4 border-bottom pb-4">
        <img
          className="rounded-circle h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className={`fw-semibold fs-5 lh-lg ${currentMode}-text`}> Khaled Osama </p>
          <p className={`fs-6 lh-sm ${currentMode}-text-50`}>  Administrator   </p>
          <p className={`fs-6 lh-sm fw-semibold ${currentMode}-text-50`}> khaleddoosama@gmail.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="d-flex gap-5 border-bottom p-3">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" fs-5 lh-base rounded-2"
            >
              {item.icon}
            </button>

            <div>
              <p className={`fw-semibold  ${currentMode}-text`}>{item.title}</p>
              <p className={`fs-6 lh-sm ${currentMode}-text-50`}> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="100"
        />
      </div>
    </div>

  );
}

export default UserProfile