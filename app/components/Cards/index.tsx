"use client";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlashOnIcon from "@mui/icons-material/FlashOn"; // Ou AutoAwesomeIcon / SpeedIcon
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./cards.module.css";
import CTAButton from "../CTAButton";

interface CardsProps {
  type: string;
  cardText: string;
  button?: boolean;
  cardSubtitle?: string;
  iconType?: string;
}

export default function Cards({
  type,
  cardText,
  button,
  cardSubtitle,
  iconType,
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
            {iconType === "agility" && <FlashOnIcon fontSize="medium" />}
            {iconType === "transparency" && (
              <VisibilityIcon fontSize="medium" />
            )}
            {iconType === "personal" && <ShieldIcon fontSize="medium" />}
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
            <AccessTimeIcon
              sx={{
                fontSize: "60px", // Tamanho do desenho do ícone interno
                color: "#fff",
                alignSelf: "center",

                // 🛠️ O Segredo do Efeito de Background aqui:
                background: "rgba(255, 255, 255, 0.08)", // Um fundo branco semi-transparente (combina muito com o degradê!)
                padding: "14px", // Cria o espaçamento interno ao redor do relógio
                borderRadius: "12px", // Deixa as quinas arredondadas (use '50%' se quiser um círculo perfeito)

                // Garante que o ícone fique exatamente no centro do quadrado de fundo
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                // Opcional: uma borda bem fina e sutil para dar acabamento premium
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            />
            <div className={styles.compromiseCardText}>
              <span className={styles.compromiseTag}>{cardSubtitle}</span>
              <h2>{cardText}</h2>
            </div>
          </div>
          <div className={styles.compromiseCardButton}>
            {button && <CTAButton buttonText="QUERO MEU DESBLOQUEIO" />}
          </div>
        </div>
      );
    default:
      return null;
  }
}
