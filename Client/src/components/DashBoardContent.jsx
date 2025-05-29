/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import {InputSearch,InputPost} from "."
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { oops } from '.';
import { GrNext } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import Modal from 'react-modal';
import axios from 'axios';
const DashBoardContent = () => {
    const taille=8;
    const [etudiants,setEtudiants]=useState([]);
    const [etudiantToUpdate,setEtudiantToUpdate]=useState(null);
    const [updating,setUpdating]=useState(false);
    const [form,setForm]=useState(false);
    const [currentPage, setCurrentPage]=useState(0)
    const CNE=useRef();
    const nom=useRef();
    const prenom=useRef();
    const tel=useRef();
    const email=useRef();
    const genre=useRef();
    const ville=useRef();
    const villeSearch=useRef();
    const prenomSearch=useRef();
    const nomSearch=useRef();
    const CNESearch=useRef();
    useEffect(() => {
        axios.get('http://localhost:8000/').then(resultat => {
            setEtudiants(resultat.data);
        }).catch(err => console.log(err));
    },[form]) 
    function stepBack(){
      setCurrentPage(prev => {
        if(prev>0)
          return prev-taille
        return 0
      })
    }
    function stepForward(){
      setCurrentPage(prev => {
        if(prev+taille<etudiants.length)
          return prev+taille
        return prev
      })
    }
    function getEtudiantToUpdate(id){
        axios.get(`http://localhost:8000/update-user/${id}`).then(data => {
          setEtudiantToUpdate(data.data);setForm(true);setUpdating(true)})
                                                          .catch(err => console.log(err));      
  }
  function handleUpdate(id){
    try{
      const datas={CNE:CNE.current.value,
          nom:nom.current.value ?? etudiantToUpdate.nom,
          prenom:prenom.current.value ?? etudiantToUpdate.prenom,
          email:email.current.value ?? etudiantToUpdate.email,
          tel:tel.current.value ?? etudiantToUpdate.tel,
          password:genre.current.value ?? etudiantToUpdate.password,
          ville:ville.current.value ?? etudiantToUpdate.ville};
          console.log(datas.nom)
        const response=axios.put(`http://localhost:8000/update/${id}`,datas)
        console.log(response)
    }
    catch{res => console.log(res)}
  }
    function handleDelete(id){
      if(confirm("Voulez vous vraiment supprimer cet utilisateur?")){
        console.log(id)
        axios.delete(`http://localhost:8000/delete/${id}`).then(
          data => console.log(data)
        ).catch(err => console.log(err));
      }
    }
    function handleSubmit(){
      try{
        const datas={CNE:CNE.current.value,
          nom:nom.current.value ?? nom.current.placeholder,
          prenom:prenom.current.value ?? prenom.current.placeholder,
          email:email.current.value ?? email.current.placeholder,
          tel:tel.current.value ?? tel.current.placeholder,
          password:genre.current.value ?? genre.current.placeholder,
          ville:ville.current.value ?? ville.current.placeholder};
          const response=axios.post("http://localhost:8000/",datas)
          alert('Utilisateur créé avec Succès')
      }
      catch{res => console.log(res)}
    }
    function handleSearch(event){
      event.preventDefault();
        const nom=nomSearch.current.value;
        const prenom=prenomSearch.current.value;
        const CNE=CNESearch.current.value;
        const ville=villeSearch.current.value;
        axios.post('http://localhost:8000/search/',{
          nom,prenom,CNE,ville
        }).then(result => setEtudiants(result.data))
          .catch(err => console.log(err))
    }
  return (
    <div className='flex-[0.85] p-3 relative'>
              <h1 className="outfit text-2xl text-stone-700 font-bold pt-0.5">Liste des Utilisateurs</h1>
              <div className="flex items-center justify-between mt-2">
              <form className="flex lg:w-auto items-center gap-2  my-8 max-w-min h-[2.5rem] outfit">
                  <InputSearch name="CNESearch" placeholder="CNE" ref={CNESearch}/>
                  <InputSearch name="nom" placeholder="Nom" ref={nomSearch}/>
                  <InputSearch name="prenom" placeholder="Prenom" ref={prenomSearch}/>
                  <InputSearch name="ville" placeholder="Ville" ref={villeSearch}/>
                  <button type="submit" className='bg-amber-600 p-2 text-stone-200 outfit cursor-pointer h-full' onClick={handleSearch}>Rechercher</button>
                  <Modal isOpen={form} style={{
        overlay:{
          background: "rgba(0, 0, 0, 0.7)"        
        },
        content: {
                scale:0.8,
                width:"80%",
                left:"11%",
                position:'absolute',
                 }}}>
                     <div className="w-full relative flex gap-3 items-start flex-col ">
                     <GrClose size={50} className='rounded-[50%] bg-gray-200 absolute right-[1px] top-[1px] p-2 hover:scale-105 cursor-pointer' onClick={() => {setForm(false);setUpdating(false)}}/>
                     <h1 className="font-semibold text-center text-3xl mt-2 w-full">Informations de l'utilisateur</h1>
                     <div className='flex gap-4 w-full '>
                     <div className='flex-1/2 flex flex-col gap-2'>
                        <InputPost field="CNE" ref={CNE} etudiant={updating && etudiantToUpdate}/>
                        <InputPost field="nom" ref={nom} etudiant={updating && etudiantToUpdate} required={true}/>
                        <InputPost field="prenom" ref={prenom} etudiant={updating && etudiantToUpdate} required={true}/>
                     </div>
                    <div className='flex-1/2 flex flex-col gap-2'>
                        <InputPost field="email" ref={email} etudiant={updating && etudiantToUpdate} required={true}/>
                        <InputPost field="password" ref={genre} etudiant={updating && etudiantToUpdate} required={true}/>
                        <InputPost field="ville" ref={ville} etudiant={updating && etudiantToUpdate}/>
                    </div>
                     </div>
                    </div>
                    <InputPost field="tel" ref={tel} etudiant={updating && etudiantToUpdate} required={true}/>
                    <div className='mt-8 w-full flex flex-col *:w-full gap-1.5'><button type="submit" className='p-2 outfit font-medium bg-green-500 text-2xl text-white min-w-[8rem]' onClick={updating? () => {handleUpdate(etudiantToUpdate.CNE);setUpdating(false)} : handleSubmit}>{updating? "Mettre à jour" : "Envoyer"}</button> <button type="button" className='p-2 outfit font-medium bg-red-500 text-2xl text-white'>Reinitialiser</button></div>
                  </Modal>
               </form>
               <button type="submit" className=' p-2 text-stone-200 outfit cursor-pointer flex items-center px-2 gap-1 bg-green-700' onClick={() => setForm(true)}><IoPersonAddSharp size={24} color='white'/><span>Nouveau</span></button>
              </div>
               <table className="gap-2 w-full border-spacing-1 outfit *:w-full  flex flex-col mt-3">
                <thead className='w-ful bg-amber-400'>
                    <tr className='w-full  flex items-center py-1.5'>
                        <th className='flex-1/6 text-left'>ID</th>
                        <th className='flex-1/6 text-left'>Nom</th>
                        <th className='flex-1/6 text-left'>Prenom</th>
                        <th className='flex-1/6 text-left'>Email</th>
                        <th className='flex-1/6 text-center'>Ville</th>
                        <th className="flex-1/6 text-right">Gestion</th>
                    </tr>
                </thead>
                {etudiants.length > 0 ? <tbody className='w-full *:w-full mt-4'>
                {
                    etudiants.slice(currentPage,currentPage+taille).map((item,index) => <tr key={index} className='flex py-1.5 border-t-2'>
                        <td className='flex-1/6'>{item.CNE}</td>
                        <td className='flex-1/6'>{item.nom}</td>
                        <td className='flex-1/6'>{item.prenom}</td>
                        <td className='flex-1/6'>{item.email}</td>
                        <td className='flex-1/6 text-center'>{item.ville}</td>  
                        <td className='flex-1/6 justify-end flex items-center gap-2'><AiFillDelete size={20} className='text-red-500' onClick={() => handleDelete(item.CNE)}/><MdModeEditOutline size={20} className='text-green-500' onClick={() => getEtudiantToUpdate(item.CNE)}/></td>  
                    </tr>)
                  }
                </tbody> 
                : 
                <div className="flex items-center justify-center flex-col gap-6 mt-20">
                  <img src={oops} alt="" className="scale-[1.3]"/>
                  <h1 className="outfit font-bold text-2xl">No results for this request</h1>
                </div>
                }
              </table>
              {etudiants.length > taille && <div className="flex items-center justify-center gap-4 mt-10">{currentPage-taille>=0 && <button className='bg-amber-400 border-none outline-0 rounded-sm p-1'  onClick={stepBack}><IoIosArrowBack size={24} className='font-bold'/></button>}{etudiants.length-currentPage-taille  > 0 && <button className='bg-amber-400 border-none outline-0 rounded-sm p-1' onClick={stepForward}><GrNext size={24} className='font-bold' /></button>}</div>}
    </div>
  )
}

export default DashBoardContent
