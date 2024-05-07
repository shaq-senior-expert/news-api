import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <div className="flex max-w-2xl flex-col items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
          alt="tailwindcss Contruction"
        />
        <h1 className="mb-3 text-center text-xl font-bold text-purple-600">
          Under Construction
        </h1>
        <p className="text-center text-gray-600">
          The Page you are looking for is currently under construction and will
          be back soon.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
