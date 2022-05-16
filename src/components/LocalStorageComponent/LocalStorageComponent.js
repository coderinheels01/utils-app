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

const LocalStorageComponent = ({ localHistory, removeLocalHistory }) => {
  return (
    <TabPane tabId="8">
      <Card>
        <CardHeader>
          <Nav>
            {localHistory &&
              localHistory.map((v, i) => (
                <NavItem key={i}>
                  <NavLink>{v}</NavLink>
                </NavItem>
              ))}
          </Nav>
        </CardHeader>
        <CardBody>
          <Button onClick={() => removeLocalHistory()}>
            Clear Local Storage
          </Button>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default LocalStorageComponent;
