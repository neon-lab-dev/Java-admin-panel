import { useNavigate } from "react-router-dom"
import backIcon from "../../assets/icons/back.svg"

const UpdateProduct = () => {


    const navigate = useNavigate()

    const handleBackNagigate = () => {
        navigate("/products")
    }


    return (<div>


        <div className='bg-lightgray h-full w-full p-6 py-8'>

            <div className="bg-white overflow-x-auto rounded-[16px] p-4  ps-10 ">

                <div className="flex items-center  justify-between">
                    <button onClick={handleBackNagigate} className=""><img src={backIcon} alt="" /></button>
                    <h1 className="text-[32px] text-black font-bold flex-1 me-6 text-center">Update Product</h1>
                </div>

                {/* form and side image */}

                <div className="flex  gap-3 my-7 mt-1 flex-wrap md:flex-nowrap  w-full">
                    <div className="w-full">
                        <form className="max-w-[513px] md:min-w-[460px] min-w-[300px]">
                            <div className="">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Gloves" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Gloves" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Gloves" />
                            </div>
                            <div className="my-5">
                                <textarea className="w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Gloves" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="900" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="400" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="0" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="gear" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Subcategory" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="Men" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="White" />
                            </div>
                            <div className="my-5">
                                <input className="w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 " type="text" placeholder="White black red" />
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
                        <div className="h-[420px] min-w-[300px] md:min-w-[400px] rounded-xl mt-7  text-center flex flex-col justify-center items-center max-w-[453px] border border-stone2">
                            <img src="https://s3-alpha-sig.figma.com/img/270a/b9ab/0c75cbc27b6cc4cab4e18f643eb6ec23?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOnFRxjl2mWVBn4OEy7DXO24hrxFgCy~bdpyqCcCH15Az-S-fY20WhbzCNOviivSzd6Wg~wqUQYvu3TVDif8UJyWrZc3oHHsA~WQTaUDWzcWYiUSFnEnKNQRuu8zp3DKt9AbT~v-UDhWyFeefqdcO-OYzrxU1trRGse~wDoGKw9-N1ylIEPhlz5JWSwjCqKyLNsGElOQFGitVwo~IkrK9gh9iPDTyzobGuJHO4oUehEiDRzAQWGvNarJCeWsVT~pxNPuLt4MsgAjZxk2-o-pB5OYRRjK7pElOcOZzrdr4FNXEceQvW347BKP~W01fwvA~ChlJXQmmf4grAXoPeKF1A__" alt="" />
                        </div>

                    </div>


                </div>




            </div>
        </div>
    </div>
    )
}

export default UpdateProduct