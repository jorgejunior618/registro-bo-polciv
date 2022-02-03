import { TextField } from "@mui/material";

function CustomWidthInput({
  width,
  required,
  fullWidth,
  value,
  name,
  onChange,
  placeholder,
}) {
  return (
    <div style={{ width: width }}>
      <TextField
        required={required}
        fullWidth={fullWidth}
        value={value}
        name={name}
        onChange={onChange}
        className="text-input"
        placeholder={placeholder}
        variant="outlined"
      />
    </div>
  );
}

export default CustomWidthInput;

