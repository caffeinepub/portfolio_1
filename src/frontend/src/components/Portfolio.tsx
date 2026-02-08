import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const sections = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur z-50">
        <ul className="flex justify-center gap-8 py-4 text-sm uppercase tracking-widest">
          {sections.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">T BHARATH</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300">
            <TypeAnimation />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 max-w-5xl mx-auto px-6">
        <div className="bg-gray-900/60 backdrop-blur rounded-3xl p-10 shadow-xl animate-fade-in-view">
          <h2 className="text-4xl font-semibold mb-6 tracking-wide animate-slide-in-left">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg animate-fade-in-delay-1">
            I am a passionate third-year engineering student focused on building elegant, scalable, and user-centric digital solutions. My core expertise lies in Full Stack Web Development using modern technologies such as React, JavaScript, Node.js, Firebase, and responsive UI frameworks. I am also exploring AI automation by building practical tools such as news summarizers, automated content posters, and scheduling bots.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-4 animate-fade-in-delay-2">
            I enjoy transforming complex problems into simple, beautiful interfaces with smooth animations and thoughtful user experiences. I actively work on real-world projects involving web applications, AI-powered automation, machine learning, data analytics, and dashboards, focusing on solving everyday problems through smart and efficient systems while continuously upskilling myself to stay industry-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-delay-3">
            {["Full Stack Developer", "Front End Developer", "Back End Developer", "UI/UX Enthusiast", "AI & Automation Learner", "Data Analyst"].map((role) => (
              <span key={role} className="px-5 py-2 rounded-full border border-cyan-400/40 text-cyan-400 text-sm tracking-wide">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-black/40">
        <h2 className="text-3xl text-center font-semibold mb-12 animate-fade-in-view">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillCard title="Development" items={["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase", "Tailwind CSS"]} />
          <SkillCard title="Programming & Databases" items={["Python", "Java", "SQL", "NoSQL"]} />
          <SkillCard title="AI & Machine Learning (Basics)" items={["Artificial Intelligence", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"]} />
          <SkillCard title="Data & Visualization" items={["Power BI", "Data Analysis", "Dashboards & KPIs", "Data Visualization"]} />
          <div className="md:col-span-2">
            <SkillCard title="Design & Tools" items={["UI/UX Design", "Responsive Design", "Git & GitHub", "API Integration", "Netlify", "Vercel"]} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center animate-fade-in-view">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-12">
          <ProjectCard
            title="AI Voice Assistant using LiveKit"
            desc="A real-time AI-powered voice assistant built using LiveKit that enables seamless low-latency voice communication."
            tech={["LiveKit", "Python", "GPT-LLM API"]}
          />

          <ProjectCard
            title="Traffic Flow Optimization using Machine Learning"
            desc="Machine Learning based system to analyze traffic patterns, predict congestion, and optimize traffic flow."
            tech={["Python", "Machine Learning", "Traffic Analysis", "Bolt"]}
            link="https://majestic-cupcake-818511.netlify.app/"
          />

          <ProjectCard
            title="E-Commerce Sales Dashboard (Power BI)"
            desc="Interactive Power BI dashboard visualizing sales performance, customer behavior, product trends, and KPIs."
            tech={["Power BI", "DAX", "KPIs", "Data Visualization"]}
          />

          <ProjectCard
            title="Aadhaar Enrolment & Update Analytics Dashboard"
            desc="Power BI dashboard using UIDAI datasets to uncover trends, regional patterns, and operational insights."
            tech={["Power BI", "UIDAI Dataset", "Public Sector Analytics"]}
          />

          <ProjectCard
            title="Online Registration System"
            desc="Responsive online registration system with validation, clean UI, and smooth UX."
            tech={["HTML", "CSS", "JavaScript", "Form Validation"]}
            link="https://leafy-concha-5faaf5.netlify.app/"
          />
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 animate-fade-in-view">
          Resume
        </h2>
        <p className="text-gray-300 mb-8">Download my resume to know more about my skills, projects, and experience.</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="inline-block px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
          Download Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-black/40 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={32} /></a>
          <a href="https://www.linkedin.com/in/kingston-r-7b845239b/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={32} /></a>
          <a href="mailto:bharathgokul3248@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={32} /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>© 2026. Built with love using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">caffeine.ai</a>.</p>
      </footer>
    </div>
  );
}

function TypeAnimation() {
  const roles = [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "UI/UX Enthusiast",
    "AI & Automation Learner",
    "Data Analyst",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1);
        } else {
          return currentRole.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-cyan-400 font-semibold">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-900/70 rounded-3xl p-8 shadow-xl animate-fade-in-view">
      <h3 className="text-xl font-semibold text-cyan-400 mb-6">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {items.map((skill) => (
          <span key={skill} className="px-5 py-2 rounded-full bg-black/40 border border-cyan-400/30 text-sm text-cyan-300">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }: { title: string; desc: string; tech: string[]; link?: string }) {
  return (
    <div className="bg-gray-900/70 backdrop-blur rounded-3xl p-10 shadow-xl animate-fade-in-view">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-lg mb-4">{desc}</p>
      <div className="flex flex-wrap gap-3 mb-6">
        {tech.map((t) => (
          <span key={t} className="px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-400 text-sm">{t}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
          Live Demo
        </a>
      )}
    </div>
  );
}
