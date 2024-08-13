export const Navbar = () => {
  return (
    <nav className="columns is-centered my-2">
        <div className="column is-6">
        <div className="box is-rounded p-0 m-3 m-5-tablet">
          <div className="navbar p-1 is-rounded">
            <div className="navbar-brand">
              <a className="navbar-item is-rounded " href="#">
                <span>⚫️</span>
                <span>Aken Medical</span>
              </a>

              <a role="button" className="navbar-burger " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
