import warning from "../../assets/images/warning.png"

const SomeErrorOccurred = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center text-center p-2">
     <img src={warning}/>
     <div className="text-4xl font-semibold text-red tracking-wider">Error occurred</div>
     <div className="text-xl mt-3 tracking-wide">Something went wrong, Please try refreshing the page.</div>
    </div>
  )
}
export default SomeErrorOccurred