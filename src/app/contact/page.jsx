export default function ContactPage() {
    return (
        <main className="section contact-section">
            <div className="container card glass">
                <h1>Contact Us</h1>
                <p>
                    <strong>Email:</strong> robotics@amrita.edu
                </p>
                <p>
                    <strong>Phone:</strong> +91 98765 43210
                </p>
                <p>
                    <strong>Outreach Reps:</strong> John Doe (john@example.com), Jane Smith (jane@example.com)
                </p>

                <hr style={{ opacity: ".08", margin: "1.5rem 0" }} />

                <h3>Quick message</h3>
                <form
                    className="contact-form"
                    action="mailto:robotics@amrita.edu"
                    method="GET"
                    encType="text/plain"
                >
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="body" rows="6" placeholder="Your message..." required />
                    <button className="btn primary" type="submit">
                        Send (opens your email)
                    </button>
                </form>
            </div>
        </main>
    );
}
