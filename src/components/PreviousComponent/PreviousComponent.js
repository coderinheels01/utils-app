import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabPane
} from "reactstrap";
import { usePrevious } from "../../hooks/usePrevious";
import { useState } from "react";

const PreviousComponent = () => {
  const pages = ["home", "clients", "accounts", "users"];
  const [value, setValue] = useState();
  const previousValue = usePrevious(value);
  return (
    <TabPane tabId="6">
      <Card>
        <CardHeader>
          <div>previous - {previousValue} </div>
          <div>current - {value} </div>
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
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default PreviousComponent;
