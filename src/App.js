import "./App.css";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import ToggleComponent from "./components/ToggleComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <NavLink active href="/toggle">
              useToggle example
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
      <Routes>
        <Route path="/" element={<ToggleComponent />} />
      </Routes>
    </div>
  );
}

export default App;
