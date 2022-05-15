import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Nav, NavItem, NavLink, TabContent } from "reactstrap";
import ToggleComponent from "./components/ToggleComponent";
import TimeoutComponent from "./components/TimeoutComponent";
import DebounceComponent from "./components/DebounceComponent";
import { useState } from "react";
import UpdateEffectComponent from "./components/UpdateEffectComponent";
import ArrayComponent from "./components/ArrayComponent";
import PreviousComponent from "./components/PreviousComponent";
import HistoryComponent from "./components/HistoryComponent";

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
                navigate("/");
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
          <NavItem>
            <NavLink
              active={activeTab === "4"}
              onClick={() => {
                navigate("/update-effect");
                setActiveTab("4");
              }}
            >
              useUpdateEffect example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "5"}
              onClick={() => {
                navigate("/array");
                setActiveTab("5");
              }}
            >
              useArray example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "6"}
              onClick={() => {
                navigate("/previous");
                setActiveTab("6");
              }}
            >
              usePrevious example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "7"}
              onClick={() => {
                navigate("/history");
                setActiveTab("7");
              }}
            >
              useStateWithHistory example
            </NavLink>
          </NavItem>
        </Nav>
      </Container>

      <TabContent activeTab={activeTab}>
        <Routes>
          <Route path="/" element={<ToggleComponent />} />
          <Route exact path="/timeout" element={<TimeoutComponent />} />
          <Route exact path="/debounce" element={<DebounceComponent />} />
          <Route
            exact
            path="/update-effect"
            element={<UpdateEffectComponent />}
          />
          <Route exact path="/array" element={<ArrayComponent />} />
          <Route exact path="/previous" element={<PreviousComponent />} />
          <Route exact path="/history" element={<HistoryComponent />} />
        </Routes>
      </TabContent>
    </div>
  );
};

export default App;
