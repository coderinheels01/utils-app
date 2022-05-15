import { Button, Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { useArray } from "../../hooks/useArray";
import { useState } from "react";

export const defaultArray = [1, 2, 3, 4, 5, 6, 7];
const ArrayComponent = () => {
  const { array, push, remove, update, filter, set } = useArray(defaultArray);
  const [n, setN] = useState();
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);
  const [updateValue, setUpdateValue] = useState();
  const [updateIndex, setUpdateIndex] = useState(0);
  return (
    <TabPane tabId="5">
      <Card>
        <CardHeader>{array.join(",")}</CardHeader>
        <CardBody>
          <div>
            <input
              onChange={event => setValue(event.target.value)}
              style={{ marginRight: "10px" }}
              placeholder="Enter value"
            />
            <Button
              onClick={() => {
                value && push(value);
              }}
              color="primary"
            >
              Add Element{" "}
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px"
            }}
          >
            <label> index </label>
            <select
              style={{
                marginLeft: "5px",
                marginRight: "10px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
              onChange={event => setIndex(Number(event.target.value))}
            >
              {array &&
                array.length > 0 &&
                array.map((elem, i) => <option key={i}> {i} </option>)}
            </select>
            <Button
              onClick={() => {
                remove(index);
                setIndex(0);
              }}
              color="primary"
            >
              Remove
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px"
            }}
          >
            <input
              onChange={event => setUpdateValue(event.target.value)}
              style={{ marginRight: "10px" }}
              placeholder="Enter value"
            />
            <label> index </label>
            <select
              style={{
                marginLeft: "5px",
                marginRight: "10px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
              onChange={event => setUpdateIndex(Number(event.target.value))}
            >
              {array &&
                array.length > 0 &&
                array.map((elem, i) => <option key={i}> {i} </option>)}
            </select>
            <Button
              onClick={() => {
                update(updateIndex, updateValue);
              }}
              color="primary"
            >
              Update
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px"
            }}
          >
            <input
              onChange={event => setN(event.target.value)}
              style={{ marginRight: "10px" }}
              placeholder="Enter a number "
            />
            <Button
              onClick={() => {
                filter(elem => elem < n);
              }}
              color="primary"
            >
              Filter less than
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px"
            }}
          >
            <Button
              onClick={() => {
                set(defaultArray);
              }}
              color="primary"
            >
              Reset Array
            </Button>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default ArrayComponent;
