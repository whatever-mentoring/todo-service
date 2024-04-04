import "../styles/header.css";
import { headerBox } from "../styles/header.css";

const Header = () => {
  return (
    <header className={headerBox.header}>
      <h1 className={headerBox.title}>What's Your To-Do?</h1>
    </header>
  );
};

export default Header;
