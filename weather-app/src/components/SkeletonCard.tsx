import React from "react";

const SkeletonCard = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse w-[20rem] m-5">
      <div className="h-2.5 bg-sky-300 rounded-full  w-48 mb-4"></div>
      <div className="h-2 bg-sky-300 rounded-full  max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-sky-300 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-sky-300 rounded-full  max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-sky-300 rounded-full max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-sky-300 rounded-full max-w-[360px]"></div>
    </div>
  );
};

export default SkeletonCard;
