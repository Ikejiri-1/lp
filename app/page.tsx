"use client";
import styles from "./page.module.css";
import data from "./db/data.json"; // JSON com Problema, Solução e Fechamento (CTA)
import diffData from "./db/diff.json"; // JSON com os Diferenciais e Compromisso
import Cards from "./components/Cards";
import CTAButton from "./components/CTAButton";

export default function Home() {
  // 1. Filtragem dos dados da Primeira Parte (texts_v2.json)
  const problemSection = data.sections.find((s) => s.id === "problem");
  const solutionSection = data.sections.find((s) => s.id === "solution");
  const ctaClosure = data.sections.find((s) => s.id === "cta_closure");

  return (
    <main className={styles.mainContainer}>
      {/* =========================================================================
          SEÇÃO 1: O PROBLEMA (Layout Centralizado)
         ========================================================================= */}
      {problemSection && (
        <section className={styles.sectionProblem}>
          <span className={styles.tagProblem}>{problemSection.tag}</span>
          <h1 className={styles.titleProblem}>{problemSection.title}</h1>
          <div className={styles.paragraphsContainer}>
            {problemSection.paragraphs?.map((paragraph, index) => (
              <p key={index} className={styles.textProblem}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SEÇÃO 2: A SOLUÇÃO (Layout Dual / Split com Grid)
         ========================================================================= */}
      {solutionSection && (
        <section className={styles.sectionSolution}>
          <div className={styles.containerSolution}>
            {/* Coluna da Esquerda: Textos Informativos */}
            <div className={styles.columnLeft}>
              <span className={styles.tagSolution}>{solutionSection.tag}</span>
              <h2 className={styles.titleSolution}>{solutionSection.title}</h2>
              {solutionSection.paragraphs?.map((paragraph, index) => (
                <p key={index} className={styles.textSolution}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Coluna da Direita: Lista de simpleCards */}
            <div className={styles.columnRight}>
              {solutionSection.features?.map((feature) => (
                <Cards
                  key={feature.id}
                  type="simples"
                  cardText={feature.text}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SEÇÃO 3: NOSSOS DIFERENCIAIS & COMPROMISSO (Centralizados e Enquadrados)
         ========================================================================= */}
      <section className={styles.sectionDifferentials}>
        <span className={styles.tagDiff}>{diffData.section.tag}</span>
        <h2 className={styles.titleDiff}>{diffData.section.title}</h2>

        {/* Grid com os 3 cartões brancos */}
        <div className={styles.gridDifferentials}>
          {diffData.section.items.map((item) => (
            <Cards
              key={item.id}
              type="diferencial"
              cardText={item.title}
              cardSubtitle={item.subtitle}
              iconType={item.iconType}
            />
          ))}
        </div>

        {/* Banner de Compromisso com o Degradê aplicado no CSS */}
        <div className={styles.containerCompromise}>
          <Cards
            type="compromisso"
            cardText={diffData.compromise.title}
            cardSubtitle={diffData.compromise.tag}
            button={diffData.compromise.hasButton}
          />
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 4: BANNER FINAL DE FECHAMENTO (CTA com Gradiente Radial)
         ========================================================================= */}
      {ctaClosure && (
        <section className={styles.sectionCTAClosure}>
          <div className={styles.containerCTA}>
            <h2 className={styles.titleCTA}>{ctaClosure.title}</h2>
            <p className={styles.subtitleCTA}>{ctaClosure.subtitle}</p>

            <div className={styles.buttonWrapper}>
              <CTAButton buttonText={ctaClosure.buttonText ?? ""} />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
