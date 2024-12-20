import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import Group from './components/Group';
import Subject from './components/Subject';  // Import the Subject component
import QuestionSet from './components/QuestionSet';  // Import the QuestionSet component

function App() {
  return (
    <Router>
      <>
        {/* Conditionally render the Header based on the route */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signupform" element={<Header />} />
        </Routes>

        {/* Render all the routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signupform" element={<SignupForm />} />
          <Route path="/group" element={<Group />} />
          <Route path="/subject" element={<Subject />} /> {/* Route for Subject */}
          <Route path="/questionset/:subject" element={<QuestionSet />} /> {/* Dynamic Route for QuestionSet */}
        </Routes>

        {/* Always render AboutUs and Footer */}
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
