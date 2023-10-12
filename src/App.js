import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/Index.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Workpage from './pages/Workpage';
import Reviewspage from './pages/Reviewspage';
import Pricingpage from './pages/Pricingpage';
import Collabpage from './pages/Collabpage';
import Educationpage from './pages/Educationpage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SIgnUpPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="/work" element={<Workpage />}></Route>
          <Route path="/reviews" element={<Reviewspage />}></Route>
          <Route path="/pricing" element={<Pricingpage />}></Route>
          <Route path="/collab" element={<Collabpage />}></Route>
          <Route path="/education" element={<Educationpage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
