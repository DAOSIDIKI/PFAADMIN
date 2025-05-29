/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';

const InputPost = forwardRef(({ field,etudiant,required}, ref) => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={field} className='text-lg font-medium'>
                {field.toUpperCase()} {required && <span className='text-red-500'>*</span>}
            </label>
            <input
                type="text"
                name={field}
                id={field}
                ref={ref}
                className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-500'
                placeholder={etudiant? etudiant[field] : field.toUpperCase()}
                required={required ? true : false}
            />
        </div>
    );
});

export default InputPost;