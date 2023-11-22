import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
const Faq = () => {
  const SECTION12_API_URL = `${strapiUrl}/api/section12s?populate=%2A`


  const [faqList, setFaqList] = useState<{ [key: string]: string } | undefined>();
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  const [faqAddState, setFaqAddState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch(SECTION12_API_URL)
      .then((response) => response.json())
      .then((section12_data) => {
        const { FaqList } = section12_data.data[0].attributes;
        setFaqList(FaqList);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const handleFaqClick = (faq: string) => {
    setFaqAddState((prevState) => ({
      ...prevState,
      [faq]: !prevState[faq],
    }));
    setSelectedFaq(selectedFaq === faq ? null : faq);
  };

  return (
    <div className="technology-section py-16">
      <section className="heading">
        <h2>FAQ</h2>
      </section>

      <section className="px-4 py-8 gradient-top">
        <div className="flex flex-col space-y-4 py-4 relative">
                  <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="icons" />
          {faqList &&
            Object.keys(faqList).map((faq) => (
              <div className="flex flex-col px-28 relative" key={faq}>
                <div className="faq-card flex flex-col ">
                  <div className="flex flex-row w-full">
                    <div className="flex w-1/2">
                      <div
                        className="item"
                        style={{ fontSize: "1.4rem", cursor: "pointer" }}
                      >
                        {faq}
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end" onClick={() => handleFaqClick(faq)}>
                      <div className="ellipse-container">

                        <img
                          src="../assets/Ellipse.svg"
                          alt="Ellipse"
                          className="ellipse-image"
                        />

                       {((selectedFaq === faq) && (faqAddState[faq]!=null))  ?  (
                            <img
                            src="../assets/Minus.svg"
                            alt="Minus"
                            className="minus-image"
                          />
                        ) : (
                          <img
                            src="../assets/Add.svg"
                            alt="Add"
                            className="add-image"
                          />
                        )}


                      </div>
                    </div>
                  </div>
              
                    {selectedFaq === faq && (
                      <div className="flex w-full faq-description">
                        <div>{faqList[faq]}</div>
                      </div>
                    )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
