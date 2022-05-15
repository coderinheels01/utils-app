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
import { useLocalStorage, useSessionStorage } from "./hooks/useStorage";
import LocalStorageComponent from "./components/LocalStorageComponent";
import SessionStorageComponent from "./components/SessionStorageComponent";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [localHistory, setLocalHistory] = useLocalStorage("history", []);
  const [sessionHistory, setSessionHistory] = useSessionStorage("history", []);
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
                setLocalHistory([...localHistory, "useToggle example"]);
                setSessionHistory([...sessionHistory, "useToggle example"]);
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
                setLocalHistory([...localHistory, "useTimeout example"]);
                setSessionHistory([...sessionHistory, "useTimeout example"]);
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
                setLocalHistory([...localHistory, "useDebounce example"]);
                setSessionHistory([...sessionHistory, "useDebounce example"]);
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
                setLocalHistory([...localHistory, "useUpdateEffect example"]);
                setSessionHistory([
                  ...sessionHistory,
                  "useUpdateEffect example"
                ]);
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
                setLocalHistory([...localHistory, "useArray example"]);
                setSessionHistory([...sessionHistory, "useArray example"]);
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
                setLocalHistory([...localHistory, "usePrevious example"]);
                setSessionHistory([...sessionHistory, "usePrevious example"]);
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
                setLocalHistory([
                  ...localHistory,
                  "useStateWithHistory example"
                ]);
                setSessionHistory([
                  ...sessionHistory,
                  "useStateWithHistory example"
                ]);
              }}
            >
              useStateWithHistory example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "8"}
              onClick={() => {
                navigate("/local-storage");
                setActiveTab("8");
                setLocalHistory([...localHistory, "useLocalStorage example"]);
                setSessionHistory([
                  ...sessionHistory,
                  "useLocalStorage example"
                ]);
              }}
            >
              useLocalStorage example
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "9"}
              onClick={() => {
                navigate("/session-storage");
                setActiveTab("9");
                setLocalHistory([...localHistory, "useLocalStorage example"]);
                setSessionHistory([
                  ...sessionHistory,
                  "useSessionStorage example"
                ]);
              }}
            >
              useSessionStorage example
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
          <Route
            exact
            path="/local-storage"
            element={<LocalStorageComponent />}
          />
          <Route
            exact
            path="/session-storage"
            element={<SessionStorageComponent />}
          />
        </Routes>
      </TabContent>
    </div>
  );
};

export default App;
