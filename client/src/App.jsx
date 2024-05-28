import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

import Signin from './pages/Signin';
import PrivateRoute from './components/Private.Route';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';

export default function App() {
return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path='/sign-up' element={<Signup />} />
<Route path='/sign-in' element={<Signin />} />

<Route element={<PrivateRoute />} >
<Route path="/dashboard" element={<Dashboard />} />


</Route>
<Route element={<OnlyAdminPrivateRoute />} >
<Route path="/create-post" element={<CreatePost />} />


</Route>
</Routes>
<Footer />
</BrowserRouter>
)
}
