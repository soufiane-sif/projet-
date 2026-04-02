

function Header() {
  return (
    <div className="App">
      
        <img src="https://assets.nicepagecdn.com/d2cc3eaa/6414576/images/logo-image.png" alt="Logo de mon site" />

        <nav>
          <a href="Home">home</a>
          <a href="Home">About me</a>
          <a href="Home">Pages</a>
          <a href="Home">Contact</a>
        </nav>
        
        <div>
          <button className="btn"> <strong>Book An Appointment</strong> </button>
        </div>
        
    </div>
  );
}

export default Header;