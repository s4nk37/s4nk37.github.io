import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Flow",
            description: "Todo app with CRUD operations and task reminders, featuring online and offline sync.",
            tags: ["Flutter", "Offline Sync", "CRUD"],
            link: "https://github.com/s4nk37/flow"
        },
        {
            title: "Flow Todo Backend",
            description: "A lightweight, modular FastAPI backend for managing Todo items. Built with Poetry, SQLAlchemy, Pydantic, and Alembic.",
            tags: ["Python", "FastAPI", "SQLAlchemy"],
            link: "https://github.com/s4nk37/flow_backend"
        },
        {
            title: "Chirp",
            description: "Real-time messaging app built with Firebase (Firestore, FCM, Auth, Storage) and push notifications.",
            tags: ["Flutter", "Firebase", "Real-time"],
            link: "https://github.com/s4nk37/chirp"
        },
        {
            title: "Komodo Trivia",
            description: "Quiz app built using the Open Trivia DB API, featuring theme selection, multiple question types, and scoring.",
            tags: ["Flutter", "API Integration", "Quiz"],
            link: "https://github.com/s4nk37/komodotrivia"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'center'
                }}>
                    Featured <span className="gradient-text">Work</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link">
                                View Project &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
