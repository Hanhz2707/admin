import React, {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, Notifications, UserProfile} from '.';
import {useStateContext} from '../contexts/ContextProvider';


const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='Bottom'> 
    <button type='button' onClick={customFunc} style={{color}} className='relative text-2xl rounded-full p-3 hover:bg-slate-300'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const {activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color='blue' icon={<AiOutlineMenu/>}/>

      <div className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')} color='#03C9D7' icon={<FiShoppingCart/>}/>
        <NavButton title='Chat' customFunc={() => handleClick('chat')} color='#03C9D7' icon={<BsChatLeft/>}/>
        <NavButton title='Notifactions' customFunc={() => handleClick('notification')} color='#03C9D7' icon={<RiNotification3Line/>}/>
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span> {''}
              <span className='text-gray-400 font-bold ml-1 text-14'>Hanhz</span>
            </p>

            <MdKeyboardArrowDown className='text-14 text-gray-400'/>
          </div>
        </TooltipComponent>
        

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  );
};

export default Navbar;