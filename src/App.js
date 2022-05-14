import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import ToggleComponent from "./components/ToggleComponent";
import TimeoutComponent from "./components/TimeoutComponent";
import DebounceComponent from "./components/DebounceComponent";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <NavLink active href="/">
              useToggle example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/timeout">
              useTimeout example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/debounce">
              useDebounce example
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
      <Routes>
        <Route path="/" element={<ToggleComponent />} />
        <Route exact path="/timeout" element={<TimeoutComponent />} />
        <Route exact path="/debounce" element={<DebounceComponent />} />
      </Routes>
    </div>
  );
}

export default App;
