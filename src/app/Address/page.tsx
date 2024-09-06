import React from 'react';
import Image from 'next/image';

const page = () => {
  return(
     <div>
         <figure className="md:flex bg-orange-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
       <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ad.PNG" alt="" width="384" height="512"/>
       <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
         <blockquote>
           <p className="text-lg font-medium">
            I live in Abbasia Banglows Rahim Yar Khan near social security hospital my hometown is peacful and beautiful I love to live there
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