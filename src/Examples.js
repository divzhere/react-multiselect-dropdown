import React from "react";
import ReactDOM from "react-dom";
import CustomSelect from "./CustomSelect";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PropsTable from "./PropsTable";
import ExampleSection from "./ExampleSection";
import "./styles.css";

const BasicUsage = `import React, { Component } from "react";
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

export default function Examples() {
  const items = [
    { id: 0, label: "red" },
    { id: 1, label: "blue" },
    { id: 2, label: "yellow" },
    { id: 3, label: "green" }
  ];
  const [selectedItems, setSelected] = React.useState([]);

  const [showCode, setShowCode] = React.useState(false);

  return (
    <div className="App">
      {/* <CustomSelect
        label={"Selected Items"}
        items={items}
        searchValue="1"
        responsiveHeight={400}
        showSearch={true}
        showSelectAll={true}
        showSelectedItems={false}
      /> */}
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
      <nav className="top-nav">
        <h2>Props</h2>
        <PropsTable />
      </nav>

      <h2>Examples</h2>
      <ExampleSection title="Basic Usage" codeSnippet={BasicUsage}>
        <CustomSelect
          items={items}
          label="Colors"
          selectedItems={selectedItems}
          showSelectedItems={false}
          showSearch={false}
        />
      </ExampleSection>
      {/* <div className="section-row">
        <section className="codebox">
          <section className="codebox-meta">
            <div className="codebox-title">
              Basic Usage{" "}
              <span
                className="show-code-button"
                onClick={() => {
                  setShowCode(!showCode);
                }}
              >
                {"</>"}
              </span>
            </div>
          </section>
          <section className="codebox-demo">
            <CustomSelect
              label={"Selected Items"}
              items={items}
              searchValue="1"
              responsiveHeight={400}
              showSearch={true}
              showSelectAll={true}
              maxSelectedItems={1}
            />
          </section>
          <br></br>
          {showCode && (
            <SyntaxHighlighter
              language="javascript"
              style={arta}
              className="code-syntax"
            >
              {MultiSelectExample}
            </SyntaxHighlighter>
          )}
        </section>
        <section className="codebox">
          <section className="codebox-meta">
            <div className="codebox-title">
              Basic Usage{" "}
              <span
                className="show-code-button"
                onClick={() => {
                  setShowCode(!showCode);
                }}
              >
                {"</>"}
              </span>
            </div>
          </section>
          <section className="codebox-demo">
            <CustomSelect
              label={"Selected Items"}
              items={items}
              searchValue="1"
              responsiveHeight={400}
              showSearch={true}
              showSelectAll={true}
              maxSelectedItems={1}
            />
          </section>
          <br></br>
          {showCode && (
            <SyntaxHighlighter
              language="javascript"
              style={arta}
              className="code-syntax"
            >
              {MultiSelectExample}
            </SyntaxHighlighter>
          )}
        </section>
      </div> */}
    </div>
  );
}
