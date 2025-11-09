import { Box } from "@mui/material"
import style from "./form.module.css"
import AllPages from "../Header/header"
import DoneButton from "../Button/button"

export default function FormComponet() {
    return (
        <Box className={style.formWrapper}>
            <Box className={style.form}>
                
                <Box className={style.row}>
                    <AllPages text={"All pages"} />
                </Box>

                <div className={style.divider}></div>

               <Box sx={{marginTop:"12px"}}><Box className={style.row}><AllPages text={"Page 1"} /></Box>
                <Box className={style.row}><AllPages text={"Page 2"} /></Box>
                <Box className={style.row}><AllPages text={"Page 3"} /></Box>
                <Box className={style.row}><AllPages text={"Page 4"} /></Box></Box> 

                <div className={style.divider}></div>

                <Box className={style.buttonWrapper}>
                    <DoneButton />
                </Box>

            </Box>
        </Box>
    )
}
