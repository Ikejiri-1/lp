"use client";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface ButtonProps {
  buttonText: string;
}

export default function CTAButton({ buttonText }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={<WhatsAppIcon />}
      endIcon={<ArrowRightAltIcon />}
      sx={{
        padding: "1em 2em",
        background: "#1a2f4d",
        color: "#eaeaea",
        border: "1px solid #416392",
        textTransform: "none",
        transition: "letter-spacing 0.2s ease, background-color 0.2s ease",

        "& .MuiButton-endIcon": {
          transition: "transform 0.2s ease",
        },

        "&:hover": {
          border: "1px solid var(--dark-blue)",
          backgroundColor: "rgba(8, 136, 77, 0.86)",
          color: "#1a2f4d",
          letterSpacing: "0.06em",

          "& .MuiButton-endIcon": {
            transform: "translateX(4px)",
          },
        },
      }}
    >
      {buttonText}
    </Button>
  );
}
