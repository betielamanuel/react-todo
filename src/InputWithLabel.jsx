import { Fragment, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ id, value, onInputChange, children }) => {
  // Step 1: Use the useRef React hook to create an imperative ref named inputRef
  const inputRef = useRef(null);

  // Step 2: Define a useEffect React hook without dependency list
  useEffect(() => {
    // Step 3: Inside the side-effect handler function, call the focus() method on the current inputRef
    inputRef.current.focus();
  });

  return (
    <Fragment>
      <label htmlFor={id}>{children}</label>
      {/* Step 4: Remove the autoFocus prop on the input element */}
      {/* Step 5: Add a ref prop with value inputRef on the input element */}
      <input
        type="text"
        id={id}
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      />
    </Fragment>
  );
};

// prop validation for InputWithLabel
InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputWithLabel;
