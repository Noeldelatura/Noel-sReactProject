import "./Footer.scss";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


function Footer() {



    return (
        <footer className="bg-pink-100  dark:bg-pink-200 p-3 text-black  dark:text-pink-500 text-center rounded-t-lg flex row gap-3 justify-center items-center mt-4 footer-style">


            © 2024  All Rights Reserved to Noel de la tura!!
            <a href="https://www.facebook.com/profile.php?id=100021466030557&mibextid=LQQJ4d"><FaFacebookSquare className="color-footer " /></a>
            <a href="https://www.instagram.com/nelly.de.la.tura?igsh=MWJvNGZlMmdoeXpmZw=="><FaInstagramSquare className="color-footer " /></a>

        </footer>
    );
}

export default Footer;