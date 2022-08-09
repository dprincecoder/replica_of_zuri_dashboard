import React, { useState, useRef, useEffect } from "react";
import "./faqs.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function Faqs() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const faqsData = [
    {
      question: "Would I have to pay to enroll for the training?",
      answer:
        "No, the program is completely free thanks to Ingressive For Good",
    },
    {
      question: "What are the things I would need to participate?",
      answer:
        "You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship.",
    },
    {
      question: "What happens if i join and I’m not active?",
      answer:
        "Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long",
    },
    {
      question:
        "Can I switch from the part-time track to full-time and vice versa?",
      answer:
        "Unfortunately, no, you cannot switch from part-time to full-time and vice-versa",
    },
    {
      question: "Will I get paid?",
      answer:
        "We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical.",
    },
  ];

  return (
    <>
      <div className="acc">
        <div className="acc-section">
          <div className="acc-container">
            {faqsData.map((item, index) => {
              return (
                <div className='acc-br' key={index}>
                  <div
                    className="acc-wrap"
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <h1 className="acc-h1">{item.question}</h1>
                    <span>
                      {clicked === index ? <CloseIcon /> : <AddIcon />}
                    </span>
                  </div>
                  {clicked === index ? (
                    <div className="acc-dropdown">
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
