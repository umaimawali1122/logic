import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top bar with orange bottom border */}
      <div className="bg-black text-white text-center py-4 border-b-4 border-orange-500">
        <h1 className="text-2xl font-bold tracking-wide">My Home Page</h1>
      </div>

      {/* Main content */}
      <div className="flex justify-center items-center py-12 px-4">
        <figure className="md:flex bg-white rounded-2xl p-8 md:p-0 shadow-2xl border-4 border-orange-500 transform transition duration-300 hover:scale-105 hover:shadow-lg">
          {/* Image */}
          <Image
            className="w-24 h-24 md:w-48 md:h-auto rounded-xl mx-auto border-4 border-white shadow-lg"
            src="/home.jpg"
            alt="Home Image"
            width="384"
            height="512"
          />
          {/* Text content */}
          <div className="pt-6 md:p-8 text-center md:text-left space-y-6">
            <blockquote>
              <p className="text-lg font-medium text-black leading-relaxed">
                Home is a place where comfort and love are found in every corner and every room feels familiar and safe. It is where memories are created and cherished over time as family and friends gather to share moments of joy and support. Home is not just a physical space but a feeling of belonging that brings warmth to the heart. It is where one feels at ease surrounded by the things and people that matter the most. Home is a sanctuary where one can relax unwind and simply be themselves without any fear or hesitation.
              </p>
            </blockquote>
            <figcaption className="font-medium text-black">
              <div className="text-xl text-black font-semibold">
                Umaima House
              </div>
              <div className="text-sm text-gray-700 mt-1">
                Abbasia Banglows Rahim Yar Khan near Social Security Hospital
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;
