
const Header = () => {
  return (
    <header>
      <div>
        {/* Company Logo / Name */}
        <div>
          CompanyName
        </div>

        {/* Navigation Links */}
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Login Button */}
        <div>
          <button>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
