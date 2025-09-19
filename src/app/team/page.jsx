import TeamCard from "@/components/TeamCard";

const teamData = [
    {
        subsystem: "Mechanical",
        members: [
            { name: "John Doe", role: "Mechanical Lead", quote: "Gears and grit.", img: "/images/person.webp", linkedin: "#" },
            { name: "Asha Patel", role: "Mechanics", quote: "Design, test, repeat.", img: "/images/person.webp", linkedin: "#" },
            { name: "Ravi Kumar", role: "CAD", quote: "Sketching the future.", img: "/images/person.webp", linkedin: "#" },
        ],
    },
    {
        subsystem: "Electronics",
        members: [
            { name: "Priya Rao", role: "Electronics Lead", quote: "Signals tell the story.", img: "/images/person.webp", linkedin: "#" },
            { name: "Karthik S", role: "PCB & Sensors", quote: "Sensors are our eyes.", img: "/images/person.webp", linkedin: "#" },
        ],
    },
    {
        subsystem: "Controls & Software",
        members: [
            { name: "Maya Thomas", role: "Controls Lead", quote: "Tune the loop.", img: "/images/person.webp", linkedin: "#" },
            { name: "Arjun B", role: "Embedded Software", quote: "From code to motion.", img: "/images/person.webp", linkedin: "#" },
        ],
    },
    {
        subsystem: "Management & Outreach",
        members: [
            { name: "Nina George", role: "Team Lead", quote: "People first.", img: "/images/person.webp", linkedin: "#" },
            { name: "Sam Wilson", role: "Outreach", quote: "Connecting the dots.", img: "/images/person.webp", linkedin: "#" },
        ],
    },
];

export default function TeamPage() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="section-title">Our Team</h1>
                <p className="section-lead">
                    Grouped by subsystem — click LinkedIn to view profiles.
                </p>

                {teamData.map((group) => (
                    <section key={group.subsystem}>
                        <h2 className="subsystem">{group.subsystem}</h2>
                        <div className="team-grid">
                            {group.members.map((member) => (
                                <TeamCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
