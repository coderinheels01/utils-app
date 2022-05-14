import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Nav, NavItem, NavLink, TabContent } from "reactstrap";
import ToggleComponent from "./components/ToggleComponent";
import TimeoutComponent from "./components/TimeoutComponent";
import DebounceComponent from "./components/DebounceComponent";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  return (
    <div className="App" style={{ padding: "50px" }}>
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={activeTab === "1"}
              onClick={() => {
                navigate("/toggle");
                setActiveTab("1");
              }}
            >
              useToggle example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "2"}
              onClick={() => {
                navigate("/timeout");
                setActiveTab("2");
              }}
            >
              useTimeout example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "3"}
              onClick={() => {
                navigate("/debounce");
                setActiveTab("3");
              }}
            >
              useDebounce example
            </NavLink>
          </NavItem>
        </Nav>
      </Container>

      <TabContent activeTab={activeTab}>
        <Routes>
          <Route path="/" element={<ToggleComponent />} />
          <Route exact path="/timeout" element={<TimeoutComponent />} />
          <Route exact path="/debounce" element={<DebounceComponent />} />
        </Routes>
      </TabContent>
    </div>
  );
};

export default App;
