import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    details?: string[];
    tags: string[];
    link: string;
    logo?: string;
    category: 'professional' | 'personal';
    span?: string; // e.g., "col-span-2"
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "LesGo Consumer App",
            description: "",
            details: [
                "Contributed to the end-to-end development and migration of LesGo's consumer app, working across Flutter and later in React Native to ensure scalability and consistent design across platforms.",
                "Developed and integrated key modules such as Offers, Reservation, Search, AI chatbots, social/community systems, and real-time chat, with integrations for Razorpay, Firebase, Sentry, and Amplitude.",
                "Resolved multiple performance issues, improving load times, reducing UI flickers, and optimizing API responses, while managing production releases on the Play Store and App Store for stability and analytics readiness."
            ],
            tags: ["React Native", "Flutter", "MobX", "TypeScript", "Firebase", "Socket.io"],
            link: "https://play.google.com/store/apps/details?id=com.lesgo.lesgoapp&hl=en_IN",
            logo: "/LesGo.png",
            category: "professional"
        },
        {
            title: "Flow",
            description: "Todo app with CRUD operations and task reminders, featuring online and offline sync.",
            tags: ["Flutter", "Offline Sync", "CRUD"],
            link: "https://github.com/s4nk37/flow",
            category: "personal"
        },
        {
            title: "Flow Todo Backend",
            description: "A lightweight, modular FastAPI backend for managing Todo items. Built with Poetry, SQLAlchemy, Pydantic, and Alembic.",
            tags: ["Python", "FastAPI", "SQLAlchemy"],
            link: "https://github.com/s4nk37/flow_backend",
            category: "personal",
            span: "col-span-2"
        },
        {
            title: "Flutter Toolkit",
            description: "A powerful, lightweight CLI assistant to automate Flutter development workflow. Handles project health, code generation, Android/iOS tasks, and release management through an interactive menu.",
            tags: ["Bash", "CLI", "Flutter", "Automation"],
            link: "https://github.com/s4nk37/flutter_toolkit",
            category: "personal"
        },
        {
            title: "Chirp",
            description: "Real-time messaging app built with Firebase (Firestore, FCM, Auth, Storage) and push notifications.",
            tags: ["Flutter", "Firebase", "Real-time"],
            link: "https://github.com/s4nk37/chirp",
            category: "personal"
        },
        {
            title: "Komodo Trivia",
            description: "Quiz app built using the Open Trivia DB API, featuring theme selection, multiple question types, and scoring.",
            tags: ["Flutter", "API Integration", "Quiz"],
            link: "https://github.com/s4nk37/komodotrivia",
            category: "personal"
        }
    ];

    const professionalProjects = projects.filter(p => p.category === 'professional');

    const renderProject = (project: Project, index: number) => (
        <div key={index} className="glass" style={{
            padding: '2rem',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            position: 'relative'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            {/* Header: Title and Logo */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
                gap: '1rem'
            }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                    flex: 1
                }}>
                    {project.title}
                </h3>
                {project.logo && (
                    <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        style={{
                            height: '40px',
                            width: 'auto',
                            objectFit: 'contain',
                            flexShrink: 0
                        }}
                    />
                )}
            </div>

            {project.description && (
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>
            )}

            {project.details && (
                <div style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.7'
                }}>
                    {project.details.map((detail, idx) => (
                        <div key={idx} style={{
                            marginBottom: '0.75rem',
                            display: 'flex',
                            gap: '0.75rem',
                            alignItems: 'flex-start'
                        }}>
                            <span style={{
                                color: 'var(--primary-color)',
                                fontSize: '1.2rem',
                                lineHeight: '1.6',
                                flexShrink: 0
                            }}>•</span>
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
                {project.category === 'professional' ? (
                    <>
                        <FaGooglePlay size={16} />
                        View on Play Store
                    </>
                ) : (
                    <>
                        View Project
                        <ExternalLink size={16} />
                    </>
                )}
            </a>
        </div>
    );

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title-block">
                    <h2 className="section-title">
                        Featured Work
                    </h2>
                    <div className="section-title-underline" />
                </div>

                {/* Professional Work */}
                {professionalProjects.length > 0 && (
                    <div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {professionalProjects.map(renderProject)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
