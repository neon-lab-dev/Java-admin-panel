import {useNavigate } from "react-router-dom"

const SomeErrorOccurred = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="text-9xl ">404</div>
      <div className="mt-7 text-2xl">The page you are looking for was not found</div>
      <button className="text-blue-500 mt-3" onClick={()=>{navigate("/")}} > Back to Home</button>
    </div>
  )
}
export default SomeErrorOccurred