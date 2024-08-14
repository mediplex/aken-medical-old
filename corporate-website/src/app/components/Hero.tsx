import { Navbar, Partners } from "@/components";

const benefits = [
  "Embedding of a variety of radioactive materials",
  "Compatibility with existing vectors",
  "Enhanced targetting a multi-vector approach",
  "Seamless theranostics"
]

export const Hero = () => {
  return (
    // style={{ backgroundImage: `radial-gradient(circle, var(--bulma-white) 00%, var(--bulma-warning) 100%` }}


    <header data-theme="light" className="hero is-dark is-fullheight"
    // style={{ backgroundImage: `linear-gradient(var(--bulma-warning) 00%, var(--bulma-white) 50%` }}
    // style={{
    //   backgroundImage: `url("/images/hero-bg.webp")`,
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    //   backgroundOrigin:"border-box",
    //   backgroundRepeat:"no-repeat",
    // backgroundBlendMode: "multiply"
    // }}
    >

      {/* <div className="hero-head">
        <Navbar />
      </div> */}
      {/* style={{backgroundColor:'#00000088'}} */}
      <div className="hero-body" >
        <div className="container">



          <div className="columns is-centered">
            <div className="column is-6">
              <div className="box">

                <div className="columns is-centered">
                  <div className="column is-8-desktop is-10-tablet">
                    <h1 className="title has-text-centered has-text-pretty is-size-3-desktop is-size-3-tablet is-4   has-text-weight-bold" style={{ lineHeight: 1.3 }}>


                      <div className="tag mb-4 ">Revolution in Cancer Treatment</div>
                      <br />A Nanoparticle-based <span className="has-background-warning">Radiopharmaceutical</span>

                      {/* Revolution in Cancer Treatment <span className="has-background-dark has-text-light">Radiopharmaceutical</span> with Nanoparticle Technology */}
                    </h1>
                  </div>
                </div>

                <div className="columns is-centered">
                  <div className="column is-6-desktop">
                    <p className="has-text-pretty has-text-centered has-text-weight-normal">We develop a nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.</p>
                  </div>
                </div>
                <div className="columns is-centered is-gapless  pt-6">
                  <div className="column is-10 ">

                    {
                      benefits.map((b, i) => (

                        <div key={i} className="columns is-mobile is-centered is-vcentered is-2">
                          <div className="column is-narrow">
                            <div style={{ height: 24, width: 24, backgroundColor: 'var(--bulma-dark)', color: 'var(--bulma-light)', outline: "solid", outlineOffset: 1, outlineColor: "var(--bulma-dark)", borderRadius: 999, display: 'flex', alignItems: "center", justifyContent: 'center' }}>{i + 1}</div>
                          </div>
                          <div className="column">
                            <p key={i}>{b}</p>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>


                <div className="columns is-centered my-6">
                  <div className="column is-10">
                    <div className="button has-text-weight-bold is-warning has-ring-warning is-rounded is-fullwidth py-5 ">Learn more!</div>
                    <a href="#" className="button is-ghost is-rounded has-text-centered is-fullwidth">Click on learn more to learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>









        </div>


      </div>

      <div className="hero-foot">

        <Partners />
      </div>
    </header>

  );
};
