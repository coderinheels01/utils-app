import React, { useState } from "react";

export const useToggle = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = value => {
    setValue(previousValue =>
      typeof value === "boolean" ? value : !previousValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
