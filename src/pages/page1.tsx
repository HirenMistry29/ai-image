import React from 'react'
import Inputimage from '../images/input.png'
import { Link } from "react-router-dom";


const Page1 = () => {
    const inputBox = {
    display: 'flex',
    width: '34%', 
    height: '40%',
    allignItems: 'center',
    backgroundColor: 'white', 
    border: '1px solid #ccc', 
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '30px',
    marginLeft: '5%'
    }

    const inputtext = {
        
        width: '300px', 
        height: '4%',
        backgroundColor: 'white', 
        border: '1px solid #ccc', 
        padding: '20px',
        borderRadius: '5px',
        marginLeft: '9%'
    }

    const browseFiles = {
        width: '135px', 
        height: '4%',
        backgroundColor: '#1D1C1D', 
        border: '1px solid #ccc', 
        padding: '20px',
        borderRadius: '5px',
        marginLeft: '25%'
    }

    return(
        <>
        <div style={{backgroundColor: '#131112'}}>
            <div className='flex text-5xl text-white justify-center py-5 font-bold'>Ai For Interior</div>
        </div>

        <div style={inputtext} className='absolute top-1/3 '>
            {/* <div className='absolute top-1/2 font-semibold text-gray-600'>Choose File</div> */}
        </div>
        <span className='absolute top-1/3 translate-y-1/2 translate-x-1/2 ml-28 font-semibold text-gray-600'>Choose File</span>
       
        <div style={browseFiles} className='absolute top-1/3  '>
            {/* <div className=' text-base font-semibold text-white'>Browse Files</div> */}
        </div>
        <span className='absolute top-1/3 translate-y-1/2 translate-x-1/2 ml-80 font-semibold text-white'>Browse Files</span>           
        <div style={inputBox} className='absolute top-1/2 -translate-y-1/4 mt-10' >
            <div className=''>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="tw-text-white tw-font-medium" to="/page2">
                <img src={Inputimage} className='flex translate-x-3/4 justify-center mt-8' style={{width:'100px', marginLeft:'80px'}} alt=""/>
            </Link>
                <div className='absolute ml-8 text-xl font-extrabold text-black bottom-14'>Input Image or CAD file of a Room</div>
            </div>  
        </div>

        <div className='bg-white border-10 absolute top-1/3 left-1/3 ml-40  -translate-y-1/4 mt-12' style={{width:"50%" , height: "70%"}}>

        </div>
        </>
    )
}

export default Page1;