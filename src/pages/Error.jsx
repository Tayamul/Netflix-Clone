import React from "react";

const Error = () => {
  return (
    <>
      <div className="w-full h-screen text-red-800">
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-5xl md:text-8xl font-bold">404</h1>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">Page Not Found</h1>
        </div>
      </div>
    </>
  );
};

export default Error;
