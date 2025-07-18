import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HiStar } from "react-icons/hi";
import React from 'react'

const CurrencyDropdown = ({currencies,currency,setCurrency,favorites,handleFavorite,title=""}) => {

   const isFavorite = (curr) => {
    return favorites.includes(curr);
  }
  console.log(currencies);
  return (
    <div className=''>
      <label className='text-gray-800 my-4  block ' htmlFor='title' id='title'>{title}</label>
      <div className=' relative'>
        
        
      
        <select name="text" value={currency} onChange={(e)=> setCurrency(e.target.value)} className='w-full focus:outline-none hover:bg-violet-50 focus:ring-2 focus:ring-indigo-300 shadow-sm px-8 py-4 rounded'>
          {/*render favorites */}
        {favorites.map((currency) => {
         return (<option value={currency} key={currency}>{currency}</option>)
       })}
            {currencies
            .filter((c) => !favorites.includes(c)) // Exclude favorites from the dropdown
            .map((currency) =>{
            return (<option value={currency} key={currency}>{currency}</option>)
           })}
      
        </select>
       <button onClick={()=>handleFavorite(currency)} className='absolute inset-y-0 right-0 pr-5 text-sm flex items-center'>

       {isFavorite(currency) ? <HiStar className='text-gray-400 text-lg'/> : <FontAwesomeIcon icon={faStar} className='text-sm'/>  }
       </button>
      </div>
    </div>
  )
}

export default CurrencyDropdown