import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';
import AboutFacultyCard from '@/components/AboutFacultyCard/AboutFacultyCard';

export default function page() {

    return (
        <>
            <main className="w-full min-h-full flex flex-col p-5  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')]">
                <div className="w-full flex flex-col justify-center items-center mt-9">
                    <h1 className='text-3xl p-3 text-center  font-bold'>FACULTY AT THE SCHOOL</h1>
                    <h2 className=' text-center text-4xl mt-5 font-extrabold text-tcyan'>Pratibha Global School, dewas</h2>
                    <h3 className=' text-center text-2xl mt-2 font-semibold text-tcyan'>SESSION 2024-25</h3>
                    <div className='w-11/12 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 lg:gap-5 md:gap-4  lg:p-5 mt-2'>
                    <AboutFacultyCard img="/staff/AjeetSir.jpg" name="Ajeet Sir" post="Qualification: " />
                        <AboutFacultyCard img="/staff/AmrutaMam.jpg" name="Amruta Mam" post=" " />
                        <AboutFacultyCard img="\staff\Ankia Khute.jpg" name="Ankia Khute" post=" " />
                        <AboutFacultyCard img="\staff\Anuradha Mam.jpg" name="Anuradha Mam" post=" " />
                        <AboutFacultyCard img="\staff\Ashwini Mahajan.jpg" name="Ashwini Mahajan" post=" " />

                        <AboutFacultyCard img="\staff\DasMam.jpg" name="Das Mam" post="" />
                        <AboutFacultyCard img="\staff\Dipali Khede.jpg" name="Dipali Khede" post="" />
                        <AboutFacultyCard img="\staff\Harsha Khadikar.jpg" name="Harsha Khadikar" post="" />
                        <AboutFacultyCard img="\staff\Harshita Verma.jpg" name="Harshita Verma" post="" />
                        
                        <AboutFacultyCard img="\staff\Hemlata Mam.jpg" name="Hemlata Mam" post="" />
                        <AboutFacultyCard img="\staff\Jyotsana Kumawat.jpg" name="Jyotsana Kumawat" post="" />
                        <AboutFacultyCard img="\staff\Mam Madam.jpg" name="Mam Madam" post="" />
                        <AboutFacultyCard img="\staff\Neetakhute.jpg" name="Neeta khute" post="" />
                        <AboutFacultyCard img="\staff\Nidhi Raghuwanshi.jpg" name="Nidhi Raghuwanshi" post="" />
                        <AboutFacultyCard img="\staff\Pankaj Sir.jpg" name="Pankaj Sir" post="" />
                        
                        <AboutFacultyCard img="\staff\Payal Soni.jpg" name="Payal Soni" post="" />
                        <AboutFacultyCard img="\staff\Pragya Rao.jpg" name="Pragya Rao" post="" />
                        <AboutFacultyCard img="\staff\Pratibha gohil.jpg" name="Pratibha gohil" post="" />
                        <AboutFacultyCard img="\staff\Pratima Sinha.jpg" name="Pratima Sinha" post="" />
                         
                        <AboutFacultyCard img="\staff\Priti Mam.jpg" name="Priti Mam" post="" />
                        <AboutFacultyCard img="\staff\Rajeshwari Mam.jpg" name="Rajeshwari Mam" post="" />
                        <AboutFacultyCard img="\staff\Rakhi Mam.jpg" name="Rakhi Mam" post="" />
                        <AboutFacultyCard img="\staff\Ranu Sharma.jpg" name="Ranu Sharma" post="" />

                        <AboutFacultyCard img="\staff\Rasika Mam.jpg" name="Rasika Mam" post="" />
                        <AboutFacultyCard img="\staff\Rohit Sir.jpg" name="Rohit Sir" post="" />
                        <AboutFacultyCard img="\staff\Sachin Sir.jpg" name="Sachin Sir" post="" />
                        <AboutFacultyCard img="\staff\Sandesh Gupte.jpg" name="Sandesh Gupte" post="" />

                        <AboutFacultyCard img="\staff\Sapna Mam.jpg" name="Sapna Mam" post="" />
                        <AboutFacultyCard img="\staff\Sarvesh Sir.jpg" name="Sarvesh Sir" post="" />
                        <AboutFacultyCard img="\staff\Shweta Kumawat.jpg" name="Shweta Kumawat" post="" />
                        <AboutFacultyCard img="\staff\Sonu Mam.jpg" name="Sonu Mam" post="" />

                        <AboutFacultyCard img="\staff\Sonu Sharma.jpg" name="Sonu Sharma" post="" />
                        <AboutFacultyCard img="\staff\Suman Thakur.jpg" name="Suman Thakur" post="" />
                        <AboutFacultyCard img="\staff\Surbhi Sharma.jpg" name="Surbhi Sharma" post="" />
                        <AboutFacultyCard img="\staff\Yash Makwana.jpg" name="Yash Makwana" post="" />
                    </div>

                </div>
            </main>
        </>
    )
}