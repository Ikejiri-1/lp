"use client";
import styles from "./page.module.css";
import data from "./db/data.json"; // JSON com Problema, Solução e Fechamento (CTA)
import diffData from "./db/diff.json"; // JSON com os Diferenciais e Compromisso
import Cards from "./components/Cards";
import CTAButton from "./components/CTAButton";

export default function Home() {
  const problemSection = data.sections.find((s) => s.id === "problem");
  const solutionSection = data.sections.find((s) => s.id === "solution");
  const ctaClosure = data.sections.find((s) => s.id === "cta_closure");

  return (
    <main className={styles.mainContainer}>
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

      {solutionSection && (
        <section className={styles.sectionSolution}>
          <div className={styles.containerSolution}>
            <div className={styles.columnLeft}>
              <span className={styles.tagSolution}>{solutionSection.tag}</span>
              <h2 className={styles.titleSolution}>{solutionSection.title}</h2>
              {solutionSection.paragraphs?.map((paragraph, index) => (
                <p key={index} className={styles.textSolution}>
                  {paragraph}
                </p>
              ))}
            </div>

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
      <section className={styles.sectionDifferentials}>
        <span className={styles.tagDiff}>{diffData.section.tag}</span>
        <h2 className={styles.titleDiff}>{diffData.section.title}</h2>

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

        <div className={styles.containerCompromise}>
          <Cards
            type="compromisso"
            cardText={diffData.compromise.title}
            cardSubtitle={diffData.compromise.tag}
            button={diffData.compromise.hasButton}
          />
        </div>
      </section>
      {ctaClosure && (
        <>
          <section className={styles.sectionCTAClosure}>
            <div className={styles.containerCTA}>
              <h2 className={styles.titleCTA}>{ctaClosure.title}</h2>
              <p className={styles.subtitleCTA}>{ctaClosure.subtitle}</p>

              <div className={styles.buttonWrapper}>
                <CTAButton buttonText={ctaClosure.buttonText ?? ""} />
              </div>
            </div>
            <div className={styles.names}>
              <h3>Alves & Ikejiri Advogados | OAB/SP 69.959</h3>
              <h3>CNPJ | 68.308.622/0001-15</h3>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
