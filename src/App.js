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
import { makeArrayFromStorage } from "./utils/makeArrayFromStorage";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [localHistory, setLocalHistory, removeLocalHistory] = useLocalStorage(
    "localHistory",
    []
  );
  const [
    sessionHistory,
    setSessionHistory,
    removeSessionHistory
  ] = useSessionStorage("sessionHistory", []);
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useToggle example")
                );
                setSessionHistory(
                  makeArrayFromStorage(sessionHistory, "useToggle example")
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useTimeout example")
                );
                setSessionHistory(
                  makeArrayFromStorage(sessionHistory, "useTimeout example")
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useDebounce example")
                );
                setSessionHistory(
                  makeArrayFromStorage(sessionHistory, "useDebounce example")
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useUpdateEffect example")
                );
                setSessionHistory(
                  makeArrayFromStorage(
                    sessionHistory,
                    "useUpdateEffect example"
                  )
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useArray example")
                );
                setSessionHistory(
                  makeArrayFromStorage(sessionHistory, "useArray example")
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "usePrevious example")
                );
                setSessionHistory(
                  makeArrayFromStorage(sessionHistory, "usePrevious example")
                );
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
                setLocalHistory(
                  makeArrayFromStorage(
                    localHistory,
                    "useStateWithHistory example"
                  )
                );
                setSessionHistory(
                  makeArrayFromStorage(
                    sessionHistory,
                    "useStateWithHistory example"
                  )
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useLocalStorage example")
                );
                setSessionHistory(
                  makeArrayFromStorage(
                    sessionHistory,
                    "useLocalStorage example"
                  )
                );
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
                setLocalHistory(
                  makeArrayFromStorage(localHistory, "useLocalStorage example")
                );
                setSessionHistory(
                  makeArrayFromStorage(
                    sessionHistory,
                    "useSessionStorage example"
                  )
                );
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
            element={
              <LocalStorageComponent
                localHistory={localHistory}
                removeLocalHistory={removeLocalHistory}
              />
            }
          />
          <Route
            exact
            path="/session-storage"
            element={
              <SessionStorageComponent
                sessionHistory={sessionHistory}
                removeSessionHistory={removeSessionHistory}
              />
            }
          />
        </Routes>
      </TabContent>
    </div>
  );
};

export default App;
