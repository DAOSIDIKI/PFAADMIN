/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from 'react';
import Charts from './Charts';
import Bars from "./Bars"
const Rapports = () => {
    const [nbDonneesSensibles,setNbDonneesSensibles]=useState(0);
    const [nbTypeDonneesSensibles,setNbTypeDonneesSensibles]=useState(0)
    const [indice,setIndice]=useState(0)  
    return (
    <div className='flex-[0.85] p-3 relative max-h-[100dvh] overflow-scroll'>
            <h1 className='outfit text-2xl text-stone-700 font-bold pt-0.5'>Détection des Données Sensibles</h1>
            <div className="flex items-center gap-4 mt-1.5">
                <div className="flex flex-col align-left bg_gradient w-[24%] p-3 min-h-28 justify-between">
                    <div className='flex items-center justify-between'>
                        <h1 className='outfit text-md text-stone-400 font-bold pt-0.5'>Données Sensibles</h1>
                        <BsDatabaseFillAdd size={28} className='text-blue-600'/>
                    </div>
                    <span className='outfit text-md font-bold text-stone-400'>{nbDonneesSensibles}</span>
                    <span className="outfit text-md font-bold text-stone-400">{nbTypeDonneesSensibles} type(s) de données</span>
                </div>
                <div className="flex flex-col align-left justify-between bg_gradient w-[24%] p-3 min-h-28">
                    <div className='flex items-center justify-between'>
                        <h1 className='outfit text-md text-stone-400 font-bold pt-0.5'>Indices de Criticité</h1>
                        <MdOutlineSecurity size={28} className='text-blue-600'/>
                    </div>
                    <span className="outfit text-md font-bold text-stone-400">{indice}</span>
                    <span className="outfit text-md font-bold text-stone-400">{indice>50 ? "Très critique" : indice>30 ? "critique" : "Faible"}</span>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2 w-full">
                <div className="type flex-1/2">
                    <h1 className='outfit text-xl text-stone-700 font-bold '>Répartitions des types de données Sensibles</h1>
                    <Charts />
                </div>
                <div className="niveau flex-1/2">
                    <h1 className='outfit text-xl text-stone-700 font-bold '>Répartition par type de données</h1>
                    <Bars />
                </div>
            </div>
            <div className='niveau1 mt-1 max-h-30'>
                <h1 className='outfit text-xl text-stone-700 font-bold '>Niveau de risque</h1>
                <Bars />
            </div>
    </div>
  )
}

export default Rapports
