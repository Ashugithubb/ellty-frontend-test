import { Box, Checkbox, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import style from "./header.module.css";
import CustomCheckbox from "./checkb0x";

interface ComponentProp {
  text: string;
}

export default function AllPages({ text }: ComponentProp) {
  const label = { inputProps: { "aria-label": "All pages checkbox" } };

  return (
    <Box className={style.box} sx={{ display: "flex", alignItems: "center" }}>
      <Typography className={style.allPages}>{text}</Typography>
<CustomCheckbox />
    </Box>
  );
}
