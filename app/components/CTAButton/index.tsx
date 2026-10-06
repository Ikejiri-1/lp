"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { whatsappLink } from "@/app/utils/wppLink";
import Link from "next/link";
import styles from "./ctabutton.module.css";

interface ButtonProps {
  buttonText: string;
}

export default function CTAButton({ buttonText }: ButtonProps) {
  const phone = "12981131591";
  const message =
    "Olá, tudo bem? \n Estou com minha conta bancária bloqueada e preciso de ajuda.";
  return (
    <Link href={whatsappLink(phone, message)} className={styles.whatsappBtn}>
      <WhatsAppIcon />
      <span>{buttonText}</span>
      <span className={styles.endIcon}>
        <ArrowRightAltIcon />
      </span>
    </Link>
  );
}
