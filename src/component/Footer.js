
import { Link } from "react-router-dom";
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  
    return (
        <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="#">
                <FaFacebookSquare/>
                </a>
                <a href="#">
                <FaTwitterSquare/>
                </a>
                <a href="#">
                <FaInstagram/>
                </a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/" className="nav-item nav-link active" id="Home">Home</Link></li>
                <li class="list-inline-item"><Link to="/contact" className="nav-item nav-link" id="Contact">Contact</Link></li>
                <li class="list-inline-item"><Link to="/about" className="nav-item nav-link">About</Link></li>
                <li class="list-inline-item"><Link to="/quote" className="nav-item nav-link">Get a Quote</Link></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">FFS Logistics © 2022</p>
        </footer>
    </div>


        
    )
}




export default Footer;