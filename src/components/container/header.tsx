import React from 'react' ;

const ContainerHeader = () => {
    return(
        <div className="w-[61%] h-[6%] bg-[rgba(19,_17,_18,_0.6)] absolute top-0 left-[22%] flex flex-row gap-4 items-start pt-2 px-8">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#f7f7ff] self-center flex flex-row justify-center gap-2 h-9 items-center px-5 py-2 rounded-lg">
        <div
          className="text-base font-['Poppins'] font-semibold text-[#131112]"
          id="Slider"
        >
          Slider{" "}
        </div>
        <div className="self-start relative flex flex-col w-20 shrink-0 items-start">
          <img
            src="https://file.rendit.io/n/pE1wxBjzd30v3wUU2Z9z.svg"
            className="w-20 h-6 absolute  left-0"
            id="Switchbody"
          />
          <img
            src="https://file.rendit.io/n/TKQrbhFIG0jXrQuIMFqa.svg"
            className="relative w-6 ml-5 mt-1/2"
            id="Switch1"
          />
        </div>
      </div>
      {/* <div  className="border-solid border-[#1d1c1d] w-px shrink-0 h-16 mb-2 mr-4 border-r border-l-0 border-y-0"
        id="Line"
      /> */}
      <div id='leftArrow' className="text-xl font-['Inter'] font-semibold text-[#f7f7ff] mt-3 mr-[1%] ml-[10%]">
        &#60;
      </div>
      <div id='tools' className="text-xl font-['Inter'] font-medium text-[#f7f7ff] self-center mr-6">
        Tools
      </div>
      <div id='containerHeaderImages' className='flex gap-10'>
      <img
        src="https://file.rendit.io/n/dU4nqDycuCyx3Mmoxrju.png"
        className="w-8 shrink-0 mt-2 "
        id="Ellipse1"
      />
      <img
        src="https://file.rendit.io/n/dU4nqDycuCyx3Mmoxrju.png"
        className="w-8 shrink-0 mt-2"
        id="Ellipse2"
      />
      <img
        src="https://file.rendit.io/n/dU4nqDycuCyx3Mmoxrju.png"
        className="mt-2 w-8 shrink-0"
        id="Ellipse3"
      />
      </div>
    </div>
    )
}

export default ContainerHeader; 