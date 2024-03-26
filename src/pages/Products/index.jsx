import React, { useEffect, useState } from 'react'
import Searchbar from '../../components/Searchbar'
import downloadIcon from "../../assets/icons/download.svg"
import createProductIcon from "../../assets/icons/createProduct.svg"
import filterIcon from "../../assets/icons/filter.svg"
import leftCaret from "../../assets/icons/leftCaret.svg"
import rightCaret from "../../assets/icons/rightCaret.svg"
import deleteIcon from "../../assets/icons/delete.svg"
import { ALLPRODUCTS } from '../../assets/mock-data'
import useFilter from '../../assets/customhooks/useFilter'
import UpdateProduct from './UpdateProduct'
import { useNavigate } from 'react-router-dom'


const Products = () => {


  const [allProducts, setallProducts] = useState(ALLPRODUCTS)
  // 👇 for printing a data by filter or pagination 
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setlimit] = useState(9)
  const [searchFilter, setSearchFilter] = useState()


  // pagination pre and next functions
  const handleNext = () => {
    setPage(page === (Math.floor(allProducts.length / 9)) ? page : page + 1)
  }

  const handlePre = () => {
    setPage(page === 0 ? page : page - 1)
  }

  // navigate to add product
  const navigate = useNavigate()
  const handleAddProductNavigate = () => {
    navigate("/add-product")
  }
  const handleUpdateProductNavigate = () => {
    navigate("/update-product")
  }

  // 👇 filter data hook call 
  const filteredProductData = useFilter({ AllData: ALLPRODUCTS, filterFrom: ["id", "name", "category", "discountPrice", "stock"], inpValue: searchFilter })
  useEffect(() => {
    if (searchFilter) {
      setallProducts(filteredProductData)
    } else {
      setallProducts(ALLPRODUCTS)
    }
    setPage(0)
  }, [searchFilter])

  // 👇 for pagination 
  useEffect(() => {
    const temp = [];
    for (let i = page * limit; i < page * 9 + limit; i++) {
      if (allProducts[i]) {
        temp.push(allProducts[i]);
      }
    }
    setProducts(temp);
  }, [page, allProducts]);

  // return <UpdateProduct />
  return (
    <div className='bg-lightgray h-full w-full p-6 pb-11'>
      <div className="flex justify-between">
        <h1 className=' text-[32px] font-bold   text-black leading-[38.4px] '>All Products({ALLPRODUCTS.length})</h1>
        <button onClick={handleAddProductNavigate} type="button" className='bg-skyblue text-[14px] rounded-md text-white w-[192px] h-[50px] flex justify-center items-center gap-3' ><img src={createProductIcon} alt="" />Create Product</button>
      </div>

      <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">
        {/* searchbar and download btn */}
        <div className=" justify-between flex items-center ">
          {/* Searchbar */}
          <Searchbar setSerchFilter={setSearchFilter} placeholder={"Search products"} />

          <div className="flex items-center gap-3">

            {/* downloadIcon */}
            <button className=" bg-lightgray  rounded-[6px]">
              <img src={downloadIcon} alt="" />
            </button>

          </div>
        </div>


        <div className="overflow-x-auto">
          {
            allProducts.length > 0 ?

              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className='text-[14px] font-bold text-black'>ID</th>
                    <th className='text-[14px] font-bold text-black'>Name</th>
                    <th className='text-[14px] font-bold text-black text-center'>Image</th>
                    <th className='text-[14px] font-bold text-black '>Category</th>
                    <th className='text-[14px] font-bold text-black'>Discount price</th>
                    <th className='text-[14px] font-bold text-black'>Stock</th>
                    <th className='text-[14px] font-bold text-black text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    products.map(item => <tr>
                      <td className='text-[14px] font-semibold text-black'>#{item.id}</td>
                      <td className='text-[14px] font-semibold text-black'>{item.name}</td>
                      <td className='text-[14px] font-semibold text-black text-center'>
                        <div className="flex justify-center items-center">
                          <img className='h-[93px] rounded-lg min-w-[78px] w-[78px]' src={item.img} alt="" />
                        </div>
                      </td>
                      <td className='text-[14px] font-semibold text-black'>{item.category}</td>
                      <td className='text-[14px] font-semibold text-black'>₹{item.discountPrice}</td>
                      <td className='text-[14px] font-semibold text-black'>{item.stock}</td>
                      <td className='text-[14px] text-center font-semibold text-black'>
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={handleUpdateProductNavigate} type="button" class="btn  h-[38px] min-h-[38px] max-h-[38px]  btn-primary btn-outline">View</button>
                          <button><img src={deleteIcon} alt="" /></button>
                        </div>
                      </td>
                    </tr>)
                  }

                </tbody>

              </table>
              : <>
                <div className="p-8">
                  <h1 className="text-lg font-lato font-semibold">No records found</h1>
                </div>
              </>
          }
        </div>
        <hr />
        <div className="flex items-center justify-end   gap-3 mt-3">
          <p className="font-lato font-semibold text-grey  text-[14px]">Showing {products && ((allProducts.length === 0) ? 0 : (page === 0) ? 1 : page * limit)} - {products && (page * limit + products.length)} of {allProducts.length}</p>
          <div className=" border-borderColor  join ">
            <button disabled={page === 0} onClick={handlePre} className={`border-[0.6px] rounded-l-lg  p-2  px-3  bg-smoke ${page === 0 && "opacity-55"}`}><img src={leftCaret} /></button>
            <button disabled={page === (Math.floor(allProducts.length / 9))} onClick={handleNext} className={`border-[0.6px] rounded-r-lg p-2  px-3 bg-smoke ${page === (Math.floor(allProducts.length / 9)) && "opacity-55"} `}><img src={rightCaret} alt="" /></button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Products
