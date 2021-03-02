import React from "react";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";

export default function CustomSelect(props) {
  const [toggle, setToggle] = React.useState(false);
  const nodeRef = React.useRef(null);

  //Hide Dropdown on pressing escape key
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setToggle(false);
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setToggle(false);
  };

  const handleClickOutside = (event) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
    };
  });

  return (
    <div ref={nodeRef} className="custom-select">
      <div>
        <button
          className="custom-select-toggle"
          onClick={() => setToggle(!toggle)}
        >
          <span className="custom-select-label">{props.label}</span>
        </button>
        {toggle && <MultiSelect {...props} />}
      </div>
    </div>
  );
}
