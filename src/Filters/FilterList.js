import React from "react";
import Filter from "./Filter.js";

/* renderFilter - callback function 
  - renders a single filter
  - assigns a unique `key` prop to each `Filter` component
  - passes the `filter` argument to each `Filter` component as a prop called `filter`
*/
const renderFilter = (filter) => <Filter key={filter.id} filter={filter} />; //WHAT IS (FILTER) DOING/SAYING IN THIS FUNCTION??
//Is this saying - for each filter in the filters array, render a Filter Component,

/* functional component
  - accepts `filters` data model as a prop - WHERE?? WHERE IS THIS COMING FROM? from App?
  - maps over the array of filter data, calling the `renderFilter` callback function 
  to render a `Filter` component for each item in the array
*/
const FiltersList = (props) => {
  if (!props.filters) {
    return null;
  }
  const filterListElements = props.filters.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;

/* If props.filters is not null(if there are filters), map over the filters array, 
store the values in a new variable (filterListElements) and 
return the HTML with the heading and the unordered list structure for each of the items in filters -
now the new array called filterListElements*/
