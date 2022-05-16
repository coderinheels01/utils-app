import {
  Card,
  CardBody,
  Nav,
  NavItem,
  TabPane,
  NavLink,
  CardHeader,
  Button
} from "reactstrap";
import { useSessionStorage } from "../../hooks/useStorage";

const SessionStorageComponent = () => {
  const [history, removeHistory] = useSessionStorage("history", []);
  return (
    <TabPane tabId="9">
      <Card>
        <CardHeader>
          <Nav>
            {history &&
              history.map((v, i) => (
                <NavItem key={i}>
                  <NavLink>{v}</NavLink>
                </NavItem>
              ))}
          </Nav>
        </CardHeader>
        <CardBody>
          <Button onClick={() => removeHistory()}> Clear Session Storage</Button>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default SessionStorageComponent;
