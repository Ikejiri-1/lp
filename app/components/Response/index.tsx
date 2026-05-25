import { Box } from "@mui/material";
import styles from "./response.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface ResponseProps {
  responseText: string;
}

export const Response = ({ responseText }: ResponseProps) => {
  return (
    <>
      <Box className={styles.responseBox}>
        <AccessTimeIcon />
        <p>{responseText}</p>
      </Box>
    </>
  );
};
