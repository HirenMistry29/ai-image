import React from 'react'

const Room = () =>{
    return(
        <div className=' flex gap-5 top-[50%]'>
        <div id='Furnished/Empty'>
        <div className="w-[100%] h-24 bg-[rgba(19,_17,_18,_0.6)] absolute top-[55%] left-0 flex flex-row justify-center pt-4 p-3 gap-8 items-start">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#f7f7ff] flex flex-col justify-center mt-2 h-12 items-center rounded-lg">
          <div className="text-center text-base font-['Poppins'] font-semibold leading-[20px] text-[rgba(19,_17,_18,_0.6)] w-3/4 mx-4">
            Furnished Room
          </div>
        </div>
        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#f7f7ff] flex flex-col justify-center mt-2 pl-6 w-1/2 h-12 items-start rounded-lg">
          <div className="text-center text-base font-['Poppins'] font-semibold leading-[20px] text-[rgba(19,_17,_18,_0.6)] w-3/4">
            Empty Room
          </div>
        </div>
      </div>
      <div
          className="border-solid border-[#5a5a5a] w-[100%] h-px absolute top-[68%] left-0 border-t border-b-0 border-x-0"
          id="Line3"
        />
      </div>

      <div id='Room Style'>  
      <div className="w-[100%] h-[10%] bg-[rgba(19,_17,_18,_0.6)] absolute top-[69%] left-0 flex flex-col gap-2 items-start pl-8 py-2">
          <div className="text-lg font-['Poppins'] font-semibold text-[#f7f7ff]">
            Room Style
          </div>
          <div className="text-base font-['Poppins'] text-[#f7f7ff] ml-5">
            luxury, modern, etc
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/hCYHFCAJ20qnsQHKM9vF.png"
          className="w-12 h-12 absolute top-[68%] left-[85%]"
        />
        <div
          className="border-solid border-[#5a5a5a] w-[100%] h-px absolute top-[79%] left-0 border-t border-b-0 border-x-0"
          id="Line4"
        />
        </div>

        <div id='Materail'> 
        <div className="w-[100%] h-[20%] bg-[rgba(19,_17,_18,_0.6)] absolute top-[80%] left-0 flex flex-col gap-2 items-start pl-8 py-2">
          <div className="text-lg font-['Poppins'] font-semibold text-[#f7f7ff]">
            Materials
          </div>
          <div className="text-base font-['Poppins'] text-[#f7f7ff] ml-5">
            wood, steel, marble, etc
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/hCYHFCAJ20qnsQHKM9vF.png"
          className="w-12 h-12 absolute top-[79%] left-[85%]"
        />
        <img
          src="https://file.rendit.io/n/as73pS06A48CkkaQJ8qf.png"
          className="w-18 h-16 absolute top-[93%] left-[40%]"
        />  
        <div
          className="border-solid border-[#5a5a5a] w-[100%] h-px absolute top-[100%] left-0 border-t border-b-0 border-x-0"
          id="LineMaterial"
        />
        </div>

        <div>
            
            
        </div>
      </div>
    )
}

export default Room;