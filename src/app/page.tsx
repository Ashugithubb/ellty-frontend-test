import DoneButton from "@/component/Button/button";
import FormComponet from "@/component/Form/form";
import CustomCheckbox from "@/component/Header/checkb0x";
import AllPages from "@/component/Header/header";
import { Box } from "@mui/material";
import { kMaxLength } from "buffer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box sx={{ marginTop: "50px", marginLeft: '50px', }}>
        
        <FormComponet />
        
      </Box>

    </>
  );
}
