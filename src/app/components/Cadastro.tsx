'use client'
import { useState } from "react";
import MyDatePicker from "./Datepicker";

export default function Cadastro({atualiza}:any){
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    
    const handleInputNameChange = (e:any) => {
        setName(e.target.value);
     };

     const handleInputEmailChange = (e:any) => {
        setEmail(e.target.value);
     };
     const handleInputProfessionChange = (e:any) => {
        setProfession(e.target.value);
     };
     const handleInputBirthDateChange = (e:any) => {
        setBirthDate(e);
     };

    const handleSubmit = (e:any) => {
        e.preventDefault();  
        const data = {
            id: Math.floor(Math.random() * 65536),
            name: name,
            birth_date:  birthDate != "" ? birthDate : new Date().toLocaleDateString(),
            email: email,
            profession: profession
        }
         
        atualiza(data);
     };

    return(

        
        <section className='w-3/4 border border-black rounded-xl pt-8 my-8'>
                <h1 className='text-center text-6xl'>Cadastro</h1>
                <div className='flex justify-center mt-5 '>
                 <hr className='border border-solid h-1 bg-black rounded-full w-4/5' />
                </div> 
                <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 m-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-lg font-bold leading-6 text-gray-900">Nome: </label>
                        <div className="mt-2">
                            <input type="text" onChange={handleInputNameChange}  name="name" id="name" autoComplete="given-name" placeholder='Nome' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" />
                        </div>
                    </div> 
                    <div className="sm:col-span-2">
                         <MyDatePicker handleInputBirthDateChange={handleInputBirthDateChange} />
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-lg font-bold leading-6 text-gray-900">Email: </label>
                        <div className="mt-2">
                            <input type="email" onChange={handleInputEmailChange} name="email" id="email" autoComplete="given-name" placeholder='Digite o Email' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" />
                        </div>
                    </div> 
                    <div className="sm:col-span-2">
                        <label htmlFor="Profession" className="block text-lg font-bold leading-6 text-gray-900">Profissão: </label>
                        <div className="mt-2">
                            <select id="Profession" onChange={handleInputProfessionChange} name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2">
                                <option> - Selecione - </option>
                                <option>Arquiteto de redes</option>
                                <option>Analista de big data</option> 
                                <option>Analista de testes de softwares</option>
                                <option>Ciência de dados</option> 
                                <option>Desenvolvimento de games</option>
                                <option>Desenvolvedor mobile</option>
                                <option>Engenharia de software </option>
                                <option>Programador web</option> 
                                <option>Segurança da informação</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 sm:col-span-6'>
                         <hr className='border border-solid h-1 bg-black rounded-full w-full' />
                    </div> 
                    <div className="sm:col-span-6 mt-2 flex items-center justify-end gap-x-6"> 
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
                    </div>
                </form>
             </section>
    )
}