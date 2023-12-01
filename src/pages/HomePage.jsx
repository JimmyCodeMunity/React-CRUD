import React from 'react';
import MainLayout from '../layout/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <div className='container border-gray-200 dark:bg-gray-900 w-full mt-8 '>
        <div className="flex-row flex justify-between items-center">
          <div className="columns py-6 mt-6">
            <h2 className="text-white text-4xl my-10 font-bold">Welcome User</h2>
            <div>
            <button class="h-12 w-40 rounded-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
              Get Started
            </button>
            </div>
          </div>
          <div className="">
           <img src="https://unbounce.com/photos/Group-32284.png" className="w-90 overflow-hidden h-full" alt="" />
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
