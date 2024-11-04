const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-blue-800">
        {/* Company Logo / Name */}
        <div>CompanyName</div>

        {/* Navigation Links */}
        <nav className="flex justify-between items-center gap-4" >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button>Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
