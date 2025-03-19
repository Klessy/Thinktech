import { useState } from "react";

const Accordion = ({ faq }) => {
  const { question, answer } = faq;
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <h3 className="accordion-flush-heading-1">
        <button
          onClick={() => setShow(!show)}
          type="button"
          className=" accordion__btn"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span className="accordion__question">{question}</span>
          {!show && (
            <svg
              data-accordion-icon
              className="accordion__svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          {show && (
            <svg
              data-accordion-icon
              className="accordion__svg rotate"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h3>
      {show && (
        <div
          id="accordion-flush-body-1"
          className=""
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="accordion__answers">
            <p className="">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
