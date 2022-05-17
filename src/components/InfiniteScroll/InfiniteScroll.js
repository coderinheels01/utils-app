import { TabPane, CardBody, Card, Spinner } from "reactstrap";
import { useFetch } from "../../hooks/shared/useFetch";
import React, { useCallback, useRef, useState } from "react";

const BASE_URL = "http://localhost:3001/testimonials";
const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [testimonials, loading, hasMore, error] = useFetch(
    BASE_URL,
    `?_page=${pageNumber}&_limit=20`,
    1000,
    pageNumber
  );
  const observer = useRef();
  const lastElementRef = useCallback(
    lastNode => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries && entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (lastNode) observer.current.observe(lastNode);
    },
    [loading, hasMore]
  );

  return (
    <TabPane tabId="11">
      <Card>
        {error ? (
          <CardBody>
            {error.status} {error.statusText}
          </CardBody>
        ) : (
          <CardBody>
            <div style={{ height: "calc(100vh - 200px)", overflow: "scroll" }}>
              {testimonials &&
                testimonials.map((testimonial, index) => {
                  if (testimonials.length === index + 1) {
                    return (
                      <div
                        ref={lastElementRef}
                        key={index}
                        style={{
                          marginLeft: "100px",
                          marginRight: "100px"
                        }}
                      >
                        <div style={{ backgroundColor: "#D3D3D3" }}>
                          <strong>Testimonial with id {testimonial.id}</strong>
                        </div>
                        <p> {testimonial.message}</p>
                        <hr />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        style={{
                          marginLeft: "100px",
                          marginRight: "100px"
                        }}
                      >
                        <div style={{ backgroundColor: "#D3D3D3" }}>
                          <strong>Testimonial with id {testimonial.id}</strong>
                        </div>
                        <p> {testimonial.message}</p>
                        <hr />
                      </div>
                    );
                  }
                })}
            </div>
          </CardBody>
        )}
      </Card>
      {loading ? <Spinner>Loading...</Spinner> : null}
    </TabPane>
  );
};
export default InfiniteScroll;
