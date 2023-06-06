import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";
import {useContext} from "react";
export default function Header (){
  const {user}=useContext(UserContext);

    return (
        <header className=' flex justify-between '>
        <Link to={'/'} className='flex items - center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-10 -rotate-90" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span className='font-bold text-xl'>AuraScapes</span>
        </Link>
        <div className='flex gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300'>
          <div>Anywhere</div>
          <div className='border border-l border-gray-300'></div>
          <div>My City</div>
          <div className='border border-l border-gray-300'></div>
          <div> My Places </div>
          <button className='bg-primary text-white p-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
           </div>
        
        <Link to ={ user? '/account':'/login'}className='flex items-center gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
        <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    
        
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
        
        
        </Link>
        
         </header>
    );
    
    }