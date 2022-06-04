import './main.css';
import Header from '../Items/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Clients from '../Items/Clients/Clients';
import AddClient from '../Items/Clients/AddClient';
import EditClient from '../Items/Clients/EditClient';
import Cars from '../Items/Cars/Cars';
import AddCar from '../Items/Cars/AddCar';
import EditCar from '../Items/Cars/EditCar';
import Rentals from '../Items/Rent/Rentals';
import RentACar from '../Items/Rent/RentACar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Cars />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/addClient" element={<AddClient />} />
          <Route path='/editClient/:id' element={<EditClient />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path='/editCar/:id' element={<EditCar />} />
          <Route path='/rent' element={<Rentals />}></Route>
          <Route path='/rentACar/:id' element={<RentACar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;