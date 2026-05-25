import { Box } from "@mui/material";
import Image from "next/image";
import CTAButton from "../CTAButton";
import { Warning } from "../Warning";
import Logo from "../../../public/logo_azul.png";
import styles from "./header.module.css";
import Phone from "../../../public/celular.png";
import { Response } from "../Response";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Box className={styles.heading}>
          <Image
            src={Logo}
            alt="Logo dos advogados Alves e Ikejiri"
            className={styles.image}
          />
          <span>Alves & Ikejiri Advogados</span>
        </Box>
        <Box className={styles.container}>
          <Box className={styles.containerText}>
            <Warning warningText="Atendimento urgente" />
            <h1 className={styles.title}>
              Conta Bloqueada? Recupere seu dinheiro com agilidade.
            </h1>
            <p className={styles.subTitle}>
              Proteja seu patrimônio. Atuamos de forma rápida e transparente
              para reverter o bloqueio judicial da sua conta bancária
            </p>
            <Box className={styles.buttonIcon}>
              <CTAButton buttonText="FALE COM UM ADVOGADO AGORA" />
              <Response responseText="Resposta em poucos minutos" />
            </Box>
          </Box>
          <Box>
            <Image
              className={styles.phoneImage}
              src={Phone}
              alt="Imagem de um celular, a conta bancária está aberta com R$0,00 reais e exibe uma mensagem: 'Bloqueio Judicial'"
            />
          </Box>
        </Box>
      </header>
    </>
  );
};
