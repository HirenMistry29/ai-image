import React from 'react';
import Header from '../components/header/header';
import Sidebar from '../components/L-sidebar/sidebar';
import RefImg from '../components/L-sidebar/refImg';
import RSidebar from '../components/R-sidebar/sidebar';
import ContainerHeader from '../components/container/header';
import Room from '../components/L-sidebar/room';

const Pg2 = () => {
    return(
        <>
        <div className="overflow-hidden bg-[#2b2c2e] flex flex-col w-full" id="NewRoot">
          <Header/>
            <div className="relative flex flex-col justify-between gap-32 items-center pt-20 pb-24 px-56">
              <RSidebar/>
              <ContainerHeader/>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-[22%] h-[76%] absolute top-0 left-0 flex flex-col items-start" id="Left" >
                  <Sidebar/>
                {/* <div className="relative flex flex-col justify-end w-[372px] pt-[575px] gap-[80px]"> */}
                  <Room/>
                  <RefImg/>
              {/* </div>     */}
              <div className="bg-[#1d1c1d] absolute flex flex-col justify-center top-[101%] w-[100%] h-24 shrink-0 px-12">
                <div className="shadow-[12px_12px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#279af1] flex flex-col justify-center mr-px h-12 shrink-0 items-center rounded-[24px]">
                  <div className="text-2xl font-['Poppins'] font-semibold text-[#f7f7ff]">
                    Generate
                  </div>
                </div>
              </div>
            </div>

    {/* LINES & BORDERS */}
    <div id='Lines & Borders'>
      <div className="border-solid border-[#5a5a5a] w-[1440px] h-px absolute top-0 left-0 border-t border-b-0 border-x-0" id="LineHeader"/>
      <div className="border-solid border-[#5a5a5a] w-px h-[939px] absolute top-px left-[22%] border-r border-l-0 border-y-0" id="LineSidebarLeft"/>
      <div className="border-solid border-[#5a5a5a] w-px h-[939px] absolute top-px left-[83%] border-r border-l-0 border-y-0" id="LineSidebarRight"/>
      {/* <div className="border-solid border-[#5a5a5a]  w-[100%]  h-px shrink-0 border-t border-b-0 border-x-0" id="Line9" /> */}
    </div>

{/* SLIDER IMAGE LOGIC */}
    <div className={`${ ``/*shadow-[12px_12px_4px_0px_rgba(0,_0,_0,_0.25)] */} relative flex flex-col mr-18 w-2/3`} id="Center" >
      <div
        className={`${''/*bg-[#d9d9d9]*/} relative flex flex-col items-start pt-[333px] pb-[324px] px-64 rounded`}
        id="Image1"
      >
        {/* { SLIDER IMAGE } */}
        {/* <img
          src="https://file.rendit.io/n/Q3SD9UPnmvCaASa75vtP.png"
          className="w-[409px] h-[695px] absolute top-0 left-64"
        /> */}
        {/* <img
          src="https://file.rendit.io/n/mKlfMxveUsF5hHvBxv3M.png"
          className="w-64 h-[695px] absolute top-0 left-0"
        /> */}
        {/* <div
          className="bg-[url(https://file.rendit.io/n/S5aBRVCEjs3gvvoF0Uwo.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row gap-1 w-10 h-10 shrink-0 items-start pt-3 px-1"
          id="Ellipse"
        > */}
          {/* <img
            src="https://file.rendit.io/n/6x2M5V2oP3RBYEyjp6s4.svg"
            className="w-1 shrink-0"
            id="Polygon"
          /> */}
          {/* <img
            src="https://file.rendit.io/n/qTbPmjgo8ZbTeFMK3vWe.svg"
            className="w-1 shrink-0"
            id="Polygon1"
          /> */}
        {/* </div> */}
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Pg2;


