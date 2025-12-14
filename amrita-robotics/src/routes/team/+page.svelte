<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';

  type Member = {
    name: string;
    role: string;
    quote: string;
    img: string;
    linkedin: string;
  };

  type Subsystem = {
    name: string;
    members: Member[];
  };

  const subsystems: Subsystem[] = [
    {
      name: "Mechanical",
      members: [
        { name: "K.L.Abhiram", role: "Mechanical Lead", quote: "Driven by perfection, fueled by curiosity, and guided by the laws of physics — I build, learn, and refine with every step.", img: "/images/Person/Abhiram.jpg", linkedin: "https://www.linkedin.com/in/kukkadapu-lakshmi-abhiram-a91615290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Saikiran Reddy ", role: "Assembly", quote: "Design, test, repeat.", img: "/images/Person/Saikiran.jpg", linkedin: "https://www.linkedin.com/in/saikiran-reddy-9645ab325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Vamsi Krishna Chalasani", role: "Assembly", quote: "Memento mori, memento vivere (remember you must die so remember to live)", img: "/images/Person/Vamsi.jpg", linkedin: "https://www.linkedin.com/in/vamsi-krishna-chalasani-75b316314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Anandhu G", role: "Assembly", quote: "Truth always seems crazy in the world full of lies.", img: "/images/Person/Anandhu.jpg", linkedin: "https://www.linkedin.com/in/anandhu-ganesh-a47916385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Adityaa Raghuram", role: "Assembly", quote: "Always be yourself no matter what,even if it sounds silly or dumb,it sucks not to be liked but it sucks even more not being yourself", img: "/images/Person/Adityaa.jpg", linkedin: "https://www.linkedin.com/in/adityaa-raghuram-207299372" },
        { name: "Pranav Vipin Pillai", role: "Assembly", quote: "Fortune Favours The Brave", img: "/images/Person/Pranav_V.jpg", linkedin: "https://www.linkedin.com/in/pranav-vipin-pillai-872723333/" },
        { name: "Anish Koduganti", role: "Assembly", quote: "Hesitation is defeat", img: "/images/Person/Anish.jpeg", linkedin: "https://www.linkedin.com/in/anish-koduganti-13991a29a/" },
        { name: "V. Sonika", role: "Assembly", quote: "If you can dream it, you can do it.", img: "/images/Person/Sonika.jpg", linkedin: "https://www.linkedin.com/in/sonika-v-491426372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Kotla Vennela ", role: "Assembly", quote: "Clarity comes from persistence, not shortcuts", img: "/images/Person/Vennela.jpg", linkedin: "https://www.linkedin.com/in/kotla-vennela-42bb3b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
      ]
    },
    {
      name: "Design",
      members: [
        { name: "Monish N Pillay", role: "Project Lead", quote: "Diamonds are made under pressure. Keep at it!", img: "/images/Person/Monish.png", linkedin: "https://www.linkedin.com/in/monishnpillay" },
        { name: "VEGESNA SIDDHARTHA VARMA", role: "Project Manager", quote: "\"If you don't build your dream, someone else will hire you to help them build theirs\" - Dhirubhai Ambani", img: "/images/Person/Siddhartha.jpg", linkedin: "https://www.linkedin.com/in/siddhartha-varma-789399289" },
        { name: "Nandhith Karthikeyan", role: "Design Lead", quote: "never rest", img: "/images/Person/Nandhith.jpeg", linkedin: "https://www.linkedin.com/in/nandhith-karthikeyan-717993316/" },
        { name: "S Sarvesh", role: "Hardware Manager", quote: "Necessity is the mother of invention", img: "/images/Person/Sarvesh.png", linkedin: "https://www.linkedin.com/in/sarvesh-s-7940a220b/" },
        { name: "MADASU AMAN SIDDHARTH", role: "Design", quote: " All our dreams can come true, if we have the courage to pursue them.", img: "/images/Person/Aman.jpg", linkedin: "https://www.linkedin.com/in/amanpro116" },
        { name: "Roopavani S.D", role: "Design", quote: "\"You never fail until you stop trying.\"", img: "/images/Person/Roopavani.jpg", linkedin: "https://www.linkedin.com/in/roopa-1253a19m08" }
      ]
    },
    {
      name: "Electrical",
      members: [
        { name: "HIRUTHIK M S", role: "Electrical Lead", quote: "Be positive in even the worst possible situations", img: "/images/Person/Hiruthik.jpg", linkedin: "https://www.linkedin.com/in/hiruthik-m-s-227913277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf%2B6p5jg0QRSooQ4AkI%2Fy%2Fw%3D%3D" },
        { name: "KOLATHUR BHUVAN REDDY", role: "Electrical", quote: "Talent Wins the game but teamwork and intelligence wins championships", img: "/images/Person/Bhuvan.jpg", linkedin: "https://www.linkedin.com/in/kolathur-bhuvan-reddy/" },
        { name: "Nishit Agarwal", role: "Electrical", quote: "Uhhh What's my, job?", img: "/images/Person/Nishit.jpg", linkedin: "https://www.linkedin.com/in/nishit-agarwal-408438217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Elluru Sahith ", role: "Electrical", quote: "The better way to predict the future is to create it", img: "/images/Person/Sahith.jpg", linkedin: "https://www.linkedin.com/in/e-sahith-946578317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Mohit Sai Polisetty", role: "Electrical", quote: "Never put off until tomorrow what you can put off until the day after tomorrow.", img: "/images/Person/Mohit.jpg", linkedin: "https://www.linkedin.com/in/mohit-sai-polisetty-089b68275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "SINGAM BHAVESH REDDY", role: "Electrical", quote: "The best way to create the future is to create it", img: "/images/Person/Bhavesh.jpg", linkedin: "https://www.linkedin.com/in/singam-bhavesh-reddy-868752310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
]
    },
    {
      name: "Controls & Software",
      members: [
        { name: "Ruthvik Sai Kumar. L", role: "CS Lead", quote: "Dreams are not what you see in sleep, they are what keep you awake, building.", img: "/images/Person/Ruthvik.png", linkedin: "https://www.linkedin.com/in/ruthvik-sai-kumar-l/" },
        { name: "Anirudh A C", role: "Software Manager", quote: "You're not dreaming big enough if people don't call you crazy", img: "/images/Person/Anirudh.jpg", linkedin: "https://www.linkedin.com/in/AnirudhAC" },
        { name: "Harshada Yuvaraj", role: "CV Specialist", quote: "Tune the loop.", img: "/images/Person/Harshada.png", linkedin: "https://www.linkedin.com/in/harshada-yuvaraj" },
        { name: "Harinandan Praveen", role: "Website", quote: "Who dares wins", img: "/images/Person/Hari.jpg", linkedin: "https://www.linkedin.com/in/harinandan-praveen-ab6b82363/" },
        { name: "Volety Simha Sathvik", role: "Computer Science", quote: "If you're afraid to fail, then you're probably going to fail.", img: "/images/Person/Sathvik.jpg", linkedin: "https://www.linkedin.com/in/sathvik-volety-a0105415a" },
        { name: "Nihal Paleti", role: "Data Engineer", quote: "Learning is an active process, we learn by doing. only knowledge that is used sticks in your mind ", img: "/images/Person/Nihal.jpg", linkedin: "https://www.linkedin.com/in/nihal-paleti-06545b1b1/" },
      ]
    },
    {
      name: "Marketing",
      members: [
        { name: "Pranav PK", role: "Sponsorship Lead", quote: "The world is full of obvious things which nobody by any chance ever observes.", img: "/images/Person/Pranav.jpg", linkedin: "https://www.linkedin.com/in/pranav-pk-39353b346/" },
        { name: "Vijayeendra Y", role: "Financial Lead", quote: "Paths shift when ideas are explored", img: "/images/Person/Vijayeendra.jpg", linkedin: "https://www.linkedin.com/in/vijayeendra-yalpi-3a7184287" },
        { name: "Pasupuleti Satwik", role: "Outreach", quote: "Participating is important than winning.", img: "/images/Person/Satwik.jpg", linkedin: "https://www.linkedin.com/in/p-satwik-527580348" },
        { name: "S Muthusiva", role: "Outreach", quote: "Education never ends Watson. It is a series of lessons, with the greatest for the last.", img: "/images/Person/Muthusiva.jpg", linkedin: "https://www.linkedin.com/in/muthusiva-s-302307386" },
        { name: "CHILUKURI ROHAN SASHANK REDDY ", role: "Outreach", quote: "\"It is by going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure,\" from Joseph Campbell.", img: "/images/Person/Rohan.jpg", linkedin: "https://www.linkedin.com/in/chilukuri-rohan-sashank-reddy-undefined-aa169336a" },
        { name: "Tanish Yella", role: "Outreach", quote: "Fall seven times and stand up eight", img: "/images/Person/Tanish.jpg", linkedin: "https://www.linkedin.com/in/tanish-yella-378578322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Aravind Sri Ram S", role: "Outreach", quote: "Never accept a price that diminishes the value of your platform. Your fee is not a cost to the brand; it is the calculated rental price for your trust, credibility, and access to your community.", img: "/images/Person/Aravind.jpg", linkedin: "https://www.linkedin.com/in/aravind-sri-ram-86648a382" },
        { name: "Sudarshan Suresh", role: "Outreach", quote: "The world is ruled by fear. Fear of others, fear of the future", img: "/images/Person/Sudharshan.jpg", linkedin: "https://www.linkedin.com/in/sudarshan-suresh-6a9074329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Kaustubh Narayan Kalpathy", role: "Outreach", quote: "God gave me one life... I’m here to make it count", img: "/images/Person/Kaustubh.jpeg", linkedin: "http://www.linkedin.com/in/kaustubh-kalpathy-72175a360" }
      ]
    }
  ];
</script>

<Navbar currentPage="team" />

<main class="section container">
  <h1 class="section-title">Our Team</h1>
  <p class="section-lead">Grouped by subsystem — click LinkedIn to view profiles.</p>

  {#each subsystems as subsystem}
    <h2 class="subsystem">{subsystem.name}</h2>
    <div class="team-grid">
      {#each subsystem.members as member}
        <article class="team-card glass">
          <div class="card-image">
            <img src={member.img} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <p class="role">{member.role}</p>
          <p class="quote">"{member.quote}"</p>
          <a class="linkedin" href={member.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </article>
      {/each}
    </div>
  {/each}
</main>

<Footer />

<style>
.section { padding: 64px 0; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .team-grid { grid-template-columns: 1fr; }
}

.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
  min-height: 380px; /* Keep card height consistent */
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.5);
}

main.container {
  margin: 60px auto;
  padding-left: 16px;
  padding-right: 16px;
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 12px;
}

.team-card h3 { margin: 8px 0 4px; }

.team-card .role {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.team-card .quote {
  font-style: italic;
  color: rgba(255,255,255,0.6);
  margin-bottom: 12px;
  font-size: 0.85rem;
}

.team-card .linkedin {
  display: inline-block;
  padding: 6px 12px;
  background: #4cc9f0;
  color: #fff;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: 0.3s;
}

.team-card .linkedin:hover {
  background: #4895ef;
  transform: translateY(-2px);
}

.subsystem {
  margin-top: 48px;
  margin-bottom: 16px;
  font-size: 1.5rem;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 4px;
}
</style>