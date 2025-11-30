import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BentoGrid, BentoItem } from '../UI/BentoGrid';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    span?: string;
}

const PersonalProjects: React.FC = () => {
    const projects: Project[] = [
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
            link: "https://github.com/s4nk37/flow_backend",
            span: "col-span-2"
        },
        {
            title: "Flutter Toolkit",
            description: "A powerful, lightweight CLI assistant to automate Flutter development workflow. Handles project health, code generation, Android/iOS tasks, and release management through an interactive menu.",
            tags: ["Bash", "CLI", "Flutter", "Automation"],
            link: "https://github.com/s4nk37/flutter_toolkit"
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
        <section id="personal-projects" className="section">
            <div className="container">
                <div className="section-title-block">
                    <h2 className="section-title">
                        Personal Projects
                    </h2>
                    <div className="section-title-underline" />
                </div>

                <BentoGrid>
                    {projects.map((project, index) => (
                        <BentoItem
                            key={index}
                            className={project.span}
                            title={project.title}
                            description={project.description}
                            onClick={() => window.open(project.link, '_blank')}
                            header={
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div className="project-icon-placeholder" />
                                    <ExternalLink size={16} style={{ color: 'var(--text-secondary)' }} />
                                </div>
                            }
                        >
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag" style={{ fontSize: '0.75rem' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </BentoItem>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default PersonalProjects;
