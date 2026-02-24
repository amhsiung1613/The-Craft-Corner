import Input from "../../Product-Components/Input";
import "./Material.css";

function Material({ handleChange, selectedMaterial }) {
  return (
    <div className="material-filter">
      <h2 className="sidebar-title">Material</h2>

      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="material"
        selectedVal={selectedMaterial}
      />
      <Input
        handleChange={handleChange}
        value="gold"
        title="Gold"
        name="material"
        selectedVal={selectedMaterial}
      />
      <Input
        handleChange={handleChange}
        value="silver"
        title="Silver"
        name="material"
        selectedVal={selectedMaterial}
      />
    </div>
  );
}

export default Material;