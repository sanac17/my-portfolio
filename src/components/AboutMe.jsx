// In AboutMe.jsx, modify the imports
import React, { useState, useEffect } from 'react';
import './AboutMe.css';


const AboutMe = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const [showPiTamagotchi, setShowPiTamagotchi] = useState(false);
  // Inside your AboutMe component, add this state
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeExpCard, setActiveExpCard] = useState(null);

  // Add this near your other useEffect hooks
  useEffect(() => {
    if (showPiTamagotchi) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [showPiTamagotchi]);

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
    bio: "I’m currently a Computer Science and ECE student passionate about building technology that bridges hardware and software. I enjoy working on embedded systems, architecture, and systems design. Outside class, you’ll find me exploring music, the outdoors, or Formula 1.",

    experience: [
      {
        id: 1,
        year: "April 2025 - May 2025",
        role: "Lead Developer",
        company: "ASL Interpreter: Class Project",
        description: "Designed and developed a glove that can detect ASL alphabets.",
        icon: "🧤",
        className: "exp-1",
        skills: ["Hardware", "Signal Processing", "Sensors", "Accessibility"],
        hasDetails: true
      },
      {
        id: 2,
        year: "May 2024 - Aug. 2024",
        role: "Software Engineering Intern",
        company: "Cisco",
        description: "Developed a full-stack web app using React, NodeJS and Python.",
        icon: "🌐",
        className: "exp-2",
        skills: ["React", "NodeJS", "Python", "CI/CD", "API Development"]
      },
      {
        id: 3,
        year: "April 2024 - May 2024",
        role: "Lead Developer",
        company: "Pi-Tamagotchi: Class project",
        description: "Developed a Tamagotchi inspired game on a Raspberry Pi using Python.",
        icon: "🎮",
        className: "exp-3",
        skills: ["Python", "Raspberry Pi", "GPIO", "Pygame", "IoT"],
        hasDetails: true
      },
      {
        id: 4,
        year: "May 2023 - Aug. 2023",
        role: "Software Engineering Intern",
        company: "Safe Security",
        description: "Worked on fine-tuning of LLMs in Amazon SageMaker.",
        icon: "🔒",
        className: "exp-4",
        skills: ["AWS", "SageMaker", "LLMs", "Python", "Machine Learning"]
      }
    ],

    skills: [
      { name: "Python, Java, C/C++", level: 90, color: "#4f46e5" },
      { name: "Git, Jira", level: 85, color: "#10b981" },
      { name: "Backend developement", level: 70, color: "#f59e0b" },
      { name: "Computer Architecture", level: 75, color: "#3b82f6" },
      { name: "Embedded Software", level: 70, color: "#06b6d4" },
      { name: "Robotics", level: 70, color: "#06b6d4" }
    ],

    contact: {
      email: "sc2347@cornell.edu",
      linkedin: "https://www.linkedin.com/in/sanachawla/",
      github: "https://github.com/sanac17"
    }
  };

  const handleExpCardClick = (id) => {
    setActiveExpCard(activeExpCard === id ? null : id);
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
      {/* Navigation Header */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">SC</div>
          <nav className="nav-links">
            <a href="#intro">Home</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a
              href={process.env.PUBLIC_URL + '/SanaChawla_Resume_pdf_main.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              CV
            </a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Fixed Navigation Dots */}
      <div className="nav-dots">
        <a href="#intro" className="nav-dot"></a>
        <a href="#experience" className="nav-dot"></a>
        <a href="#skills" className="nav-dot"></a>
        <a href="#cv" className="nav-dot"></a>
        <a href="#contact" className="nav-dot"></a>
      </div>

      {/* Main Content Container */}
      <div className="container">
        {/* Intro Section */}
        <section id="intro" className="section">
          <div className="aboutme-landing">
            <div className="aboutme-container">
              <div className="aboutme-photo">
                <img
                  src={process.env.PUBLIC_URL + '/IMG_0980.JPG'}
                  alt="Sana Chawla"
                  className="aboutme-img"
                />
              </div>
              <div className="aboutme-text">
                <h1 className="aboutme-title">Hi, I'm Sana!</h1>
                <p className="aboutme-description">
                  I am currently a Computer Science and ECE senior at Cornell University.
                  I enjoys working on embedded software, computer architecture, and robotics projects. I will be pursuing my MEng in CS from Cornell University.
                </p>
                <div className="button-container">
                  <a href="#experience" className="button">Discover My Journey</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - NEW PICTORIAL VERSION */}
        <section id="experience" className="section experiences-section">
          <h2 className="section-title gradient-text">My Journey</h2>

          <div className="timeline-vertical">
            {personalInfo.experience.map((exp, index) => (
              <div key={exp.id} className="exp-timeline-item">
                {/* Timeline dot */}
                <div className="exp-timeline-dot"></div>

                {/* Date badge */}
                <div className="exp-timeline-date">{exp.year}</div>

                {/* Experience card */}
                <div
                  className={`exp-card ${exp.className}`}
                  onClick={() => handleExpCardClick(exp.id)}
                  style={{
                    transform: activeExpCard === exp.id ? 'translateY(-8px)' : 'none',
                    boxShadow: activeExpCard === exp.id ? '0 12px 24px rgba(0, 0, 0, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Icon */}
                  <div className="exp-icon">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <h3 className="exp-title">{exp.company.split(':')[0]}</h3>
                  <p className="exp-role">{exp.role}</p>
                  <p className="exp-description">{exp.description}</p>

                  {/* Skills */}
                  <div className="exp-skills-container">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>

                  {/* View Details button for Pi-Tamagotchi */}
                  {exp.hasDetails && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPiTamagotchi(true);
                      }}
                      className="view-details-button"
                      style={{ marginTop: '15px', marginLeft: '0' }}
                    >
                      View Details →
                    </button>
                  )}
                </div>
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