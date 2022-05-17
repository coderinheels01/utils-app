import {
  TabPane,
  CardBody,
  Card,
  Spinner,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from "reactstrap";
import { useFetch } from "../../hooks/shared/useFetch";
import React, { useCallback, useRef, useState } from "react";

const BASE_URL = "http://localhost:3001/testimonials";
const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [testimonials, error, loading, hasMore] = useFetch(
    BASE_URL,
    `?_page=${pageNumber}&_limit=20`,
    1000,
    pageNumber
  );
  const observer = useRef();
  const lastElementRef = useCallback(lastNode => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries && entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (lastNode) observer.current.observe(lastNode);
  }, []);

  return (
    <TabPane tabId="11">
      <Card>
        {error ? (
          <CardBody>
            {error.status} {error.statusText}
          </CardBody>
        ) : (
          <CardBody>
            <div>
              <UncontrolledAccordion defaultOpen="1" open={false}>
                {testimonials &&
                  testimonials.map((testimonial, index) => {
                    if (testimonials.length === index + 1) {
                      return (
                        <div ref={lastElementRef} key={index}>
                          <AccordionItem>
                            <AccordionHeader targetId={testimonial.id}>
                              <strong>
                                Testimonial with id {testimonial.id}
                              </strong>
                            </AccordionHeader>
                            <AccordionBody accordionId={testimonial.id}>
                              {testimonial.message}
                            </AccordionBody>
                          </AccordionItem>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index}>
                          <AccordionItem>
                            <AccordionHeader targetId={testimonial.id}>
                              <strong>
                                Testimonial with id {testimonial.id}
                              </strong>
                            </AccordionHeader>
                            <AccordionBody accordionId={testimonial.id}>
                              {testimonial.message}
                            </AccordionBody>
                          </AccordionItem>
                        </div>
                      );
                    }
                  })}
              </UncontrolledAccordion>
            </div>
          </CardBody>
        )}
      </Card>
      {loading ? <Spinner>Loading...</Spinner> : null}
    </TabPane>
  );
};
export default InfiniteScroll;
