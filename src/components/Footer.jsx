const Footer = () => {
    return(
        <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>A brief description of your company or website.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;