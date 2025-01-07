import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const DisplayNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full  flex justify-between items-center sm:hidden ">
        <div className="flex items-center gap-5">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="text-3xl bg-[gray] hover:bg-[tomato] p-1 text-white rounded cursor-pointer"
          />
          <IoMdArrowRoundForward
            onClick={() => navigate(1)}
            className="text-3xl bg-[gray] hover:bg-[tomato] p-1 text-white  rounded cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6 ">
        <p className="bg-[white] text-[tomato] px-4 py-1 rounded">All</p>
        <p className="bg-[gray] text-white px-4 py-1 rounded">Music</p>
        <p className="bg-[gray] text-white px-4 py-1 rounded">Podcasts</p>
      </div>
    </>
  );
};

export default DisplayNav;
