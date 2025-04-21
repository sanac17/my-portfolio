// In AboutMe.jsx, modify the imports
import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const [showPiTamagotchi, setShowPiTamagotchi] = useState(false);

  // Handle scroll for effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your personal information - customize this
  const personalInfo = {
    name: "Sana Chawla",
    bio: "Hello ! My name is Sana Chawla and I am currently an undergraduate Computer Science and ECE student.",

    experience: [
      {
        year: "April 2025 - Present",
        role: "Team Member",
        company: "Sign Language Glove: Class Project",
        description: "Creating a glove that can identify ASL alphabets."
      },
      {
        year: "May 2024 - Aug. 2024",
        role: "Software Engineering Intern",
        company: "Cisco",
        description: "Developed a full-stack web app using React, NodeJS and Python."
      },
      {
        year: "April 2024 - May 2024",
        role: "Team Member",
        company: "Pi-Tamagotchi: Class project",
        description: "Developed a Tamagotchi inspired game on a Raspberry Pi using Python."
      },
      {
        year: "May 2023 - Aug. 2023",
        role: "Software Engineering Intern",
        company: "Safe Security",
        description: "Worked on fine-tuning of LLMs in Amazon SageMaker."
      }
    ],

    skills: [
      { name: "Python, Java, C/C++", level: 90, color: "#4f46e5" },
      { name: "Git, Jira", level: 85, color: "#10b981" },
      { name: "Backend developement", level: 80, color: "#f59e0b" },
      { name: "Computer Architecture/Robotics", level: 75, color: "#3b82f6" },
      { name: "Embedded Software", level: 70, color: "#06b6d4" }
    ],

    interests: [
      { name: "Robotics", icon: "🤖" },
      { name: "Formula 1", icon: "🚗" },
      { name: "Computer Architecture", icon: "💻" },
      { name: "Embedded Systems", icon: "🔌" }
    ],

    contact: {
      email: "sc2347@cornell.edu",
      linkedin: "https://www.linkedin.com/in/sanachawla/",
      github: "https://github.com/sanac17"
    }
  };

  // Pi-Tamagotchi project details page
  const PiTamagotchiProject = () => (
    <div className="project-page">
      <header>
        <div className="container">
          <nav>
            <div className="logo">Sana Chawla</div>
            <button onClick={() => setShowPiTamagotchi(false)} className="back-button">
              ← Back to Portfolio
            </button>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="project-header">
          <h1 className="project-title">Pi-Tamagotchi Project</h1>
          <p className="project-subtitle">A Raspberry Pi-based virtual pet inspired by the classic Tamagotchi, developed as a class project.</p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">April - May 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Developer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Type</span>
              <span className="meta-value">Class Project</span>
            </div>
          </div>
        </div>

        <section className="project-section">
          <h2 className="section-title">Project Overview</h2>
          <div className="section-content">
            <p>The Pi-Tamagotchi project is a modern reimagining of the classic Tamagotchi virtual pet from the 1990s, built using a Raspberry Pi. Our team developed a fully-functional virtual pet that users can feed, play with, and care for, all while learning about embedded systems programming and hardware integration.</p>

            <p>This project involved creating both the software interface using Python and customizing hardware components to provide a seamless user experience. We implemented various pet states (hunger, happiness, energy) with real-time changes based on user interactions and time passage.</p>
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">Key Features</h2>
          <div className="section-content">
            <ul>
              <li><strong>Interactive Pet Simulation:</strong> The virtual pet has multiple states that change over time, including hunger, happiness, and energy levels.</li>
              <li><strong>Custom GUI:</strong> A graphical interface displaying the pet and its current status, with animations for different activities.</li>
              <li><strong>Physical Controls:</strong> Integration with Raspberry Pi GPIO pins to connect buttons for feeding, playing, and other interactions.</li>
              <li><strong>Persistence:</strong> Pet state is saved between sessions, allowing for a continuous experience.</li>
              <li><strong>Mini-games:</strong> Simple games implemented to increase the pet's happiness and provide user engagement.</li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">Implementation</h2>
          <div className="section-content">
            <p>The Pi-Tamagotchi was implemented using the following technologies and approaches:</p>

            <div className="tech-grid">
              <span className="tech-item">Python</span>
              <span className="tech-item">Raspberry Pi</span>
              <span className="tech-item">Pygame</span>
              <span className="tech-item">GPIO</span>
              <span className="tech-item">JSON</span>
            </div>

            <p>The core of the application was built with Python, utilizing Pygame for rendering the interface and handling animations. We used a state machine design pattern to manage the pet's different states and behaviors.</p>

            <div className="code-block">
              <code>
                # Example of our state management system for the virtual pet<br />
                class Pet:<br />
                &nbsp;&nbsp;def __init__(self, name):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br />
                &nbsp;&nbsp;&nbsp;&nbsp;self.hunger = 50  # 0-100 scale<br />
                &nbsp;&nbsp;&nbsp;&nbsp;self.happiness = 50<br />
                &nbsp;&nbsp;&nbsp;&nbsp;self.energy = 100<br />
                &nbsp;&nbsp;&nbsp;&nbsp;self.last_updated = time.time()<br />
              </code>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">Challenges & Learnings</h2>
          <div className="section-content">
            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="card-title">Hardware Integration</h3>
                <p>Integrating physical buttons with the software interface was challenging due to debouncing issues and ensuring responsive feedback.</p>
              </div>
              <div className="learning-card">
                <h3 className="card-title">Embedded Systems</h3>
                <p>Gained valuable experience working with GPIO pins and understanding the limitations and capabilities of embedded devices.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">Conclusion</h2>
          <div className="section-content">
            <p>The Pi-Tamagotchi project was a valuable learning experience that combined software development, hardware integration, and game design principles. Working within the constraints of the Raspberry Pi platform pushed our team to optimize our code and design efficient systems.</p>
          </div>
        </section>
      </div>
    </div>
  );

  // Main render
  if (showPiTamagotchi) {
    return <PiTamagotchiProject />;
  }

  return (
    <div className="portfolio">
      {/* Fixed Navigation Dots */}
      <div className="nav-dots">
        <a href="#intro" className="nav-dot"></a>
        <a href="#experience" className="nav-dot"></a>
        <a href="#skills" className="nav-dot"></a>
        <a href="#interests" className="nav-dot"></a>
        <a href="#contact" className="nav-dot"></a>
      </div>

      {/* Main Content Container */}
      <div className="container">

        {/* Intro Section */}
        <section id="intro" className="section">
          <div className="intro-content">
            <h1 className="name">{personalInfo.name}</h1>
            <div className="name-underline"></div>
            <h2 className="bio">{personalInfo.bio}</h2>

            <div className="button-container">
              <a href="#experience" className="button">Discover My Journey</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title gradient-text">Experiences</h2>

          <div className="timeline">
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className="timeline-item" style={{
                opacity: 1 - (index * 0.1)
              }}>
                <div className="timeline-dot"></div>
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">
                  {exp.company}
                  {/* Add View Details button for Pi-Tamagotchi project */}
                  {exp.company.includes("Pi-Tamagotchi") && (
                    <button
                      onClick={() => setShowPiTamagotchi(true)}
                      className="view-details-button"
                    >
                      View Details →
                    </button>
                  )}
                </h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title gradient-text">Skills</h2>

          <div className="skills-grid">
            {personalInfo.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>

                <div className="skill-bar-container">
                  <div
                    className="skill-bar"
                    style={{
                      width: `${activeSkill === index ? skill.level : 0}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-note">
            <p>Hover over skills to see proficiency levels</p>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="section">
          <h2 className="section-title gradient-text">Beyond Work</h2>

          <div className="interests-grid">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <span className="interest-icon">{interest.icon}</span>
                <span className="interest-name">{interest.name}</span>
              </div>
            ))}
          </div>

          <div className="interests-note">
            <p>When I'm not working, you'll find me exploring these passions and discovering new ones. I believe in a balanced life that fuels creativity and innovation in all areas.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title gradient-text">Get In Touch</h2>

          <div className="contact-links">
            <a href={`mailto:${personalInfo.contact.email}`} className="contact-button">
              <span className="contact-icon">✉️</span>
              <span>Email</span>
            </a>

            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-button">
              <span className="contact-icon">in</span>
              <span>LinkedIn</span>
            </a>

            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="contact-button">
              <span className="contact-icon">gh</span>
              <span>GitHub</span>
            </a>

          </div>

          <div className="contact-note">
            <p>I'm always open to new opportunities, collaborations, or just a friendly conversation. Don't hesitate to reach out!</p>

            <a href="#intro" className="back-to-top">Back to Top</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;