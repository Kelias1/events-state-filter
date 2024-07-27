/* eslint-disable react/prop-types */

export const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar">
      {filters.map(filter => (
        <button
          key={filter}
          className={`filter-button ${filter === selected ? "selected" : "unselected"}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};