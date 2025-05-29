import React from 'react'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

const InputSearch = ({name,placeholder,ref}) => {
  return (
    <div className='flex items-center gap-3 px-4 sm:px-2 bg-stone-300 h-full hover:outline-2 hover:outline-blue-400 rounded-sm'>
        <input type="text" name={name} className='border-0 outline-none' placeholder={placeholder=="Ville"? "Votre "+placeholder : placeholder} ref={ref}/>
    </div>
  )
}

export default InputSearch