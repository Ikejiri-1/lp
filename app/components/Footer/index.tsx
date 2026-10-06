import { Box } from "@mui/material";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Box className={styles.names}>
          <h3>Caio Ikejiri | OAB/SP 511.392</h3>
          <h3>Caio Alves | OAB/SP 517.011</h3>
        </Box>
      </footer>
    </>
  );
};
