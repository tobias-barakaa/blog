import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Header from './components/Header';

export default function App() {
return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path='/sign-up' element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
</Routes>
</BrowserRouter>
)
}
