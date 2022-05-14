import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  UncontrolledAccordion
} from "reactstrap";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import useToggle from "../../hooks/useToggle";

const DebounceComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState();
  const [id, setId] = useState("");
  const [value, toggleValue] = useToggle(false);

  async function fetchTestimonial() {
    toggleValue();
    const response = await fetch(
      `http://localhost:3001/testimonials${id && `?id=${id}`}`
    );
    if (!response.ok) setError(response);
    else {
      if (error) setError(null);
      const testimonials = await response.json();
      if (testimonials.length <= 0)
        setError({ status: "404", statusText: "Not Found" });
      setTestimonials(testimonials);
    }
    toggleValue();
  }

  useDebounce(fetchTestimonial, 1000, id);

  useEffect(() => {
    fetchTestimonial();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {value ? (
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
                  {testimonials.map(testimonial => (
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
    </>
  );
};

export default DebounceComponent;
