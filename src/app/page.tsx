import React from 'react';
import Image from 'next/image';

const page = () => {
  return(
     <div>
         <figure className="md:flex bg-orange-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
       <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.jpg" alt="" width="384" height="512"/>
       <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
         <blockquote>
           <p className="text-lg font-medium">
           Home is a place where comfort and love are found in every corner and every room feels familiar and safe. It is where memories are created and cherished over time as family and friends gather to share moments of joy and support. Home is not just a physical space but a feeling of belonging that brings warmth to the heart. It is where one feels at ease surrounded by the things and people that matter the most. Home is a sanctuary where one can relax unwind and simply be themselves without any fear or hesitation.
           </p>
         </blockquote>
         <figcaption className="font-medium">
           <div className="text-sky-500 dark:text-sky-400">
             Umaima house
           </div>
           <div className="text-slate-700 dark:text-slate-500">
             Abbasia Banglows Rahim yar khan near Social security Hospital
           </div>
         </figcaption>
       </div>
     </figure></div>
  )
}

export default page