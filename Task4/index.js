/**
 * Snappy R&D
 * Task 4
 */

import React, { useState } from "react";

/**
 * Use the XHR function to mimick a server call
 */
const XHR = () => new Promise(resolve => setTimeout(resolve, 2500));


/**
 * Write your solution inside the component template below
 */
const DebouncedInput = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <div>Loading: {`${isLoading}`}</div>
      <input />
    </div>
  );
};

export default DebouncedInput;
