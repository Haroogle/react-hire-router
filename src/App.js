import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import "./styles.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  function hirePerson(person) {
    setHiredPeople([...hiredPeople, person]);
    navigate("/");
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={<PersonProfile hirePerson={hirePerson} />}
        />
      </Routes>
    </>
  );
}
