import React, { useState } from "react";
import useTimeout from "../../hooks/shared/useTimeOut";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  TabPane
} from "reactstrap";

const TimeoutComponent = () => {
  const [count, setCount] = useState("10:00");
  const [reset, clear] = useTimeout(() => setCount("00:00"), 10000);

  return (
    <TabPane tabId="2">
      <Card>
        <CardHeader>{count}</CardHeader>
        <CardBody>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => setCount(prevCount => prevCount + 1)}
            >
              Increment
            </Button>
            <Button color="primary" onClick={reset}>
              Reset Timer
            </Button>
            <Button color="primary" onClick={clear}>
              Clear Timer
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default TimeoutComponent;
