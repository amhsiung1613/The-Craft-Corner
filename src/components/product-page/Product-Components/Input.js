const Input = ({ handleChange, value, title, name, selectedVal }) => {
    return (
      <label className="sidebar-label-container">
        <input 
        type="radio" 
        value={value} 
        name={name} 
        checked={selectedVal === value}
        onChange={handleChange}  />
        <span className="checkmark" ></span>
        {title}
      </label>
      
    );
  };
  
  export default Input;
