import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header
      className="d-flex align-items-center"
      style={{ padding: "20px 50px 0 50px" }}
    >
      <img src={logo} alt="RocketMusic" height="45px" />
      <h2 className="ml-4 font-weight-bold">Dashboard da Gravadora</h2>
    </header>
  );
};

export default Header;
