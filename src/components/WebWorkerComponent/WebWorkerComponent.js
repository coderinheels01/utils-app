import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Spinner,
  TabPane
} from "reactstrap";
import { fibonacciReducer } from "../../reducers/fibonacciReducer";
import { useCallback, useReducer, useState } from "react";
import {
  calculateFibonacciClear,
  calculateFibonacciError,
  calculateFibonacciRequest,
  calculateFibonacciSuccess
} from "../../actions/actions";

const WebWorkerComponent = () => {
  const [data, dispatch] = useReducer(fibonacciReducer);
  const [n, setN] = useState();
  const runWorker = useCallback(n => {
    const worker = new window.Worker("./fibonacciWorker.js");
    worker.postMessage({ num: n });
    worker.onerror = error => dispatch(calculateFibonacciError(error));
    worker.onmessage = e => {
      dispatch(calculateFibonacciSuccess(n, e.data));
      worker.terminate();
    };
  }, []);
  return (
    <TabPane tabId="10">
      <Card>
        <CardHeader>
          <div style={{ marginBottom: "10px", color: "#d63384" }}>
            <strong> Calculate Fibonacci</strong>{" "}
          </div>
          <br />
          <input
            placeholder="Enter a number"
            onChange={e => setN(Number(e.target.value))}
            style={{ marginRight: "15px" }}
          />
          <Button
            style={{ marginRight: "15px" }}
            color="info"
            onClick={() => {
              if (n < 2) {
                dispatch(
                  calculateFibonacciError(
                    "Please enter a number greater than 2"
                  )
                );
              } else {
                for (let i = 2; i <= n; i++) {
                  dispatch(calculateFibonacciRequest());
                  runWorker(i);
                }
              }
            }}
          >
            calculate
          </Button>
          <Button
            color="danger"
            onClick={() => dispatch(calculateFibonacciClear())}
          >
            clear
          </Button>
          <CardBody>
            {data && data.error ? (
              <Alert color="danger">{data.error}</Alert>
            ) : null}
            {data && data.loading ? (
              <Spinner color="info">{data.error}</Spinner>
            ) : null}
            <ListGroup>
              {data &&
                data.fibonacci &&
                data.fibonacci.length > 0 &&
                data.fibonacci.map((v, i) => (
                  <ListGroupItem key={i}>
                    Fibonacci for {v.n} is {v.data.result} <br />
                    time taken: {v.data.time} seconds
                  </ListGroupItem>
                ))}
            </ListGroup>
          </CardBody>
        </CardHeader>
      </Card>
    </TabPane>
  );
};

export default WebWorkerComponent;
