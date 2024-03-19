import logo from '../../assets/icon/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate= useNavigate();

  const [selectedColor, setSelectedColor] = useState('color1');
  const products = ['Dashboard', 'Products', 'Order', 'User','Coupons'];
  const [logout, setlogout] = useState(false);

  const handleClick = (color,label) => {
    setSelectedColor(color);
     navigate('/'+label);
  };

  return (
    <aside className="lg:min-w-[242px] max-w-[242px] md:min-w-[200px] sm:min-w-[200px] border-r-black bg-white ">
      <div className="flex justify-center">
        <img className="my-4" src={logo} />
        </div>
        
      {products.map((label, index) => (
          <div key={index} className=' justify-center items-center flex '>
            <button
              className={`bg-${selectedColor === `color${index + 1}` ? 'primary' : 'white'} w-5/6 h-[50px] relative rounded-md text-neutral-800 text-sm font-semibold font-['Lato'] tracking-tight `}
              onClick={() => handleClick(`color${index + 1}`,label)}
              >
              
              <div className={` text-${selectedColor === `color${index + 1}` ? 'white' : 'black'}  text-sm font-semibold font-['Lato'] tracking-tight`}>{label}</div>
            </button>
          </div>
      ))}
      <div className='bg-[#E0E0E0] h-px my-[18px]'></div>
      <div className=' justify-center items-center flex'>
        <button
          className={`bg-${logout?'primary':'white'} w-5/6 h-[50px] relative rounded-md text-neutral-800 text-sm font-semibold font-['Lato'] tracking-tight `} onClick={()=>{setlogout(!logout)}}
          >
          <div className={`text-${logout?'white':'black'} text-sm font-semibold font-['Lato'] tracking-tight`}>Logout</div>
        </button>
      </div>
      <div className='bg-[#E0E0E0] h-px  my-[140px] '></div>
        
    
    </aside>
  );
};

export default Sidebar;