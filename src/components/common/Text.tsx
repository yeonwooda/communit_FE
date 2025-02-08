import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export type textProps = {
  text: string;
};

const Text = ({ text }: textProps) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        {text}
        <TextField id="standard-basic" variant="standard" />
      </Box>
    </>
  );
};

export default Text;
