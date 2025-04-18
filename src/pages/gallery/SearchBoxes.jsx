import { useState } from "react";
import ProBox from "./ProBox";

const SearchBoxes = ({ onFilterData }) => {
  return (
    <div className="porfolio__projects" data-aos="fade-up">
      {onFilterData.map((probox) => (
        <ProBox
          key={probox.id}
          title={probox.title}
          img={probox.img}
          description={probox.desc}
          techno1={probox.tech1}
          techno2={probox.tech2}
          code={probox.code}
          demo={probox.demo}
          icon={probox.icon}
          scrollY={`${probox.scrollY}%`}
          cName={probox.cName}
        />
      ))}
    </div>
  );
};

export default SearchBoxes;
