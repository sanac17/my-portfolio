// Create a new file called PiTamagotchi.jsx in your src/components folder
import React from 'react';
import './AboutMe.css'; // Use the same CSS file as AboutMe

const PiTamagotchi = ({ onBackClick }) => {
  return (
    <div className="project-page">
      <header>
        <div className="container">
          <nav>
            <div className="logo">Sana Chawla</div>
            <button onClick={onBackClick} className="back-button">
              ← Back to Portfolio
            </button>
          </nav>
        </div>
      </header>

      <div className="container">
        {/* Project header */}
        <div className="project-header">
          <h1 className="project-title">Sign Language Glove Project</h1>
          <p className="project-subtitle">A Raspberry Pi-based glove that can detect ASL alphabets, developed as a class project.</p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">April - May 2025</span>
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
              <li><strong>5 Flex Sensors:</strong> The virtual pet has multiple states that change over time, including hunger, happiness, and energy levels.</li>
              <li><strong>IMU:</strong> A graphical interface displaying the pet and its current status, with animations for different activities.</li>
              <li><strong>VGA Display:</strong> Integration with Raspberry Pi GPIO pins to connect buttons for feeding, playing, and other interactions.</li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <h2 className="section-title">Implementation</h2>
          <div className="section-content">
            <p>The Sign Language Glove was implemented using the following technologies and approaches:</p>

            <div className="tech-grid">
              <span className="tech-item">C</span>
              <span className="tech-item">Raspberry Pi</span>
              <span className="tech-item">Sensor Integrations</span>
              <span className="tech-item">Signal Processing</span>
            </div>

            <p>The core of the application was built with C, utilizing Pygame for rendering the interface and handling animations. We used a state machine design pattern to manage the pet's different states and behaviors.</p>

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
};

export default PiTamagotchi;