'use client';

 
import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker"; 
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-br',ptBR)

import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export  default function  MyDatePicker({handleInputBirthDateChange}:any) {
    const [selectedDate, setSelectedDate] = useState( new Date() ); 

    return (
        <>
            <label htmlFor="birthDate" className="block text-lg font-bold leading-6 text-gray-900">Data Nascimento: </label>
            <div className="mt-2"> 
                <DatePicker    className=' w-72 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                selected={ selectedDate }
                onChange={(date:Date) => (setSelectedDate( date), handleInputBirthDateChange(date.toLocaleDateString())) }
                dateFormat="dd/MM/yyyy"  
                locale="pt-br" 
                />
             </div>
        
        </>
        
       
    );
   }