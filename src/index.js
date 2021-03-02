import React from "react";
import ReactDOM from "react-dom";
import CustomSelect from "./CustomSelect";
import "./styles.css";

function App() {
  const items = [
    { id: 0, label: "item 1" },
    { id: 2, label: "item 2", disabled: true },
    { id: 3, label: "item 3", disabled: false },
    { id: 4, label: "item 4" }
  ];

  return (
    <div className="App">
      <CustomSelect
        label={"Selected Items"}
        items={items}
        searchValue="1"
        responsiveHeight={400}
        showSearch={true}
        showSelectAll={true}
        maxSelectedItems={1}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
