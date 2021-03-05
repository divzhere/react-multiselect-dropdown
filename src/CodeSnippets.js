export const BasicUsage = `import React, { Component } from "react";
import CustomSelect from "./CustomSelect";

class Example extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 1, label: "Red" },
        { id: 2, label: "Green" },
        { id: 3, label: "Blue" },
        { id: 4, label: "Yellow" }
      ],
      selectedItems: []
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <CustomSelect
        label="Colors" 
        items={items}
        selectedItems={selectedItems}
        onChange={this.handleChange}
        showSelectedItems={false}
        showSearch={false}
      />
    );
  }
}`;

export const Searchable = `import React, { Component } from "react";
import CustomSelect from "./CustomSelect";

class Example extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 1, label: "Red" },
        { id: 2, label: "Green" },
        { id: 3, label: "Blue" },
        { id: 4, label: "Yellow" }
      ],
      selectedItems: []
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <CustomSelect
        label="Colors" 
        items={items}
        selectedItems={selectedItems}
        onChange={this.handleChange}
        showSelectedItems={false}
        showSearch={false}
      />
    );
  }
}`;

export const SelectAll = `import React, { Component } from "react";
import CustomSelect from "./CustomSelect";

class Example extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 1, label: "Red" },
        { id: 2, label: "Green" },
        { id: 3, label: "Blue" },
        { id: 4, label: "Yellow" }
      ],
      selectedItems: []
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={false}
        />
    );
  }
}`;
