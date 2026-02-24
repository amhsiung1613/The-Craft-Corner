const PriceInput = ({ handlePriceChange, value, title, name, selectedPrice }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handlePriceChange} type="radio" value={value} name={name} checked={selectedPrice === value} />
        <span className="checkmark"></span>
        {title}
      </label>
    );
  };
  
  export default PriceInput;