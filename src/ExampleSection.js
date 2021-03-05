import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ExampleSection(props) {
  const [showCode, setShowCode] = React.useState(false);
  return (
    <div className="example-section">
      <div>
        <h3>{props.title}</h3>
        {props.children}
        <span
          className="show-code-button"
          onClick={() => {
            setShowCode(!showCode);
          }}
        >
          {showCode ? `Hide Code </>` : `Show Code </>`}
        </span>
      </div>
      {showCode && (
        <SyntaxHighlighter
          language="javascript"
          style={arta}
          className="code-syntax"
        >
          {props.codeSnippet}
        </SyntaxHighlighter>
      )}
      <p> {props.description}</p>
    </div>
  );
}
