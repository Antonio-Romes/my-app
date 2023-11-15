'use client'
import Table from "./components/Table";
import Cadastro from "./components/Cadastro"; 
import { useState } from "react";

interface Data{
    id: number,
    name: string,
    birthDate: string,
    email: string,
    Profession: string 
}


export default function Home() {

    const [data, setDados] = useState<Data[]>([]);

    const atualiza = (valor:any) =>{
        const sa = data;
        setDados([...data,valor]);
    }
    
  return (
     <main className='h-screen w-full bg-zinc-200'>
        <div className='w-full flex justify-center'>
             <Cadastro atualiza={atualiza}/>
        </div>
        <div className='w-full'>
            <div className="relative overflow-x-auto m-3">
               <Table data={data} />
            </div>
        </div>
     </main>
  )
}
