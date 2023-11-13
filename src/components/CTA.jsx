import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together.
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </p>
    </section>
  );
}

export default CTA;
