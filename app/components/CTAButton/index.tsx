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
        color: "var(--dark-blue)",
        border: "1px solid var(--dark-blue)",
        textTransform: "none",
        transition: "letter-spacing 0.2s ease, background-color 0.2s ease",

        "& .MuiButton-endIcon": {
          transition: "transform 0.2s ease",
        },

        "&:hover": {
          border: "1px solid var(--dark-blue)",
          backgroundColor: "rgba(0, 51, 102, 0.04)",
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
