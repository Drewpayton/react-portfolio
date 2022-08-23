import 'bootstrap/dist/css/bootstrap.css'
import '../styles/navbar.css'

export default function Navbar({ currentPage, handlePageChange }) {
    return (


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <h2 class="navbar-brand drewText">Drew</h2>
      <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active text-custom"
            onClick={() => handlePageChange('Home')}
            href="#Home"
            className={currentPage === 'Home' ? ' nav-link active text-big' : 'nav-link active text-custom'}
            >
                Home
            </a>
        </li>
        <li class="nav-item">
            <a
                class="nav-link active text-custom"
                onClick={() => handlePageChange('Work')}
                className={currentPage === 'Work' ? ' nav-link active text-big' : 'nav-link active text-custom'}
                href="#My-work">
                My Work
            </a>
        </li>
        <li class="nav-item">
            <a 
                class="nav-link active text-custom space"
                onClick={() => handlePageChange('Contact')} 
                className={currentPage === 'Contact' ? ' nav-link active text-big' : 'nav-link active text-custom'}
                href="#Contact-me">
                    Contact Me
            </a>
        </li>
      </ul>
    </div>
</nav>
    )
}