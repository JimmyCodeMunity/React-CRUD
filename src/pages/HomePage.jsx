import React from 'react';
import MainLayout from '../layout/MainLayout';

function HomePage() {
  return (
    <MainLayout>
        <div className='container bg-white border-gray-200 dark:bg-gray-900 w-full'>
            <h1>Home</h1>
        </div>
    </MainLayout>
  );
}

export default HomePage;
