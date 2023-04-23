import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};


// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, []);

  const handleClick = (index) => (setSelectedIndex(index)) 

  return (
    <ul style={{ textAlign: "center" , color: "white", fontWeight: "bold"}}>
      {items.map((item, index) => (
        <WrappedSingleListItem
            key={index}
            onClickHandler={handleClick}
            text={item.text}
            index={index}
            isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

WrappedListComponent.defaultProps = {
  items: [{ text: "item1" }, { text: "item2" }, {text: "item3"}, {text: "item4"}, {text: "item5"}]
};

const List = memo(WrappedListComponent);

export default List;