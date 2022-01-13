import logo from '../images/letter-m(1).png';


const Header = () => {
    var Img = <img src={logo}/>
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand  navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt=""/>Michal Cakes</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home </a>
              </li>
              </ul>
          </div>
        </nav>
      </div>
    )
  }

export default Header