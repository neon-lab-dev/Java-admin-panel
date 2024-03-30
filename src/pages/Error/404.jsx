import {useNavigate } from "react-router-dom"

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col justify-center items-center p-2">
      <div className="text-9xl ">404</div>
      <div className="mt-7 text-2xl text-center">The page you are looking for was not found</div>
      <button className="text-blue-500 mt-3 text-center" onClick={()=>{navigate("/")}} > Back to Home</button>
    </div>
  )
}

export default Error404
