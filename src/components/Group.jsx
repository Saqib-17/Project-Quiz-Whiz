import React from 'react';
import science from '../assets/science.svg'
import business from '../assets/business.svg'
import arts from '../assets/arts.svg'
import studentIllustration from '../assets/Cool Kids - Study.png'

export default function Group() {
    return (
      <div className="bg-yellow-50 min-h-screen flex flex-col playwrite">
        {/* Header Section */}
        <header className="bg-yellow-100 border-b border-yellow-200 py-4 px-6 flex items-center justify-between">
          {/* "Hello User" is hidden on small screens */}
          <div className="flex items-center space-x-4 hidden md:flex">
            <div className="w-14 h-10 rounded-full flex-shrink-0 overflow-hidden">
              {/* Placeholder for image, if needed */}
            </div>
            <span className="text-primary-color font-medium text-lg">Hello User</span>
          </div>
          <h1 className="text-3xl font-bold text-orange-600">QuizWhiz</h1>
  
          {/* Search bar is hidden on small screens */}
          <div className="relative w-1/3 hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </span>
          </div>
        </header>
  
        {/* Sidebar (move to bottom on mobile, left on larger screens) */}
        <aside className="w-full md:w-20 md:py-6 bg-yellow-100 border-t border-yellow-200 flex md:flex-col items-center justify-center md:fixed md:top-0 md:bottom-0 md:left-0 md:right-auto bottom-0 fixed md:border-r">
          <nav className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-12">
            <a href="#" className="text-orange-600 hover:text-orange-700" onClick={() => window.location.href = 'index.html'}>
              <img src="assets/home.png" alt="Home" className="w-6 h-6 md:w-12 md:h-12" />
            </a>
  
            <a href="#" className="text-orange-600 hover:text-orange-700">
              <img src="assets/features.png" alt="Features" className="w-6 h-6 md:w-12 md:h-12" />
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-700">
              <img src="assets/solution.png" alt="Solution" className="w-6 h-6 md:w-12 md:h-12" />
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-700">
              <img src="assets/support.png" alt="Support" className="w-6 h-6 md:w-12 md:h-12" />
            </a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex justify-center lg:ml-16 p-6 mt-16 md:mt-0">
          <section className="text-center">
            <h2 className="text-2xl lg:text-5xl font-bold text-maroon lg:pt-24">Which Group are you in?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center lg:pt-36 pt-6">
              {/* Science */}
              <div className="col-span-1 bg-yellow-200 rounded-lg shadow-md p-10 hover:bg-yellow-300 transition text-center">
                <img src={business} alt="Science Icon" className="mx-auto w-20 h-20 mb-6" />
                <p className="text-2xl font-medium text-maroon">Commerce</p>
              </div>
  
              {/* Commerce (Middle Card) */}
              <div
                className="col-span-1 lg:col-span-2 bg-yellow-300 rounded-lg shadow-lg p-12 hover:bg-yellow-400 transition text-center cursor-pointer"
                onClick={() => window.location.href = 'subject.html'}>
                <img src={science} alt="Commerce Icon" className="mx-auto w-24 h-24 mb-6" />
                <p className="text-3xl font-bold text-maroon">Science</p>
              </div>
  
              {/* Arts */}
              <div className="col-span-1 bg-yellow-200 rounded-lg shadow-md p-10 hover:bg-yellow-300 transition text-center">
                <img src={arts} alt="Arts Icon" className="mx-auto w-20 h-20 mb-6" />
                <p className="text-2xl font-medium text-maroon">Arts</p>
              </div>
            </div>
          </section>
  
          {/* Bottom Right Illustration */}
          <div className="absolute bottom-4 right-4 hidden md:block">
  <img src={studentIllustration} alt="Student Illustration" className="w-80" />
</div>




        </main>
      </div>
    );
  }
