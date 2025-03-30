import { useState } from "react";
import ProBox from "./ProBox";

const ProBoxes = ({ projects, onFilterData }) => {
  return (
    <div className="porfolio__projects" data-aos="fade-up">
      {projects.map((probox) => (
        <ProBox
          key={probox.id}
          title={probox.title}
          img={probox.imgBox}
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

export default ProBoxes;
