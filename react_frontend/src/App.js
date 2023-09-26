import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import SignUpForm from './components/login/signup.js';
import SignInForm from './components/login/signin.js';
import UserTrainingTable from './components/UserTrainingTable/UserTrainingTable';
import SkillsOfUser from './components/UserTrainingTable/userSkills';
// import UserSkillDetails from './components/UserTrainingTable/userSkills';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path='/user' element={<UserTrainingTable />}/>
          {/* <Route path = 'skills' element={<UserSkillDetails/>}/> */}
          <Route path='/skillsByUser' element={<SkillsOfUser/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
