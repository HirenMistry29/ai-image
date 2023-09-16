import React from 'react';

const RefImg = () => {
    return(
        <>
        <div className="w-[100%] h-[100%px] bg-[#f7f7ff] absolute top-[12%] left-0 flex flex-col gap-4 items-center pt-1 pb-6 px-4">
          <div className="self-stretch flex flex-row ml-1 gap-14 items-start">
            <div className="text-lg font-['Poppins'] font-semibold text-[rgba(19,_17,_18,_0.6)] mt-3">
              Reference Image
            </div>
            <img
              src="https://file.rendit.io/n/hCYHFCAJ20qnsQHKM9vF.png"
              className="w-12 shrink-0"
            />
          </div>
          <img
            src="https://file.rendit.io/n/VEwJfZfWOBYHCu1XjIxv.png"
            className=""
          />
        </div>
        </>
    )
}

export default RefImg;