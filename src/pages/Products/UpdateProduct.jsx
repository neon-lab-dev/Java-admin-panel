import { useNavigate } from "react-router-dom"
import backIcon from "../../assets/icons/back.svg"
import { useForm } from "react-hook-form"
import { useState } from "react"

const UpdateProduct = () => {


    const { register, handleSubmit, formState: { errors }, getValues, setValue, setError, clearErrors } = useForm()
    const { baseprice, discountprice, category, name, description, features, stock, availablecolor, specification, subcategory, size, color } = getValues()
    const [categories] = useState(['Gear', 'Shoes', 'Helmets']);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [subSubcategories, setSubSubcategories] = useState([]);
    const [selectedSubSubcategory, setSelectedSubSubcategory] = useState('');


    const navigate = useNavigate()
    const handleBackNagigate = () => {
        navigate("/products")
    }

    const handleFormSubmit = (data) => {
        console.log(data);
    }




    const subcategoriesMap = {
        Gear: [
            'Bat',
            'Batting Gear',
            'WicketKeeping',
            'Protection',
            'Bags',
            'Clothing',
            'Cricket Sets',
            'Accessories',
        ],
        Shoes: ['Bowling', 'Spikes', 'Rubber Studs', 'Accessories'],
        Helmets: ['Titanium', 'Steel', 'Limited Edition', 'Accessories'],
    };

    const subSubcategoriesMap = {
        Bat: ['English Willow', 'Kashmir Willow', 'Tennis', 'Player Edition'],
        'Batting Gear': ['Gloves', 'Leg Guard', 'Inner Gloves'],
        WicketKeeping: ['WGloves', 'WLeg Guard', 'WInner Gloves'],
        Protection: [
            'Thigh Pad',
            'Chest Guard',
            'Arm Guard',
            'Abdominal Guard',
            'Inner ThighPad',
        ],
        Bags: ['Kitbags', 'Wheelie', 'Duffle', 'Backpack', 'Bat Cover'],
        Clothing: [
            'On-Field',
            'Base Layer',
            'Athletic Supporter',
            'Socks',
            'Caps & Hats',
            'WristBand',
        ],
        'Cricket Sets': ['English Willow Kit', 'Kashmir Willow Kit', 'Plastic Kit'],
        Accessories: [
            'Ball',
            'SunGlass',
            'Bat Grips',
            'Bat Care',
            'Stumps',
            'Other',
        ],
    };


    const handleCategoryChange = category => {
        clearErrors("category")
        if (!category) {
            setError("category", { message: "Choose a valid category" })
        }
        setValue("category", category)
        setSelectedCategory(category);
        setSubcategories(subcategoriesMap[category] || []);
        setSelectedSubcategory(''); // Reset selected subcategory when the category changes
        setSubSubcategories([]); // Reset subsubcategories when the category changes
        setSelectedSubSubcategory(''); // Reset selected subsubcategory when the category changes
    };


    const handleSubcategoryChange = subcategory => {
        clearErrors("subcategory")
        if (!subcategory) {
            setError("subcategory", { message: "Choose a valid subcategory" })
        }
        setSelectedSubcategory(subcategory);
        if (selectedCategory === 'Gear') {
            setSubSubcategories(subSubcategoriesMap[subcategory] || []);
        } else {
            setSubSubcategories([]); // Reset subsubcategories if the category is not 'Gear'
        }
        setSelectedSubSubcategory(''); // Reset selected subsubcategory when the subcategory changes
    };





    return (<div>


        <div className='bg-lightgray h-full w-full p-6 py-8'>

            <div className="bg-white overflow-x-auto rounded-[16px] p-4  ps-10 ">

                <div className="flex items-center  justify-between">
                    <button onClick={handleBackNagigate} className=""><img src={backIcon} alt="" /></button>
                    <h1 className="text-[32px] text-black font-bold flex-1 me-6 text-center">Update Product</h1>
                </div>

                {/* form and side image */}

                <div className="flex  gap-3 my-7 mt-6 flex-wrap md:flex-nowrap  w-full">
                    <div className="w-full">
                        <form onSubmit={handleSubmit(handleFormSubmit)} className='max-w-[513px] md:min-w-[460px] min-w-[300px]'>

                            {/* name  */}
                            <div className="">
                                <input {...register("name",
                                    {
                                        required: { value: true, message: "This field is required" },
                                        minLength: { value: 3, message: "Minimun length is 3 character " },
                                        maxLength: { value: 15, message: "Minimun length is 15 character" }
                                    })} className={` h-[45px] w-full rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.name && "border-red"}`} type="text" placeholder="Product Name" />

                                {errors.name && <span className='text-red ms-2'>{errors.name.message}</span>}
                            </div>

                            {/* desc */}
                            <div className="my-5">
                                <textarea
                                    {...register("description", {
                                        required: { value: true, message: "This field is required" },
                                        minLength: { value: 8, message: "Minimun length is 8 character " },
                                    })}
                                    className={`w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ${errors.description && "border-red"} ps-3 text-[16px] text-gray2 `} type="text" placeholder="Product Description" />
                                {errors.description && <span className='text-red ms-2'>{errors.description.message}</span>}
                            </div>

                            {/* featiures */}
                            <div className="my-5">
                                <textarea
                                    {...register("features", {
                                        required: { value: true, message: "This field is required" },
                                        minLength: { value: 8, message: "Minimun length is 8 character " },
                                    })}
                                    className={`w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none ${errors.features && "border-red"} border ps-3 text-[16px] text-gray2 `} type="text" placeholder="Product key featured" />
                                {errors.features && <span className='text-red ms-2'>{errors.features.message}</span>}
                            </div>

                            {/* specification */}
                            <div className="my-5">
                                <textarea
                                    {...register("specification", {
                                        required: { value: true, message: "This field is required" },
                                        minLength: { value: 8, message: "Minimun length is 8 character " },
                                    })}
                                    className={`w-full resize-none pt-3 h-[112px] rounded-xl border-darkstone outline-none border ${errors.specification && "border-red"} ps-3 text-[16px] text-gray2 `} type="text" placeholder="Product Specification" />
                                {errors.specification && <span className='text-red ms-2'>{errors.specification.message}</span>}
                            </div>

                            {/* baseprice */}
                            <div className="my-5">
                                <input
                                    {...register("baseprice", {
                                        required: { value: true, message: "This field is required" },
                                    })}
                                    className={`w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.baseprice && "border-red"}`} type="number" placeholder="Base Price" />
                                {errors.baseprice && <span className='text-red ms-2'>{errors.baseprice.message}</span>}
                            </div>

                            {/* discountprice */}
                            <div className="my-5">
                                <input
                                    {...register("discountprice", {
                                        required: { value: true, message: "This field is required", },
                                    })}
                                    onChange={e => {
                                        clearErrors("discountprice")
                                        if (baseprice < +e.target.value) {
                                            setError("discountprice", { message: "Discount price should be less than the base price" })
                                        }
                                    }}
                                    className={`w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.discountprice && "border-red"}`} type="number" placeholder="Discounted Price" />
                                {errors.discountprice && <span className='text-red ms-2'>{errors.discountprice.message}</span>}
                            </div>

                            {/* stock */}
                            <div className="my-5">
                                <input
                                    {...register("stock", {
                                        required: { value: true, message: "This field is required" },
                                    })}
                                    className={`w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.stock && "border-red"}`} type="text" placeholder="Stock" />
                                {errors.stock && <span className='text-red ms-2'>{errors.stock.message}</span>}
                            </div>

                            {/* catrgory */}
                            <div className="my-5 w-full ">
                                <div className="w-full  px-3 rounded-xl border-darkstone  border">
                                    <select
                                        {...register("category", { required: { value: true, message: "This field is required" } })}
                                        value={selectedCategory}
                                        onChange={e => handleCategoryChange(e.target.value)}
                                        className=" text-[16px] outline-none text-gray2 h-[45px] w-full"
                                    >
                                        <option value="">Category</option>
                                        {categories.map(item => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.category && <span className='text-red ms-2'>{errors.category.message}</span>}
                            </div>


                            <div className="my-5 w-full ">
                                <div className="w-full  px-3 rounded-xl border-darkstone  border">
                                    <select
                                        {...register("subcategory", { required: { value: true, message: "This field is required" } })}
                                        value={selectedSubcategory}
                                        onChange={e => handleSubcategoryChange(e.target.value)}
                                        disabled={!selectedCategory}
                                        className=" text-[16px] outline-none text-gray2 h-[45px] w-full"
                                    >
                                        <option value="">Subcategory</option>
                                        {subcategories.map(item => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.subcategory && <span className='text-red ms-2'>{errors.subcategory.message}</span>}
                            </div>



                            {
                                selectedCategory === "Gear" && (
                                    <div className="my-5 ">

                                        <div className=" w-full px-3 rounded-xl border-darkstone  border ps-3">
                                            <select
                                                focusBorderColor="purple.500"
                                                value={selectedSubSubcategory}
                                                onChange={e => {
                                                    clearErrors("subsubcategory")
                                                    if (!e.target.value) {
                                                        setError("subsubcategory", { message: "Choose valid Subsubcategory" })
                                                    }
                                                    setSelectedSubSubcategory(e.target.value)
                                                }}
                                                className=" text-[16px] outline-none text-gray2 h-[45px] w-full"
                                                disabled={!selectedSubcategory} // Disable the subsubcategory select until a subcategory is selected
                                            >
                                                <option value="">SubSubcategory</option>
                                                {subSubcategories.map(item => (
                                                    <option key={item} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.subsubcategory && <span className='text-red ms-2'>{errors.subsubcategory.message}</span>}
                                    </div>
                                )
                            }
                            {/* size */}
                            <div className="my-5">
                                <input
                                    {...register("size", {
                                        required: { value: true, message: "This field is required" },
                                    })}
                                    className={`w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.size && "border-red"}`} type="text" placeholder="Size/Type" />
                                {errors.size && <span className='text-red ms-2'>{errors.size.message}</span>}
                            </div>

                            {/* color */}
                            <div className="my-5">
                                <input
                                    {...register("color", {
                                        required: { value: true, message: "This field is required" },
                                    })}
                                    className={` w-full h-[45px] rounded-xl border-darkstone outline-none border ps-3 text-[16px] text-gray2 ${errors.color && "border-red"} `} type="text" placeholder="Color" />
                                {errors.color && <span className='text-red ms-2'>{errors.color.message}</span>}
                            </div>


                            {/* available color */}
                            <div className="my-5  w-full  ">

                                <div className="w-full  px-3 rounded-xl border-darkstone  border">
                                    <select
                                        {...register("availablecolor", {
                                            required: { value: true, message: "This field is required" },
                                        })}
                                        className=" text-[16px] outline-none text-gray2 h-[45px] w-full"
                                    >
                                        <option selected value={""}>Available Color</option>
                                        <option value={"white"}  >White</option>
                                        <option value={"red"}  >Red</option>
                                        <option value={"black"}  >Black</option>
                                        <option value={"gray"}  >Gray</option>
                                    </select>
                                </div>
                                {errors.availablecolor && <span className='text-red ms-2'>{errors.availablecolor.message}</span>}
                                {/* <input type="text" placeholder="" /> */}
                            </div>
                            {/* buttons */}
                            <div className="my-5">
                                <button type="submit" className="h-[54px] rounded-xl text-white bg-darkgreen w-full">Create</button>
                            </div>
                            <div className="my-5">
                                <button
                                    type="button"
                                    onClick={e => window.verificationModal.showModal()}
                                    className="h-[54px] rounded-xl btn btn-neutral btn-outline w-full">Verify</button>
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

            {/* verification modal */}



            <dialog dialog id="verificationModal" className="modal " >
                <form method="dialog" className="modal-box  max-h-[777px] w-[656px]">
                    <h3 className="font-bold text-lg text-[24px] text-center pb-4 border-b gap-16 border-dashed border-b-black  ">Verification Details</h3>
                    <div className="mt-5 font-semibold px-2">

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Product Name:
                            {name ? <span className='text-base font-semibold'>{name}</span> : <span className='text-red text-base'>Please enter Name!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Desciption:
                            {description ? <span className='text-base font-semibold'>{description}</span> : <span className='text-red text-base'>Please enter Description!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Base Price:
                            {baseprice ? <span className='text-base font-semibold'>{baseprice}</span> : <span className='text-red text-base'>Please enter Baseprice!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Discount Price:
                            {discountprice ? <span className='text-base font-semibold'>{discountprice}</span> : <span className='text-red text-base'>Please enter Discountprice!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Stock:
                            {stock ? <span className='text-base font-semibold'>{stock}</span> : <span className='text-red text-base'>Please enter Stock!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Category:
                            {category ? <span className='text-base font-semibold'>{category}</span> : <span className='text-red text-base'>Please enter Category!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Sub Category:
                            {subcategory ? <span className='text-base font-semibold'>{subcategory}</span> : <span className='text-red text-base'>Please enter Subcategory!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Size/Type:
                            {size ? <span className='text-base font-semibold'>{size}</span> : <span className='text-red text-base'>Please enter size!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Color:
                            {color ? <span className='text-base font-semibold'>{color}</span> : <span className='text-red text-base'>Please enter color!</span>}
                        </div>

                        <div className='my-[15px] flex items-center gap-2 flex-wrap lg:text-[16px] max-xl:text-[18px]'>Available Color: {availablecolor ? <span className='text-base font-semibold'>{availablecolor}</span> : <span className='text-red text-base'>Please enter Availabecolor!</span>}
                        </div>

                        <div className="text-center">
                            <button type="submit" className="mt-3 bg-gray3 w-[285px] h-[54px] rounded-xl" >Close</button>
                        </div>
                    </div>

                </form>
            </dialog>





        </div>
    </div>
    )
}

export default UpdateProduct