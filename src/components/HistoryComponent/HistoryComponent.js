import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabPane
} from "reactstrap";
import { useStateWithHistory } from "../../hooks/useStateWithHistory";

const HistoryComponent = () => {
  const pages = ["home", "clients", "accounts", "users"];
  const [
    value,
    setValue,
    { history, pointer, back, forward, go }
  ] = useStateWithHistory(pages[0]);
  return (
    <TabPane tabId="7">
      <Card>
        <CardHeader>
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <strong>current - </strong> {value}
          </div>
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <strong>location - </strong> {pointer}
          </div>
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            <strong> Bread Crumb </strong>
          </div>
          <div>
            <Nav>
              {history.map((val, i) => (
                <NavItem key={i}>
                  <NavLink
                    onClick={() => {
                      go(i);
                    }}
                    disabled={val === value}
                  >
                    {val} >
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </CardHeader>
        <CardBody>
          <Nav>
            {pages.map((page, i) => (
              <NavItem key={i}>
                <NavLink
                  onClick={event => {
                    setValue(event.currentTarget.innerHTML);
                  }}
                >
                  {page}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <Button style={{ marginRight: "10px" }} onClick={back}>
              {" "}
              &lt; Back
            </Button>
            <Button onClick={forward}> &gt; Forward</Button>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default HistoryComponent;
