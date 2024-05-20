import "./Header.scss";
import Navbar from "../NavBar/NavBar";


function Header() {

  return (
    <header className="bg-pink-100 p-3 dark:bg-pink-200 text-black text-5xl font-extralight  text-center rounded-b-lg shadow-md mb-5 header-style">

      <Navbar />
    </header>
  );
}

export default Header;
