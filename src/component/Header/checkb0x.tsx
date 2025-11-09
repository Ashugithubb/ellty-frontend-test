
"use client"
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import { MUIStyledCommonProps } from "@mui/system";
import { JSX } from "react/jsx-runtime";


const UncheckedBox = () => (
    <Box className="icon" sx={{
        width: 23,
        height: 23,
        borderRadius: "6px",
        border: "1px solid #e1e1e1",
        display: "block",
    }} />
);

const CheckedBox = () => (
    <Box className="checkedIcon" sx={{
        width: 23,
        height: 23,
        borderRadius: "6px",
        border: "1px solid #1565c0",
        backgroundColor: "#1565c0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <CheckIcon sx={{ fontSize: 18, color: "#fff" }} />
    </Box>
);



const StyledCheckbox = styled((props) => (
    <Checkbox
        {...props}
        disableRipple
        icon={<UncheckedBox />}
        checkedIcon={<CheckedBox />}
    />
))(({ theme }) => ({
    padding: 0,
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .icon, & .checkedIcon": {
        transition: "all 140ms ease",
    },

    // UNCHECKED hover
    "&:hover .icon": {
        borderColor: "#90caf9",

        transform: "scale(1.02)"
    },

    // UNCHECKED active (press)
    "&:active .icon": {
        transform: "scale(0.98)",
        boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08)"

    },

    // CHECKED normal
    "& .checkedIcon": {
        borderColor: "#BDBDBD",
        backgroundColor: "#FFFFFF",

        iconColor: "#000000",
        "& .MuiSvgIcon-root": {
            color: "#878787",
        },

    },

    // CHECKED hover
    "&:hover .checkedIcon": {
        backgroundColor: "#2469F6",
        borderColor: "#2469F6",
        boxShadow: "0 6px 18px rgba(21,101,192,0.18)",
        transform: "translateY(-1px) scale(1.02)",
        "& .MuiSvgIcon-root": {
            color: "white",
        },

    },

    // CHECKED active
    // CHECKED press (mouse down)
    "&:active .checkedIcon": {
        borderColor: "#BDBDBD",
        backgroundColor: "#FFFFFF",

        iconColor: "#000000",
        "& .MuiSvgIcon-root": {
            color: "#878787",
        },// white
    },




    // Focus ring
    "&.Mui-focusVisible .icon, &.Mui-focusVisible .checkedIcon": {
        boxShadow: "0 0 0 6px rgba(21,101,192,0.12)"
    }
}));

export default function CustomCheckbox(props: JSX.IntrinsicAttributes & MUIStyledCommonProps<Theme>) {
    return <StyledCheckbox {...props} />;
}
