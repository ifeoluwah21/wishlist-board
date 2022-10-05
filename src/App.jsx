
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Groceries from './pages/Groceries';
import GroceriesItemEdit from './pages/GroceriesItemEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to={"/groceries"} />} />

        <Route path='/groceries/*' element={<Groceries />} />

        <Route path='/groceries/:id' element={<GroceriesItemEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
