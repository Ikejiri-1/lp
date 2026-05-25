import { Box } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from "./warning.module.css";
interface WarningProps {
  warningText: string;
}
export const Warning = ({ warningText }: WarningProps) => {
  return (
    <>
      <Box className={styles.warningBox}>
        <WarningAmberIcon />
        <p>{warningText}</p>
      </Box>
    </>
  );
};
