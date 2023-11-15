

import { tr } from "date-fns/locale";
import { useState } from "react";
import TableRow from "./TableRow";
import { format, parseISO } from 'date-fns';

interface Data{
    name: string,
    birthDate: string,
    email: string,
    Profession: string 
}

export default function Table({data}:any){ 
    return(
        <div>
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-3  text-center">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3  text-center">
                        Profissão
                    </th>
                    <th scope="col" className="px-6 py-3  text-center">
                        Data Nascimento
                    </th>
                </tr>
            </thead>
            <tbody> 
                 { 
                 data.map((item:any) => (
                    <tr key={1}>
                        <td className="px-6 py-3  text-center">{item.name}</td>
                        <td className="px-6 py-3  text-center">{item.email}</td>
                        <td className="px-6 py-3  text-center">{item.profession}</td>
                        <td className="px-6 py-3  text-center">{item.birth_date}</td>
                    </tr>
                ))} 
                
            </tbody> 
        </table>
        </div>
    )
}