"use client";
import Cards from "./components/Cards";
import CTAButton from "./components/CTAButton";

export default function Home() {
  return (
    <>
      <section>
        <CTAButton buttonText="FALE COM UM ADVOGADO AGORA" />
        <Cards type="simples" cardText="oi" />
        <Cards
          type="diferencial"
          cardText="texto texto texto"
          cardSubtitle="texto texto texto texto texto"
        />
        <Cards
          type="compromisso"
          cardText="texto texto texto"
          cardSubtitle="texto texto texto texto texto"
          button={true}
        />
      </section>
    </>
  );
}
