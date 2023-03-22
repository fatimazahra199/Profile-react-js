import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';



function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center ">
      
      <div className='w-50 h-50 d-flex flex-column gap-4 justify-content-around align-items-center border p-3 my_card'>
      <h2> My-profile</h2>
      <ProfilePhoto />
      <FullName />
      <Address />
      <div className='nav-list d-flex w-25 gap-4 justify-content-center ' >
        <a href="https://github.com">
        <FaGithub />
      </a>
      <a href="https://facebook.com">
        <FaFacebook />
      </a>
      <a href="https://instagram.com">
        <FaInstagram />
      </a></div>
      </div>
    </div>
  );
}

export default App;
