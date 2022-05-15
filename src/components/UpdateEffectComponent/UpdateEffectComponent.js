import { Button, Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { useUpdateEffect } from "../../hooks/useUpdateEffect";
import React, { useState } from "react";

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(0);
  useUpdateEffect(() => alert(count), count);
  return (
    <TabPane tabId="4">
      <Card>
        <CardHeader> {count}</CardHeader>
        <CardBody>
          <Button
            color="primary"
            onClick={() => setCount(prevCount => prevCount + 1)}
          >
            Increment And Alert
          </Button>
        </CardBody>
      </Card>
    </TabPane>
  );
};
export default UpdateEffectComponent;
