import logo from '../../assets/icon/logo.svg';
import { useState } from 'react';

const Sidebar = () => {

  const [selectedColor, setSelectedColor] = useState('color1');
  const products = ['Dashboard', 'Products', 'Order', 'User','Coupons'];
  const [logout, setlogout] = useState(false);

  const handleClick = (color) => {
    setSelectedColor(color); 
  };

  return (
    <aside className="w-[242px] border-r-black bg-white">
      <div className="flex justify-center">
        <img className="my-4" src={logo} />
        </div>
        
      {products.map((label, index) => (
          <div key={index} className=' justify-center items-center inline-flex'>
            
            <button
              className={`bg-${selectedColor === `color${index + 1}` ? 'primary' : 'white'} text-${selectedColor === `color${index + 1}` ? 'white' : 'black'} w-48 h-[50px] left-[24px] relative rounded-md text-neutral-800 text-sm font-semibold font-['Lato'] tracking-tight `}
              onClick={() => handleClick(`color${index + 1}`)}
              >
              <div className={`left-[65px] top-[16px] absolute text-${selectedColor === `color${index + 1}` ? 'white' : 'black'} text-sm font-semibold font-['Lato'] tracking-tight`}>{label}</div>
            </button>
          </div>
      ))}
      <div className='bg-[#E0E0E0] h-px my-[18px] '></div>
      <div className=' justify-center items-center inline-flex'>
        <button
          className={`bg-${logout?'primary':'white'} w-48 h-[50px] left-[24px] relative rounded-md text-neutral-800 text-sm font-semibold font-['Lato'] tracking-tight `} onClick={()=>{setlogout(!logout)}}
          >
          <div className={`left-[65px] top-[16px] absolute text-${logout?'white':'black'} text-sm font-semibold font-['Lato'] tracking-tight`}>Logout</div>
        </button>
      </div>
      <div className='bg-[#E0E0E0] h-px  my-[140px] '></div>
        
    
    </aside>
  );
};

export default Sidebar;