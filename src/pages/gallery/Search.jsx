import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import ProBox from "./ProBox";
import ProBoxes from "./ProBoxes";

const Search = ({ projects, search, setSearch }) => {
  // const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = projects.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  // const category = searchParams.get("category");

  console.log(searchParams);

  const handleSearch = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setSearch(category);
  };

  const handleEnterKey = () => {
    if (e.key === "Enter") {
      window.open(projects[search].category);
    }
  };

  const filterData = (id) => {
    const lowercasedValue = id.toLowerCase().trim();
    if (!lowercasedValue) {
      setFilteredData([]);
    }
    const filtered = projects.filter((item) =>
      item.toString().toLowerCase().includes(lowercasedValue)
    );
    setFilteredData(filtered);
  };

  return (
    <aside className="project__sidebar">
      <section className="widget_search">
        <h2 className="widget-title">Search Here - {search} </h2>
        <div className="search__box">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="search"
              name="s"
              required
              placeholder="Search by Categories"
              autoComplete="off"
              value={search}
              onChange={handleSearch}
            />
            <button type="submit" class="search-button">
              <RiSearchLine />
            </button>
          </form>
        </div>
      </section>
      <section className="category">
        <h2 className="widget-title">Categories</h2>
        <ul>
          {uniqueCategories.map((index) => (
            <li className="cat-item" key={index}>
              <span>{index}</span> <span>(2)</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Search;
