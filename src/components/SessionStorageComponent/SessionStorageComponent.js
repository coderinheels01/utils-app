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

const SessionStorageComponent = ({ sessionHistory, removeSessionHistory }) => {
  return (
    <TabPane tabId="9">
      <Card>
        <CardHeader>
          <Nav>
            {sessionHistory &&
              sessionHistory.map((v, i) => (
                <NavItem key={i}>
                  <NavLink>{v}</NavLink>
                </NavItem>
              ))}
          </Nav>
        </CardHeader>
        <CardBody>
          <Button onClick={() => removeSessionHistory()}>
            {" "}
            Clear Session Storage
          </Button>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default SessionStorageComponent;
