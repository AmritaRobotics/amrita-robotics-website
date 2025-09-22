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
        { name: "Saikiran Reddy ", role: "Assembly", quote: "Design, test, repeat.", img: "/images/Person/Saikiran.jpg", linkedin: "#https://www.linkedin.com/in/saikiran-reddy-9645ab325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Vamsi Krishna Chalasani", role: "Assembly", quote: "Memento mori, memento vivere (remember you must die so remember to live)", img: "/images/Person/Vamsi.jpg", linkedin: "https://www.linkedin.com/in/vamsi-krishna-chalasani-75b316314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Anandhu G", role: "Assembly", quote: "Truth always seems crazy in the world full of lies.", img: "/images/Person/Anandhu.jpg", linkedin: "https://www.linkedin.com/in/anandhu-ganesh-a47916385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      ]
    },
    {
      name: "Design",
      members: [
        { name: "Nandhith Karthikeyan", role: "Design Lead", quote: "never rest", img: "/images/Person/Nandhith.jpeg", linkedin: "https://www.linkedin.com/in/nandhith-karthikeyan-717993316/" },
        { name: "MADASU AMAN SIDDHARTH", role: "Design", quote: " All our dreams can come true, if we have the courage to pursue them.", img: "/images/Person/Aman.jpg", linkedin: "www.linkedin.com/in/amanpro116" },
        { name: "Monish N Pillay", role: "Design", quote: "Diamonds are made under pressure. Keep at it!", img: "/images/Person/Monish.png", linkedin: "https://www.linkedin.com/in/monishnpillay" },
        { name: "VEGESNA SIDDHARTHA VARMA", role: "Design", quote: "\"If you don't build your dream, someone else will hire you to help them build theirs\" - Dhirubhai Ambani", img: "/images/Person/Siddhartha.jpg", linkedin: "www.linkedin.com/in/siddhartha-varma-789399289" },
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
      ]
    },
    {
      name: "Controls & Software",
      members: [
        { name: "Harshada Yuvaraj", role: "Programming Lead", quote: "Tune the loop.", img: "/images/Person/Harshada.png", linkedin: "www.linkedin.com/in/harshada-yuvaraj" },
        { name: "Ruthvik Sai Kumar. L", role: "Graph Mapping", quote: "Dreams are not what you see in sleep, they are what keep you awake, building.", img: "/images/Person/Ruthvik.png", linkedin: "https://www.linkedin.com/in/ruthvik-sai-kumar-l/" },
        { name: "Harinandan Praveen", role: "Website", quote: "Who dares wins", img: "/images/Person/Hari.jpg", linkedin: "https://www.linkedin.com/in/harinandan-praveen-ab6b82363/" },
      ]
    },
    {
      name: "Marketing",
      members: [
        { name: "Vijayeendra Y", role: "Outreach", quote: "Paths shift when ideas are explored", img: "/images/Person/Vijayeendra.jpg", linkedin: "www.linkedin.com/in/vijayeendra-yalpi-3a7184287" },
        { name: "Pasupuleti Satwik", role: "Outreach", quote: "Participating is important than winning.", img: "/images/Person/Satwik.jpg", linkedin: "https://www.linkedin.com/in/p-satwik-527580348" },
        { name: "S Muthusiva", role: "Outreach", quote: "Education never ends Watson. It is a series of lessons, with the greatest for the last.", img: "/images/Person/Muthusiva.jpg", linkedin: "www.linkedin.com/in/muthusiva-s-302307386" },
        { name: "Pranav PK", role: "Outreach", quote: "The world is full of obvious things which nobody by any chance ever observes.", img: "/images/Person/Pranav.jpg", linkedin: "https://www.linkedin.com/in/pranav-pk-39353b346/" },
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
          <img src={member.img} alt={member.name} />
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.team-card {
  padding: 16px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}
.team-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 12px;
}
.team-card h3 { margin: 8px 0 4px; }
.team-card .role { color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 8px; }
.team-card .quote { font-style: italic; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
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
.team-card .linkedin:hover { background: #4895ef; transform: translateY(-2px); }
.subsystem {
  margin-top: 48px;
  margin-bottom: 16px;
  font-size: 1.5rem;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 4px;
}
</style>
