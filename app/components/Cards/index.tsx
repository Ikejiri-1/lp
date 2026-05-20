"use client";
import VerifiedIcon from "@mui/icons-material/Verified";
import styles from "./cards.module.css";
import CTAButton from "../CTAButton";

interface CardsProps {
  type: string;
  cardText: string;
  button?: boolean;
  cardSubtitle?: string;
}

export default function Cards({
  type,
  cardText,
  button,
  cardSubtitle,
}: CardsProps) {
  switch (type) {
    case "simples":
      return (
        <div className={styles.simpleCard}>
          <VerifiedIcon />
          <span>{cardText}</span>
        </div>
      );
    case "diferencial":
      return (
        <div className={styles.diferentialCard}>
          <div className={styles.diferentialCardIcon}>
            <VerifiedIcon fontSize="large" />
          </div>
          <div className={styles.diferentialCardText}>
            <h2>{cardText}</h2>
            <p>{cardSubtitle}</p>
          </div>
        </div>
      );
    case "compromisso":
      return (
        <div className={styles.compromiseCard}>
          <div className={styles.compromiseCardIconText}>
            <VerifiedIcon
              sx={{
                fontSize: "64px",
              }}
            />

            <div className={styles.compromiseCardText}>
              <h2>{cardText}</h2>
              <p>{cardSubtitle}</p>
            </div>
          </div>
          <div className={styles.compromiseCardButton}>
            {button && <CTAButton buttonText="Quero meu Desbloqueio" />}
          </div>
        </div>
      );
    default:
      return null;
  }
}
