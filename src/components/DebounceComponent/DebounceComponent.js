import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  TabPane,
  UncontrolledAccordion
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const BASE_URL = "http://localhost:3001/testimonials";
const DebounceComponent = () => {
  const [id, setId] = useState();
  const [testimonials, error, loading] = useFetch(
    BASE_URL,
    `${id && `?id=${id}`}`,
    1000,
    id
  );
  useEffect(() => {
    setId("");
  }, []);

  return (
    <TabPane tabId="3">
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <Card>
          <CardHeader>
            <input
              placeholder="Search by id"
              type="search"
              onChange={event => setId(event.target.value)}
              value={id}
            />
          </CardHeader>
          {error ? (
            <CardBody>
              {error.status} {error.statusText}
            </CardBody>
          ) : (
            <CardBody>
              <div>
                <UncontrolledAccordion defaultOpen="1" open={false}>
                  {testimonials &&
                    testimonials.map(testimonial => (
                      <AccordionItem key={testimonial.id}>
                        <AccordionHeader targetId={testimonial.id}>
                          <strong> Testimonial with id {testimonial.id}</strong>
                        </AccordionHeader>
                        <AccordionBody accordionId={testimonial.id}>
                          {testimonial.message}
                        </AccordionBody>
                      </AccordionItem>
                    ))}
                </UncontrolledAccordion>
              </div>
            </CardBody>
          )}
        </Card>
      )}
    </TabPane>
  );
};

export default DebounceComponent;
