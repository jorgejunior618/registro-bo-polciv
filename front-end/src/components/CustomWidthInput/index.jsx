import { TextField } from "@mui/material";

function CustomWidthInput({
  width,
  required,
  fullWidth,
  value,
  name,
  onChange,
  placeholder,
  InputProps,
}) {
  return (
    <div style={{ width: width }}>
      <TextField
        aria-label="customized-textfield"
        required={required}
        fullWidth={fullWidth}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        InputProps={InputProps}
      />
    </div>
  );
}

export default CustomWidthInput;

