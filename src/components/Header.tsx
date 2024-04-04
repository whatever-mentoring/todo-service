import "../styles/header.css";
import { headerBox } from "../styles/header.css";

const Header = () => {
  return (
    <header className={headerBox.header}>
      <h1 className={headerBox.title}>TODO 서비스</h1>
    </header>
  );
};

export default Header;
