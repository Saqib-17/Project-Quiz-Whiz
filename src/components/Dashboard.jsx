import React from "react";
import SidebarHeader from './SidebarHeader';
import Feedbacksvg from '../assets/Feedback.svg'

const QuizWhiz = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col playwrite">
      {/* Header Section */}
     <SidebarHeader/>
      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 mx-4 lg:mx-60">
        <section>
          <div className="flex-1 flex flex-col space-y-8 p-6 lg:pl-12">
            {/* Score Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-lg shadow-md">
              <div className="col-span-1 lg:col-span-2 flex flex-col bg-[#d4e5dc] rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Your Score</h2>
                  <p className="text-2xl font-bold">08/10</p>
                </div>
                <div className="flex justify-center space-x-12 mt-6">
                  <div className="flex flex-col items-center space-y-4 text-xl font-bold">
                    <p>Right</p>
                    <p className="lg:text-4xl text-2xl">8</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4 text-xl font-bold">
                    <p>Wrong</p>
                    <p className="lg:text-4xl text-2xl">2</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#d4e5dc] rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold text-center">Leaderboard</h2>
                <ul className="mt-4 space-y-2">
                  <li>1. Faisal Ahmed</li>
                  <li>2. Shahidul Sakib</li>
                  <li>3. Lazima Mishfa</li>
                  <li>4. Batman</li>
                  <li className="font-bold text-maroon">• You are on 10th</li>
                </ul>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-lg shadow-md">
              <div className="bg-[#d4e5dc] rounded-lg shadow-md p-6 text-center">
                <h2 className="text-lg font-bold">Your Growth</h2>
                <img
                  className="w-[180px] mx-auto"
                  src="#"
                  alt="Coming soon"
                />
              </div>
              <div className="bg-[#d4e5dc] rounded-lg shadow-md p-6 text-center">
                <h2 className="text-lg font-bold">Number of Attempts</h2>
                <p className="text-2xl lg:text-4xl font-bold mt-4 pt-4 lg:pt-10">20</p>
              </div>
              <div className="bg-[#d4e5dc] rounded-lg shadow-md p-6 lg:py-20">
                <h2 className="text-lg font-bold text-center">Feedback</h2>
                <p className="mt-4 italic text-center">"Push your limits – success follows hard work!"</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 hidden md:block">
            <img
              src={Feedbacksvg}
              alt="Student Illustration"
              className="w-60"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizWhiz;