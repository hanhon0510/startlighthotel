import "./App.css";
import Home from "./components/home/Home";
import AddRoom from "./components/room/AddRoom";
import { ExistingRooms } from "./components/room/ExistingRooms";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditRoom from "./components/room/EditRoom";
function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
          </Routes>
        </Router>
      </main>
      {/* <AddRoom />
      <ExistingRooms /> */}
    </>
  );
}

export default App;
