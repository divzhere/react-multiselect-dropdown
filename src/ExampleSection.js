import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ExampleSection(props) {
  const [showCode, setShowCode] = React.useState(false);
  return (
    <div>
      <section className="codebox">
        <section className="codebox-meta">
          <div className="codebox-title">
            {props.title + " "}
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
        <section className="codebox-demo">{props.children}</section>
        <br></br>
        {showCode && (
          <SyntaxHighlighter
            language="javascript"
            style={arta}
            className="code-syntax"
          >
            {props.codeSnippet}
          </SyntaxHighlighter>
        )}
      </section>
    </div>
  );
}
