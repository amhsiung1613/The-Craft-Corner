import Button from "../Product-Components/Button";
import "./Recommended.css";
// import Sidebar from "../Sidebar/Sidebar";
// import Display from "../display";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="filters">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="earring" title="Earrings" />
          <Button onClickHandler={handleClick} value="necklace" title="Necklaces" />
          <Button onClickHandler={handleClick} value="ring" title="Rings" />
          {/* <Button onClickHandler={handleClick} value="gold" title="Gold" />
          <Button onClickHandler={handleClick} value="silver" title="Silver" /> */}
        </div>
        {/* <Sidebar/> */}
        {/* <Display/> */}

      </div>
    </>
  );
};

export default Recommended;