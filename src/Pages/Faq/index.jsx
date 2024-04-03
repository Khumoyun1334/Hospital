import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        className={`${
          isOpen ? "bg-red-800 " : "bg-[#F5F7FB]"
        } accordion__button w-full transition-all   p-3 rounded-full text-left px-9`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      {isOpen && (
        <div className="accordion__content text-[13px] transition-all w-[96%] mt-4 m-auto font-light">
          {content}
        </div>
      )}
    </div>
  );
}

// Veb-saytning asosiy komponenti
function Faq() {
  return (
    <div className="App bg-white p-7 pb-16 rounded-[8px]">
      <div>
        <p className="text-[22px] text-[#2e4765] font-semibold">Faq</p>
      </div>
      <div className="mt-7">
        <Accordion
          title="Example 0"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
      </div>
      <div className="mt-5">
        <Accordion
          title="Example 1"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
      </div>
      <div className="mt-5">
        <Accordion
          title="Example 2"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
      </div>
      <div className="mt-5">
        <Accordion
          title="Example 3"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
      </div>
      <div className="mt-5">
        <Accordion
          title="Example 4"
          content="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
      </div>
      {/* Boshqa accordionlar */}
    </div>
  );
}

export default Faq;
