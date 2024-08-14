import { Navbar, Partners } from "@/components";


export const Hero = () => {
  return (
    // style={{ backgroundImage: `radial-gradient(circle, var(--bulma-white) 00%, var(--bulma-warning) 100%` }}
    <header data-theme="dark" className="hero is-dark is-fullheight" >
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-desktop is-10-tablet">
              <h1 className="title is-size-3-desktop is-size-3-tablet is-4  has-text-centered has-text-weight-bold" style={{ lineHeight: 1.3 }}>
                Revolution in <span className="has-background-dark has-text-light">Radiopharmaceutical</span> Cancer Treatment with Nanoparticle Technology
              </h1>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-6-desktop">
              <p className="has-text-centered">Our versatile nanoparticle platform is designed to embed radioactive materials enabling a seamless theranostics approach while delivering a concentrated radiation with an enhanced precision to the cancer cell.</p>
            </div>
          </div>


          <div className="columns is-centered my-6">
            <div className="column is-4">
              <div className="button has-text-weight-bold is-primary has-ring-primary is-rounded is-fullwidth py-5 ">Learn more!</div>
              <a href="#" className="button is-ghost is-rounded has-text-centered is-fullwidth">Click on learn more to learn more</a>
            </div>
          </div>

          <div className="columns is-centered ">
            <div className="column is-narrow">
              <ol className="list-circles list-circles-dark is-upper-roman">
                <li>Embedding of a variety of radioactive materials</li>
                <li>Compatibility with existing vectors</li>
                <li>Enhanced targetting a multi-vector approach</li>
                <li>Seamless theranostics</li>
              </ol>
            </div>
          </div>





        </div>


      </div>

      <div className="hero-foot">

       <Partners/>
      </div>
    </header>
  );
};
