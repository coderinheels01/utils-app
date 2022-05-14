import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  TabPane
} from "reactstrap";
import useToggle from "../../hooks/useToggle";

export const ToggleComponent = () => {
  const [value, setToggle] = useToggle(false);
  return (
    <TabPane tabId="1">
      <Card>
        <CardHeader>{value.toString()}</CardHeader>
        <CardBody>
          <ButtonGroup>
            <Button color="primary" onClick={() => setToggle()}>
              Toggle
            </Button>
            <Button color="primary" onClick={() => setToggle(true)}>
              Make True
            </Button>
            <Button color="primary" onClick={() => setToggle(false)}>
              Make False
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default ToggleComponent;
