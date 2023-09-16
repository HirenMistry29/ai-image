import React from 'react';

const Sidebar = () => {
    return(
        <>
        <div className="bg-[rgba(19,_17,_18,_0.6)] flex flex-col gap-6 w-[100%]">
        <div className="flex flex-row gap-4 items-start ml-8 mr-4">
          <div className="self-end flex flex-col mt-3 gap-1 w-64 items-start">
            <div className="text-lg font-['Poppins'] font-semibold text-[#f7f7ff]">
              Room Type
            </div>
            <div className="text-sm font-['Poppins'] font-light text-[#f7f7ff] self-end">
              bedroom, living room, etc
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/hCYHFCAJ20qnsQHKM9vF.png"
            className="w-12 shrink-0"
          />
        </div>
        <div
          className="border-solid border-[#5a5a5a] h-px shrink-0 border-t border-b-0 border-x-0"
          id="Line2"
        />
      </div>
      </>
    )
}

export default Sidebar;