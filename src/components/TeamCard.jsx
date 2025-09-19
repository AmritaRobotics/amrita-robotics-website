export default function TeamCard({ name, role, quote, img, linkedin }) {
    return (
        <article className="team-card glass">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <p className="quote">"{quote}"</p>
            <a
                className="linkedin"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
        </article>
    );
}
