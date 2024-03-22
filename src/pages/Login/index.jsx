import React from 'react'
import logo from '../../assets/icon/logo.svg'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="lg:w-[888px] lg:h-[672px] md:w-1/2 md:h-1/2 bg-white rounded-[20px] border border-stone-300 " >
            <div className="w-full h-full flex flex-col items-center mt-[29px]">
                {/* {image and Dashboard} */}
                    <div className='flex flex-col w-full justify-center items-center' >
                        <img  className='w-[130px] h-[167px]' src={logo}/>
                        <p className="flex w-full justify-center text-zinc-800 text-[32px] font-medium font-['Lato'] leading-loose mt-[18px]">
                            Dashboard Login
                        </p>
                    </div>
                {/* Useer Name */}
                    <div className='mt-[36px]'>
                        <div  >
                            <p className="w-full text-zinc-800 text-base font-bold font-['Lato'] leading-tight">User Name</p>
                        </div>
                        <input className="mt-2 lg:w-[515px] lg:h-[54px] md:w-1/4 md:h-1/4 sm:w-1/4 sm:h-1/4 bg-white rounded-[10px] border border-stone-300 placeholder:opacity-40 leading-9 pl-[16px] text-base font-light font-['Lato']" type='text' placeholder='Enter your User Name'/>
                        <div className='mt-[24px]'>
                            <p className="w-full text-zinc-800 text-base font-bold font-['Lato'] leading-tight">Password</p>
                        </div>
                        <input className="mt-2 w-[515px] h-[54px] bg-white rounded-[10px] border border-stone-300 placeholder:opacity-40 leading-9 pl-[16px] text-base font-light font-['Lato']" type='text' placeholder='Enter your Password'/>
                    </div>
                    <button className='mt-[36px] w-[515px] h-16 bg-rose-500 rounded-xl'>
                        <p className="text-white text-xl font-bold font-['Lato]">
                            Login
                        </p>
                    </button>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Login;
