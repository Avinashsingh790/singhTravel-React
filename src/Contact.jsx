
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <FontAwesomeIcon icon={faEnvelope} /> Get in <span>Touch</span>
      </h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me through the following platforms:</p>
          <div className="contact-details">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Bihar, India - 841428</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> avinashsingh790320@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +91 12345 67890</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/avinash87/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Avinashsingh790" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="#" method="post">
            <div className="form-group">
              <input type="text" name="name" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea name="message" id="message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="btn">
              Send Message <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
