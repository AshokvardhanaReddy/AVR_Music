import React from "react";

import progress_image from "../assets/work_progress.png";

const WorkPending = ({title}) => {
  return (
    <>
      <section className="h-full grid gap-2 place-items-center">
        <div className=" w-[40%] text-center sm:w-[80%] md:w-[60%]">
          <img src={progress_image} alt="work progress" />
          <h1 className=" text-xl font-black my-4 sm:text-base">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default WorkPending;
