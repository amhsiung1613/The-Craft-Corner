
import Input from "../../Product-Components/Input";
import "./Price.css";

function Price({ handleChange, selectedPrice }) {
  return (
    <div className="price-filter">
      <h2 className="sidebar-title">Price</h2>

      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="range"
        selectedVal={selectedPrice}
      />
        <Input
        handleChange={handleChange}
        value={50}
        title="Less than $50"
        name="range"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="range"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="range"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="range"
        selectedVal={selectedPrice}
      />
    </div>
  );
}

export default Price;