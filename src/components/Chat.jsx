import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className={`nav-item md-end-52 nav-button end-0 ${currentMode}-bg p-4 rounded-2  w-96`}>
      <div className="d-flex justify-content-between align-items-center ps-2">
        <div className="d-flex gap-3">
          <p className={`fw-semibold fs-5 lg-base ${currentMode}-text`}>Messages</p>
          <button type="button" className={`${currentMode}-text fs-6 lh-sm rounded p-1 px-2 bg-warning`}>
            5 New
          </button>
        </div>
        <Button icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          size="4"
          borderRadius="50%"
          bgColor="transparent"
          bgHoverColor="background-hover"
        />
      </div>
      <div className="mt-4">
        {chatData?.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-4 border-bottom  p-2 lh-lg">
            <div className="position-relative">
              <img
                className="rounded-circle w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="position-absolute d-inline-flex rounded-circle h-3 w-3 end-0 top-0"
              />
            </div>
            <div>
              <p className={`fw-semibold ${currentMode}-text`}>{item.message}</p>
              <p className={`text-muted fs-6 lg-base ${currentMode}-text-50`}>{item.desc}</p>
              <p className={`text-muted fs-6 lg-sm ${currentMode}-text-50`}>{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="100"
          />
        </div>
      </div>

    </div>
  )
}

export default Chat