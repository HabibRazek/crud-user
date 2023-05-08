import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserPage from './Components/UserPage';
import AddUser from './Components/AddUser';
import Edit from './Components/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edit/:id" element={<Edit />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
