import {React,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { categories } from '../Utils/constants';
import LeftNavMenuItem from './LeftNavMenuItem';

export default function LeftNav() {

    const navigate=useNavigate();
    const {selectCategories,setSelectCategories,mobileMenu} =useContext(AppContext);


    function clickHandler(name,type)
    {
        switch (type) {
            case "category":
                return setSelectCategories(name);
            case "home":
                return setSelectCategories(name);
            case "menu":
                return false;    
            default:
                break;
        }
    }

    function printCategories(item,index)
    {
        return(
            <>
                <LeftNavMenuItem 
                className={`${(selectCategories===item.name) ? "bg-white/[0.15]" : "" }`} 
                title={item.type==='home'? "Home" : item.name} 
                key={index} 
                icon={item.icon} 
                action={()=>{
                    clickHandler(item.name,item.type);
                    navigate('/');
                }}
                />

                {item.divider &&
                    (
                        <>
                            <hr className="my-5 border-white/[0.2]"/>
                        </>
                    )
                }
            </>
        );
    }

  return (
    <div className={`LEFT_NAV   md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-100 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""}`}>
        <div className="CATEGORIES   flex flex-col px-5 text-white">
            {categories.map(printCategories)}

            <hr className="my-5 border-white/[0.2]"/>
            <p className='text-white/[0.5] text-[15px] mb-3'>Clone By: Harsh Tripathi</p>
        </div>
        
    </div>
  )
}
