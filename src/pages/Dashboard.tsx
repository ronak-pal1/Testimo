import PROFILE from "../assets/profile.jpeg";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="w-full h-screen bg-hero fixed top-0 left-0 bg- -z-30"></div>

      {/* dashboard */}
      <div className="w-full h-screen flex flex-col flex-1 overflow-y-hidden">
        {/* dashboard header */}
        <header className="flex flex-[0.1] justify-between items-center px-10 py-3 backdrop-blur-md">
          <div>
            <Link to={"/"} className="text-2xl font-bold">
              Testimon
            </Link>
          </div>

          <div className="flex">
            <img
              src={PROFILE}
              alt="profile"
              className="w-9 rounded-full border-2 border-blue-600"
            />
          </div>
        </header>
        <div className="flex flex-0.9 h-full">
          <div className="w-full h-full flex flex-1 flex-col items-center">
            <div className="flex h-full flex-[0.1] items-center py-3 rounded-xl space-x-5">
              {/* dashboard buttons */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-700 w-fit flex items-center justify-center rounded-full text-center p-3 cursor-pointer">
                  <AddCircleOutlineOutlinedIcon
                    fontSize="small"
                    htmlColor="white"
                  />
                </div>
                <p className="text-sm mt-2">Create</p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="bg-blue-400 w-fit flex items-center justify-center rounded-full text-center p-3 cursor-pointer">
                  <DashboardOutlinedIcon fontSize="small" htmlColor="white" />
                </div>
                <p className="text-sm mt-2">Testimonials</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-400 w-fit flex items-center justify-center rounded-full text-center p-3 cursor-pointer">
                  <BarChartOutlinedIcon fontSize="small" htmlColor="white" />
                </div>
                <p className="text-sm mt-2">Analytics</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-400 w-fit flex items-center justify-center rounded-full text-center p-3 cursor-pointer">
                  <AutoAwesomeOutlinedIcon fontSize="small" htmlColor="white" />
                </div>
                <p className="text-sm mt-2">Templates</p>
              </div>
            </div>

            {/* main dashboard */}
            <div className="flex flex-[0.9] flex-col bg-white w-11/12 h-full border border-blue-100 rounded-xl shadow-2xl shadow-blue-400 px-7 py-7">
              <div className="w-full flex flex-col flex-[1]  h-full">
                <div className="flex flex-[0.1] justify-between items-center border-b border-blue-200 pb-3">
                  <h1 className="text-2xl font-extralight">Create</h1>
                  <button className="bg-blue-700 text-white px-4 py-2 text-xs transition-transform hover:scale-110 rounded-md">
                    Create
                  </button>
                </div>

                <div className="mt-10 mx-3 space-y-8 flex flex-col flex-[0.9] h-full overflow-y-scroll ">
                  <div className="">
                    <p className="mb-3 text-xl font-light">Testimonial Name</p>
                    <input
                      type="text"
                      className="w-2/3 border border-slate-300 rounded-md placeholder:text-slate-500 px-4 py-2"
                      placeholder="Testimonial name e.g. Product1.testimonial"
                    />
                  </div>
                  <div className="">
                    <p className="mb-3 text-xl font-light">Description</p>
                    <textarea
                      className="border border-slate-300 rounded-md w-2/4 h-32 placeholder:text-slate-500 px-4 py-2 resize-none"
                      placeholder="Write a description for testimonial link"
                    />
                  </div>

                  <div className="">
                    <p className="mb-3 text-xl font-light">Image Upload</p>
                    <textarea
                      className="border border-slate-300 rounded-md w-2/4 h-32 placeholder:text-slate-500 px-4 py-2 resize-none"
                      placeholder="Write a description for testimonial link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
