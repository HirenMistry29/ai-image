import React from 'react';

const Header = () => {
    return (
        <div className="bg-[#131112] flex flex-row justify-between h-14 shrink-0 items-center pt-3 pl-8 pr-5">
        <div className="flex flex-row gap-6 items-center">
          <div className="text-center text-base font-['Poppins'] font-bold text-[#f7f7ff]">
            File
          </div>
          <div
            className="border-solid border-[#60656f] self-start mr-2 w-px shrink-0 h-6 border-r border-l-0 border-y-0"
            id="Line10"
          />
          <div className="text-center text-base font-['Poppins'] font-bold text-[#f7f7ff]">
            File Name
          </div>
        </div>
        <div className="self-start flex flex-row mt-2 gap-1 items-start">
          <img
            src="https://file.rendit.io/n/tFVv2cCDtvyxDhP19dEf.png"
            className="w-6 shrink-0 mt-2 mr-1"
            id="Ellipse4"
          />
          <div className="text-center text-base font-['Poppins'] font-bold text-[#f7f7ff] mt-2 mr-4">
            Account
          </div>
          <div
            className="border-solid border-[#60656f] w-px shrink-0 h-6 mt-px mr-5 border-r border-l-0 border-y-0"
            id="Line11"
          />
          <div className="text-center text-base font-['Poppins'] font-bold text-[#f7f7ff] mt-2">
            Download
          </div>
          <img
            src="https://file.rendit.io/n/6xL2794rj3VCFLphmWbb.svg"
            className="w-4 shrink-0 mt-3 mr-4"
            id="IconDownload"
          />
          <div
            className="border-solid border-[#60656f] w-px shrink-0 h-6 mt-px mr-3 border-r border-l-0 border-y-0"
            id="Line12"
          />
          <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#279af1] flex flex-col justify-center h-6 items-center rounded-lg">
            <div className="text-center text-sm font-['Poppins'] font-bold text-[#f7f7ff] mx-6">
              Object Editor
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header;