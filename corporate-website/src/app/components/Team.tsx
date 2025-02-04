import Image from 'next/image'

export const Team = () => {
  const team = [
    { fullName: "Laila Quere, PhD", title: "CEO", photo: "https://placehold.co/300x300/orange/white?text=LQ", summary: "Laila Quere, Aken Medical's CEO, leads cancer treatment innovation with nano-radiopharmaceuticals. She has nanomedicine and startup expertise.", linkedIn: "#", twitter: "#" },
    { fullName: "Tijani GHARBI", title: "CSO", photo: "https://placehold.co/300x300/green/white?text=TG", summary: "As CSO of Aken Medical, Tijani Gharbi brings over 40 years of expertise in medical devices and nanomedicine. An internationally recognized Professor and authority in applied physics for medicine, he leads Aken's scientific strategy and research efforts. Prior to joining Aken Medical, Tijani co-founded and oversaw the scientific development of a medical startup. He also held senior roles in academia, including founding the NanoMedicine Lab and heading the Bioengineering School in Besançon. Tijani has authored over 250 peer-reviewed papers and holds 20 patents. He holds a PhD in Physical Sciences from the University of Franche-Comté.", linkedIn: "#", twitter: "#" },
    { fullName: "Jean-Pierre Pouget, PhD", title: "Radiobiology Innovation", photo: "https://placehold.co/300x300/violet/white?text=JP", summary: "Jean-Pierre Pouget is a Radiobiology Innovation Scientist at Aken Medical. He leads groundbreaking research in radiobiology and targeted radionuclide therapy. With a Ph.D. from the Curie Institute and extensive experience in both academic and research settings, Jean-Pierre drives innovation in radiopharmaceuticals for cancer treatment. Previously, he directed research at INSERM in Montpellier, focusing on optimizing cancer therapies through advanced radiobiological insights. Jean-Pierre has authored over 80 papers and holds several patents in his field.", linkedIn: "#", twitter: "#" },
    { fullName: "Mikhael Bechelany, PhD", title: "Chemistry Innovation Scientist", photo: "https://placehold.co/300x300/red/white?text=MB", summary: "Mikhael Bechelany is a Chemistry Innovation Scientist at Aken Medical. He applies his extensive expertise in materials chemistry and nanotechnology to drive advancements in radiopharmaceuticals. With a background in synthesizing and characterizing nanomaterials, Mikhael leads innovative research initiatives at Aken Medical. His career includes directing research at the European Institute of Membranes, developing cutting-edge synthesis methods, and co-founding three startups. He has authored over 280 publications and holds 10 patents. Mikhael earned his PhD in Materials Chemistry from the University of Lyon", linkedIn: "#", twitter: "#" },
    { fullName: "David Azria MD, PhD", title: "Medical Advisor", photo: "https://placehold.co/300x300/blue/white?text=DA", summary: "David Azria is a Medical Advisor at Aken Medical, bringing extensive expertise in radiation oncology and radiobiology. A professor and coordinator of the University Federation of Radiation Oncology of Mediterranean Occitanie, he also serves as the Scientific Director at the Montpellier Cancer Institute. His research focuses on radiotherapy-induced toxicity, including the development of predictive blood toxicity tests. David has published over 510 papers, holds 5 patents in radiotherapy, and is a co-founder of the startup NovaGray.", linkedIn: "#", twitter: "#" },
    { fullName: "John Brown, MBA", title: "Business Development Advisor", photo: "https://placehold.co/300x300/brown/white?text=JB", summary: "John Brown is a Business Development Advisor at Aken Medical. He leverages 26 years of experience in building and growing companies. His diverse background includes roles in Fortune 50 organizations, consulting, and startup operations. John specializes in business development, market expansion, and enhancing profitability. He holds an MBA from the University of Indianapolis and a bachelor’s degree in Business from Indiana University.", linkedIn: "#", twitter: "#" },
  ];

  return (
    <section className="section  is-large">
      <div className="container">
        <div className="title is-4 has-text-centered">Team</div>
        <p className="subtitle is-6 has-text-centered">Meet our amazing team!</p>
        <div className="container is-desktop">
          <div className="columns is-multiline">

            {team.map((t, i) => (
              <div className="column is-6" key={i}>
                <div className="box has-text-centered">
                  <figure className="image is-128x128 mx-auto mb-4 ">
                    <img
                      className="is-rounded"
                      src={t.photo}
                      alt={"Phote of " + t.fullName}
                    />

                    {/* <Image
                    className="is-rounded"
                    src={t.photo}
                    alt={"Phote of " + t.fullName}
                    width={128}
                    height={128} />
                 */}
                  </figure>
                  <p className="title is-4">{t.fullName}</p>
                  <p className="subtitle is-6">{t.title}</p>

                  <div className="content has-text-left">
                    {t.summary}
                  </div>

                  <div className="buttons is-centered is-gapless">
                    <button className="button is-ghost is-large">
                      <span className="icon is-large">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                          <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                      </span>
                    </button>
                    <button className="button is-ghost is-large">
                      <span className="icon is-large">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                          <path fill="#212121" fillRule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clipRule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )
            )}


          </div>
        </div>

      </div>
    </section>
  );
};
