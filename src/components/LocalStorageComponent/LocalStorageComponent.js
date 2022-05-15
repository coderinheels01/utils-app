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
import { useLocalStorage } from "../../hooks/useStorage";

const LocalStorageComponent = () => {
  const [history, removeHistory] = useLocalStorage("history", []);
  return (
    <TabPane tabId="8">
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
          <Button onClick={() => removeHistory()}> Clear Local Storage</Button>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default LocalStorageComponent;
