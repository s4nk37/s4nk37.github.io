import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa';

interface Project {
    title: string;
    description: string | React.ReactNode;
    details?: React.ReactNode[];
    tags: string[];
    link: string;
    logo?: string;
    category: 'professional' | 'personal';
    span?: string; // e.g., "col-span-2"
}

interface ProjectsProps {
    displayCategory?: 'professional' | 'personal';
}

const Projects: React.FC<ProjectsProps> = ({ displayCategory }) => {
    const projects: Project[] = [
        {
            title: "LesGo Consumer App",
            description: "",
            details: [
                <span>Contributed to the <strong style={{ color: 'var(--text-primary)' }}>end-to-end development</strong> and <strong style={{ color: '#4ade80' }}>migration</strong> of LesGo's consumer app, working across Flutter and later in React Native to ensure scalability and consistent design across platforms.</span>,
                <span>Developed and integrated key modules such as Offers, Reservation, Search, <strong style={{ color: 'var(--text-primary)' }}>AI chatbots</strong>, <strong style={{ color: 'var(--text-primary)' }}>social/community systems</strong>, and real-time chat, with integrations for Razorpay, Firebase, Sentry, and Amplitude.</span>,
                <span>Resolved multiple performance issues, <strong style={{ color: '#4ade80' }}>slashing load times from 17s to 3s</strong>, reducing UI flickers, and optimizing API responses, while managing production releases on the Play Store and App Store for stability and analytics readiness.</span>
            ],
            tags: ["React Native", "Flutter", "MobX", "TypeScript", "Firebase", "Socket.io"],
            link: "https://play.google.com/store/apps/details?id=com.lesgo.lesgoapp&hl=en_IN",
            logo: "/LesGo.png",
            category: "professional"
        },
        {
            title: "Flow",
            description: <span>Todo app with <strong style={{ color: 'var(--text-primary)' }}>CRUD operations</strong> and task reminders, featuring online and <strong style={{ color: '#4ade80' }}>offline sync</strong>.</span>,
            tags: ["Flutter", "Offline Sync", "CRUD"],
            link: "https://github.com/s4nk37/flow",
            category: "personal"
        },
        {
            title: "Flow Todo Backend",
            description: <span>A <strong style={{ color: 'var(--text-primary)' }}>lightweight, modular</strong> <strong style={{ color: '#4ade80' }}>FastAPI backend</strong> for managing Todo items. Built with Poetry, SQLAlchemy, Pydantic, and Alembic.</span>,
            tags: ["Python", "FastAPI", "SQLAlchemy"],
            link: "https://github.com/s4nk37/flow_backend",
            category: "personal",
            span: "col-span-2"
        },
        {
            title: "Flutter Toolkit",
            description: <span>A powerful, lightweight CLI assistant to <strong style={{ color: '#4ade80' }}>automate Flutter development workflow</strong>. Handles <strong style={{ color: 'var(--text-primary)' }}>project health</strong>, code generation, Android/iOS tasks, and release management through an interactive menu.</span>,
            tags: ["Bash", "CLI", "Flutter", "Automation"],
            link: "https://github.com/s4nk37/flutter_toolkit",
            category: "personal"
        },
        {
            title: "Chirp",
            description: <span><strong style={{ color: '#4ade80' }}>Real-time messaging app</strong> built with <strong style={{ color: 'var(--text-primary)' }}>Firebase</strong> (Firestore, FCM, Auth, Storage) and push notifications.</span>,
            tags: ["Flutter", "Firebase", "Real-time"],
            link: "https://github.com/s4nk37/chirp",
            category: "personal"
        },
        {
            title: "Komodo Trivia",
            description: <span>Quiz app built using the <strong style={{ color: '#4ade80' }}>Open Trivia DB API</strong>, featuring <strong style={{ color: 'var(--text-primary)' }}>theme selection</strong>, multiple question types, and scoring.</span>,
            tags: ["Flutter", "API Integration", "Quiz"],
            link: "https://github.com/s4nk37/komodotrivia",
            category: "personal"
        }
    ];

    const professionalProjects = projects.filter(p => p.category === 'professional');
    const personalProjects = projects.filter(p => p.category === 'personal');

    const renderProject = (project: Project, index: number) => (
        <div key={index} className="project-card"
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
        <section id={displayCategory === 'personal' ? "personal-projects" : "projects"} className="section">
            <div className="container">
                {(!displayCategory || displayCategory === 'professional') && (
                    <div className="section-title-block">
                        <h2 className="section-title">
                            Featured Work
                        </h2>
                        <div className="section-title-underline" />
                    </div>
                )}

                {/* Professional Work */}
                {(!displayCategory || displayCategory === 'professional') && professionalProjects.length > 0 && (
                    <div style={{ marginBottom: displayCategory ? 0 : '4rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {professionalProjects.map(renderProject)}
                        </div>
                    </div>
                )}

                {/* Personal Projects section title */}
                {(!displayCategory || displayCategory === 'personal') && (
                    <div className="section-title-block">
                        <h2 className="section-title">
                            Personal Projects
                        </h2>
                        <div className="section-title-underline" />
                    </div>
                )}

                {/* Personal Projects */}
                {(!displayCategory || displayCategory === 'personal') && personalProjects.length > 0 && (
                    <div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {personalProjects.map(renderProject)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
