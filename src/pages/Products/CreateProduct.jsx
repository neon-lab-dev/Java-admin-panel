import React, { useRef } from 'react'
import backIcon from "../../assets/icons/back.svg"
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const navigate = useNavigate()

    const inputRef = useRef()

    const handleBackNagigate = () => {
        navigate("/products")
    }

    const handleChooseImage = () => {
        inputRef.current.click()
    }


    return (<div>


        <div className='bg-lightgray h-full w-full p-6 py-8'>

            <div className="bg-white overflow-x-auto rounded-[16px] p-4  ps-10 ">

                <div className="flex items-center  justify-between">
                    <button onClick={handleBackNagigate} className=""><img src={backIcon} alt="" /></button>
                    <h1 className="text-[32px] text-black font-bold flex-1 me-6 text-center">Create Product</h1>
                </div>

                {/* form and side image */}

                <div className="flex  gap-3 my-5 mt-10 flex-wrap md:flex-nowrap  w-full">
                    <div className="w-full">
                        <form className='max-w-[513px] md:min-w-[460px] min-w-[300px]'>
                            <div className="">
                                <input className=" h-[45px] w-full rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Product Name" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Product Description" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Product key featured" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Product Specification" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Best Price" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Discounted Price" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Stock" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Category" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Subcategory" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Size/Type" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Color" />
                            </div>
                            <div className="my-5 px-4 w-full  rounded-xl border-darkstone  border ps-3">

                                <select className=" text-[16px] outline-none text-gray2 h-[45px] w-full" name="" >
                                    <option selected disabled>Avaailable Color</option>
                                    <option>White</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Gray</option>
                                </select>
                                {/* <input type="text" placeholder="" /> */}
                            </div>
                            {/* buttons */}
                            <div className="my-5">
                                <button type="button" className="h-[54px] rounded-xl text-white bg-darkgreen w-full">Create</button>
                            </div>
                            <div className="my-5">
                                <button type="button" className="h-[54px] rounded-xl btn btn-neutral btn-outline w-full">Verify</button>
                            </div>
                        </form>
                    </div>

                    <div className="border-dashed border-l-2  ps-5 pe-3 flex flex-col  items-center  border-l-stone1">
                        {/* product image */}
                        <div className="h-[420px] md:min-w-[400px] min-w-[300px] rounded-xl mt-7  text-center flex flex-col justify-center items-center max-w-[453px] border border-stone2">
                            <input ref={inputRef} type="file" className='hidden' name="" id="" />
                            <button onClick={handleChooseImage} type="button" className=" bg-gradient-to-t from-blackwhite text-white h-[55px] rounded-xl w-[253px] to-whiteblack">
                                Choose image</button>
                        </div>

                    </div>


                </div>




            </div>
        </div>
    </div>
    )
}

export default CreateProduct