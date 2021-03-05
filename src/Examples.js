import React from "react";
import CustomSelect from "./CustomSelect";
import PropsTable from "./PropsTable";
import ExampleSection from "./ExampleSection";
import {
  BasicUsage,
  Searchable,
  SelectAll,
  Height,
  SelectedItems
} from "./CodeSnippets";
import "./styles.css";

export default function Examples() {
  const items = [
    { id: 0, label: "red" },
    { id: 1, label: "blue" },
    { id: 2, label: "yellow" },
    { id: 3, label: "green" }
  ];
  const selectedItems = [];

  return (
    <div className="App">
      <nav className="top-nav">
        <h1 className="header-text">React-multiselect-dropdown</h1>
      </nav>
      <p className="caption">
        A dropdown menu for displaying choices - an elegant alternative to the
        native <span>{"<Select/>"}</span> element. Built with{" "}
        <a
          href="https://www.npmjs.com/package/@kenshooui/react-multi-select"
          target="_blank"
        >
          react-multi-select
        </a>
        {"  "}
        as base component.
      </p>

      <h2>Examples</h2>
      <ExampleSection title="Basic Usage" codeSnippet={BasicUsage}>
        <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={false}
        />
      </ExampleSection>
      <ExampleSection
        title="Height"
        codeSnippet={Height}
        description="responsiveHeight prop can be used to set height of Select Menu"
      >
        <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={false}
          responsiveHeight={200}
        />
      </ExampleSection>
      <ExampleSection
        title="Hide Selected Items"
        codeSnippet={SelectedItems}
        description="showSelectedItems prop can be used to show/hide selected items."
      >
        <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={false}
          responsiveHeight={200}
          showSelectedItems={false}
        />
      </ExampleSection>
      <ExampleSection
        title="Select with Search Field"
        codeSnippet={Searchable}
        description="showSearch prop can be used to enable/disable search. It is true by default"
      >
        <CustomSelect
          items={items}
          showSelectAll={false}
          label="Colors"
          selectedItems={selectedItems}
          showSelectedItems={false}
          responsiveHeight={200}
        />
      </ExampleSection>
      <ExampleSection
        title="Select with Select All"
        codeSnippet={SelectAll}
        description="showSelectAll prop can be used to Enable/disable Select All."
      >
        <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={false}
          responsiveHeight={200}
        />
      </ExampleSection>
      <ExampleSection
        title="Select with Multiselect"
        codeSnippet={SelectAll}
        description="maxSelectedItems prop can be used to enable/disable multiselect feature. When it is set to 1, multiselect of items in select is disabled. One can set other number then 1 as well."
      >
        <CustomSelect
          items={items}
          showSelectAll={true}
          label="Colors"
          selectedItems={selectedItems}
          showSearch={true}
          maxSelectedItems={1}
        />
      </ExampleSection>
      <nav className="top-nav">
        <h2>Props</h2>
        <PropsTable />
      </nav>
    </div>
  );
}
