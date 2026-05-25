import { Box } from "@mui/material";
import Image from "next/image";
import CTAButton from "../CTAButton";
import { Warning } from "../Warning";
export const Header = () => {
  return (
    <>
      <header>
        <Image
          src="
        "
          alt="Logo dos advogados Alves e Ikejiri"
        />
        <span>Alves & Ikejiri Advogados</span>
        <Box>
          <Box>
            <Warning warningText="Atendimento urgente" />
            <h1>Conta Bloqueada? Recupere seu dinheiro com agilidade.</h1>
            <p>
              Proteja seu patrimônio. Atuamos de forma rápida e transparente
              para reverter o bloqueio judicial da sua conta bancária
            </p>
            <Box>
              <CTAButton buttonText="FALE COM UM ADVOGADO AGORA" />
              {/* <Response /> */}
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </header>
    </>
  );
};
