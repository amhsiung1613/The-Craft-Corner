const MaterialInput = ({ handleMaterialChange, value, title, name, selectedMaterial }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleMaterialChange} type="radio" value={value} name={name} checked={selectedMaterial === value} />
        <span className="checkmark"></span>
        {title}
      </label>
    );
  };
  
  export default MaterialInput;