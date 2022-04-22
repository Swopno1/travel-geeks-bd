import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Signin from './Pages/Signin/Signin';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import RequireAdminAuth from './components/RequireAuth/RequireAdminAuth';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <>
      <Header></Header>
      <main className='min min-h-screen'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/about' element={<AboutMe></AboutMe>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
          <Route path='/contact' element={<ContactMe></ContactMe>} />
          <Route path='/signin' element={<Signin></Signin>} />
          <Route path='/register' element={<Register></Register>} />
          <Route
            path='/services/add'
            element={
              <RequireAdminAuth>
                <AddService></AddService>
              </RequireAdminAuth>
            }
          ></Route>
          <Route
            path='/services/:serviceID'
            element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>
            }
          />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
