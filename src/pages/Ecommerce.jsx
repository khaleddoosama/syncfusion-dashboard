import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 px-2 py-1 rounded-2 background-hover">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);


const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext()
  return (
    <div className="mt-5">
      <div className="d-flex flex-wrap lg-flex-nowrap justify-content-center ">
        <div
          className={`${currentMode}-bg h-44 rounded lg-w-80 w-100 p-4 m-2`}>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className={`fw-semibold ${currentMode}-text-50`}>Earnings</p>
              <p className={`fs-5 lh-bas ${currentMode}-text`}>$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className={`fs-5 lh-base opacity-75 text-white rounded-circle shadow-hover `}
            >
              <BsCurrencyDollar />
            </button>
          </div>

          <div className="mt-4">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="d-flex m-2 flex-wrap justify-content-center gap-1 align-items-center">
          {earningData.map((item) => (
            <div key={item.title} className={`${currentMode}-bg h-44 md:w-56  p-3 pt-5 rounded-2 md-w-56`}>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="fs-5 lh-base opacity-75 rounded-circle shadow-hover"
              >
                {item.icon}
              </button>
              <p className="mt-2">
                <span className={`fs-5 lh-base fw-bold ${currentMode}-text`}>{item.amount}</span>
                <span className={`fs-6 lh-sm ms-2`} style={{ color: item.pcColor.split('-')[0], fontWeight: item.pcColor.split('-')[1] }}>
                  {item.percentage}
                </span>
              </p>
              <p className={`fs-6 lh-sm ${currentMode}-text-50 mt-1`}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex gap-5 flex-wrap justify-content-center w-100">
        <div className={`${currentMode}-bg ${currentMode}-text-50  m-2 p-3 rounded-2 md-w-780`}>
          <div className="d-flex justify-content-between">
            <p className={`fw-semibold fs-5 lh-bas ${currentMode}-text`}>Revenue Updates</p>
            <div className="d-flex align-items-center gap-3">
              <p className="d-flex align-items-center gap-2 text-gray fw-bold">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className={`${currentMode}-text-50`}>Expense</span>
              </p>
              <p className="d-flex align-items-center gap-2 fw-bold" style={{ color: '#00bdae' }}>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-5 d-flex gap-5 flex-wrap justify-content-center">
            <div className=" border-end border-color m-4 pe-5">
              <div>
                <p>
                  <span className={`fs-4 fw-semibold ${currentMode}-text`}>$93,438</span>
                  <span className={`py-2 px-1 cursor-pointer rounded-circle ${currentMode}-text ms-2 fs-6 lh-sm`} style={{ backgroundColor: '#00bdae' }}>
                    23%
                  </span>
                </p>
                <p className={`${currentMode}-text-50 mt-1`}>Budget</p>
              </div>
              <div className="mt-4">
                <p className={`fs-4 fw-semibold ${currentMode}-text`}>$48,487</p>

                <p className={`${currentMode}-text-50 mt-1`}>Expense</p>
              </div>

              <div className="mt-4">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-5">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>


        <div>
          <div>
            <div
              className="rounded-2 md-w-400 p-3 m-2"
              style={{ backgroundColor: currentColor }}
            >
              <div className="d-flex justify-content-between align-items-center ">
                <p className={`fw-semibold ${currentMode}-text fs-4 lh-lg`}>Earnings</p>

                <div>
                  <p className={`fs-4 lh-lg ${currentMode}-text fw-semibold mt-4`}>$63,448.78</p>
                  <p className={`${currentMode}-text-50`}>Monthly revenue</p>
                </div>
              </div>

              <div className="mt-3">
                <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
              </div>
            </div>

            <div className={`${currentMode}-bg rounded-2 md-w-400 p-4 m-2 d-flex justify-content-center align-items-center gap-5`}>
              <div>
                <p className={`fs-4 lh-lg fw-semibold ${currentMode}-text`}>$43,246</p>
                <p className={`${currentMode}-text-50`}>Yearly sales</p>
              </div>

              <div className="w-40">
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
              </div>
            </div>
          </div>
        </div >

        <div className="d-flex gap-5 m-3 flex-wrap justify-content-center">
          <div className={`${currentMode}-bg  p-4 rounded-2`}>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <p className={`fs-5 lh-base fw-semibold ${currentMode}-text`}>Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-5 w-72 md-w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="d-flex justify-content-between mt-3">
                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="fs-4 lh-lg rounded-2 p-2 px-3"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className={`fs-6 lh-base fw-semibold ${currentMode}-text`}>{item.title}</p>
                      <p className={`fs-6 lh-sm ${currentMode}-text-50`}>{item.desc}</p>
                    </div>
                  </div>
                  <p style={{ color: item.pcColor.split('-')[0], fontWeight: item.pcColor.split('-')[1] }}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4 border-top">
              <div className="mt-2">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className={`${currentMode}-text-50 fs-6 lh-sm`}>36 Recent Transactions</p>
            </div>
          </div>
          <div className={`${currentMode}-bg p-4 rounded-2 w-96 md-w-760`}>
            <div className="d-flex justify-content-between align-items-center gap-2 mb-5">
              <p className={`fs-5 lh-base fw-semibold ${currentMode}-text`}>Sales Overview</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="w-md-100 overflow-auto">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <div className={`md-w-400 ${currentMode}-bg rounded-2 p-4 m-2`}>
            <div className="d-flex justify-content-between align-items-center">
              <p className={`fs-5 lh-base fw-semibold ${currentMode}-text`}>Weekly Stats</p>
              <button type="button" className={`fs-5 lh-base fw-semibold ${currentMode}-text-50 bg-transparent background-hover rounded-circle`}>
                <IoIosMore />
              </button>
            </div>

            <div className="mt-5">
              {weeklyStats.map((item) => (
                <div key={item.title} className="d-flex justify-content-between mt-3 w-100">
                  <div className="d-flex gap-3 align-items-center">
                    <button
                      type="button"
                      style={{ background: item.iconBg }}
                      className={`fs-4 lh-lg ${currentMode}-text rounded-4 p-2 px-3`}
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className={`fs-6 lh-base fw-semibold ${currentMode}-text`}>{item.title}</p>
                      <p className={`fs-6 lh-sm ${currentMode}-text-50`}>{item.desc}</p>
                    </div>
                  </div>

                  <p style={{ color: item.pcColor.split('-')[0], fontWeight: item.pcColor.split('-')[1] }}>{item.amount}</p>
                </div>
              ))}
              <div className="mt-4">
                <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
              </div>
            </div>

          </div>
          <div className={`w-400 ${currentMode}-bg rounded-2 p-4 m-2`}>
            <div className="d-flex justify-content-between align-items-center">
              <p className={`fs-5 lh-base fw-semibold ${currentMode}-text`}>MedicalPro Branding</p>
              <button type="button" className={`fs-5 lh-base fw-semibold ${currentMode}-text-50 bg-transparent background-hover rounded-circle`}>
                <IoIosMore />
              </button>
            </div>
            <p className={`fs-6 lh-sm  fw-semibold rounded-1 bg-warning py-1 px-2 ${currentMode}-text mt-5`} style={{width:'fit-content'}}>
              16 APR, 2021
            </p>

            <div className="d-flex gap-3 border-bottom mt-4">
              {medicalproBranding.data.map((item) => (
                <div key={item.title} className="border-end pe-3 pb-2">
                  <p className={`fs-6 lh-sm ${currentMode}-text-50`}>{item.title}</p>
                  <p className={`fs-6 lh-sm ${currentMode}-text`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-bottom pb-3 mt-2">
              <p className={`fs-6 lh-base fw-semibold mb-2 ${currentMode}-text-50`}>Teams</p>

              <div className="d-flex gap-3">
                {medicalproBranding.teams.map((item) => (
                  <p
                    key={item.name}
                    style={{ background: item.color }}
                    className={`hover:drop-shadow-xl ${currentMode}-text py-1 px-2 rounded-1 fs-6 lh-sm`}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <p className={`fs-6 lh-base fw-semibold mb-2 ${currentMode}-text-50`}>Leaders</p>
              <div className="d-flex gap-3">
                {medicalproBranding.leaders.map((item, index) => (
                  <img key={index} className="rounded-4 w-8 h-8" src={item.image} alt="" />
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4 border-top">
              <div className="mt-2">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className={`${currentMode}-text-50 fs-6 lh-sm`}>36 Recent Transactions</p>
            </div>
          </div>
          <div className={`w-400 ${currentMode}-bg rounded-2 p-4 m-2`}>
            <div className="d-flex justify-content-between">
              <p className={`fs-5 lh-base fw-semibold ${currentMode}-text`}>Daily Activities</p>
              <button type="button" className={`fs-5 lh-base fw-semibold ${currentMode}-text-50 bg-transparent background-hover rounded-circle`}>
                <IoIosMore />
              </button>
            </div>
            <div className="mt-5">
              <img
                className="md:w-96 h-50 "
                src={product9}
                alt=""
              />
              <div className="mt-4">
                <p className={`fw-semibold fs-5 lh-lg ${currentMode}-text`}>React 18 coming soon!</p>
                <p className={`${currentMode}-text-50`}>By Johnathan Doe</p>
                <p className={`mt-4 fs-6 lh-sm ${currentMode}-text-50`}>
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-2">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Read More"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Ecommerce