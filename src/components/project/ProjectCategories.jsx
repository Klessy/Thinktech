import { useState } from "react";

import CategoryButton from "./CategoryButton";

const ProjectCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [filterToggle, setFilterToggle] = useState(false);

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };
  return (
    <section className="project-categories">
      <div className="desktop-filter">
        <button className="filter-btn" onClick={() => setFilterToggle()}>
          Filter by project
        </button>
        <div className="btn-container hide">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              onChangeCategory={() => changeCategoryHandler(category)}
              className={` ${
                activeCategory === category ? "active-btn" : "pro-btn"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mobile-filter">
        <button
          className="filter-btn"
          onClick={() => setFilterToggle((prev) => !prev)}
        >
          Filter by project
        </button>
        {filterToggle && (
          <div className="btn-container hide">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                onChangeCategory={() => changeCategoryHandler(category)}
                className={` ${
                  activeCategory === category ? "active-btn" : "pro-btn"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCategories;
