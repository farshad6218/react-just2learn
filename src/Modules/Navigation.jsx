export function Navigation(){
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container px-4">
              <a className="navbar-brand" href="#page-top">Start Page</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><a className="nav-link" href="/">Home</a></li>

                  </ul>
              </div>
          </div>
        </div>
        )
}