import { useState } from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import { BreadCrumb } from "../../components";
import { projectData } from "../../data";
import ProBoxes from "./ProBoxes";

import "./gallery.css";
import SearchBoxes from "./SearchBoxes";
import { useTitle } from "../../hooks/useTitle";

const Gallery = () => {
  useTitle("Projects");
  const [projects, setProjects] = useState(projectData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const [search, setSearch] = useState("");

  // const [filteredData, setFilteredData] = useState([]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = projects.slice(firstPostIndex, lastPostIndex);

  // Filter Search Data
  const filterData = projects
    // .slice(0, 2)
    .filter((item) =>
      search.toString().toLowerCase() === ""
        ? item
        : item.category.toString().toLowerCase().includes(search)
    );

  return (
    <section className="projectPage__section">
      <BreadCrumb
        title={"Build Industry Standard Projects as you Learn"}
        path={"Project"}
      />
      <article className="projectPage-wrapper container">
        <div className="projectPage__con ">
          {search ? (
            <SearchBoxes onFilterData={filterData} />
          ) : (
            <ProBoxes projects={currentPosts} />
          )}

          <div className="">
            {search ? null : (
              <Pagination
                totalPosts={projects.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="search-bar">
          <Search
            projects={projects}
            search={search}
            setSearch={setSearch}
            // filteredData={filteredData}
            // setFilteredData={setFilteredData}
          />
        </div>
      </article>
    </section>
  );
};

export default Gallery;
