import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function QuestionSet() {
  const { subject } = useParams(); // Get the subject name from the URL
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch questions for the selected subject
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/questions/${subject}`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [subject]); // Re-fetch if the subject changes

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = () => {
    navigate('/dashboard'); // Redirect to Dashboard
  };

  return (
    <div className="flex-grow p-6 md:p-12 mx-4 lg:mx-60">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-[#d4e5dc] shadow-lg rounded-lg p-4 md:p-6 hover:bg-[#c8e0d3] hover:glow-effect transition duration-300 mx-4 md:mx-6 my-4 md:my-6"
          >
            <h2 className="text-xl font-semibold text-primary-color mb-2">{question.title}</h2>
            <p className="text-gray-700 mb-4">{question.text}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {question.options.map((option, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`q${index}`}
                    className={`accent-${option.isCorrect ? 'green' : 'red'}-500`}
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="col-span-1 sm:col-span-2 flex justify-center my-4">
        <button
          type="button"
          onClick={handleSubmit} // Call handleSubmit on click
          className="text-white bg-gradient-to-r from-[#d36831] via-[#e47a4a] to-[#f08f5c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#c75c25] shadow-lg shadow-[#e47a4a]/50 dark:shadow-lg dark:shadow-[#d36831]/80 font-medium rounded-lg text-sm px-6 py-3 text-center mb-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
