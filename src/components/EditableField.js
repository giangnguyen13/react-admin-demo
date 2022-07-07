import React, { useState } from "react";
import { useRecordContext } from "react-admin";
import { Input } from "@mui/material";

const EditableField = ({ source }) => {
  const record = useRecordContext();
  const [inputValue, setInputValue] = useState(record[source]);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return record ? (
    <Input
      value={inputValue}
      name={source}
      onChange={handleChange}
      onClick={() => console.log(inputValue)}
    />
  ) : null;
};

export default EditableField;
