import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor, currentMode, setIsClicked, initialState } = useStateContext();
  return (
    <div>
      <div className="overlay nav-item">
        <div className={`float-end vh-100 ${currentMode}-bg md-w-400 p-4 overflow-auto`}>

          <div className='d-flex justify-content-between align-items-center '>
            <p className={`fw-semibold fs-5 lh-base ${currentMode}-text`}>Shopping Cart</p>
            <Button icon={<MdOutlineCancel />}
              color="rgb(153, 171, 180)"
              size="4"
              borderRadius="50%"
              bgColor="transparent"
              bgHoverColor="background-hover"
            />
          </div>
          {cartData?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='d-flex border-bottom align-items-center lh-base gap-4 gap-xl-5 p-3 flex-column flex-xl-row text-center text-xl-start'>
                  <img className='rounded-2 w-24' src={item.image} alt="product" />
                  <div>
                    <p className={`fw-semibold ${currentMode}-text`}>{item.name}</p>  
                    <p className={`text-muted fs-6 lh-sm fw-semibold ${currentMode}-text-50`}>{item.category}</p>  
                    <div className="d-flex gap-3 mt-2 align-items-center">
                      <p className={`fw-semibold fs-5 lh-base ${currentMode}-text`}>{item.price}</p>
                      <div className="d-flex align-items-center border-end rounded">
                        <p className="p-2 border text-danger "><AiOutlineMinus /></p>
                        <p className="p-2 border text-success">0</p>
                        <p className="p-2 border text-success"><AiOutlinePlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-3 mb-3">
            <div className='d-flex justify-content-between align-items-center '>
              <p className={`${currentMode}-text-50`}>Sub Total</p>
              <p className={`fw-semibold ${currentMode}-text`}>$890</p>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <div className='d-flex justify-content-between align-items-center '>
              <p className={`${currentMode}-text-50`}>Total</p>
              <p className={`fw-semibold ${currentMode}-text`}>$890</p>
            </div>
          </div>
          <div className="mt-4">
            <Button
              color="white"
              bgColor={currentColor}
              text="Place Order"
              borderRadius="10px"
              width="100"
            />
          </div>

        </div>
        <div className='w-100 h-100'
          onClick={() => setIsClicked(initialState)}
        >

        </div>
      </div>
      
    </div>
  )
}

export default Cart