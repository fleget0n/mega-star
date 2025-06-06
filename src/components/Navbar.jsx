import "../styles/Navbar.css"

export const Navbar = ()=>{
    return (
        <nav id="navbar-example2" class="navbar px-3 mb-3">
        <h1 class="navbar-brand" href="#">Navbar</h1>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
              <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
};