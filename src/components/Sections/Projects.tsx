import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Globe } from 'lucide-react';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { projectsData, type Project } from '../../data/projectsData';

const Projects: React.FC = () => {
    const navigate = useNavigate();

    // Show only the first 4 projects on the home page
    const displayedProjects = projectsData.slice(0, 4);

    const renderProjectLinks = (project: Project) => {
        const hasPlayStore = project.link && !project.link.includes('apple.com') && !project.link.includes('ginn.ai') && !project.link.includes('echargeup.com');
        const hasAppStore = !!project.appStoreLink;
        const hasWebsite = !!project.websiteLink;
        const isPersonal = project.category === 'personal';

        if (isPersonal) {
            return (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    View Project
                    <ExternalLink size={16} />
                </a>
            );
        }

        return (
            <div className="project-links-row">
                {hasPlayStore && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-store-link"
                        aria-label="Google Play Store"
                        title="Play Store"
                    >
                        <FaGooglePlay size={15} />
                        <span>Play Store</span>
                    </a>
                )}
                {hasAppStore && (
                    <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-store-link"
                        aria-label="App Store"
                        title="App Store"
                    >
                        <FaAppStoreIos size={17} />
                        <span>App Store</span>
                    </a>
                )}
                {hasWebsite && (
                    <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-store-link"
                        aria-label="Website"
                        title="Website"
                    >
                        <Globe size={15} />
                        <span>Website</span>
                    </a>
                )}
            </div>
        );
    };

    const renderProject = (project: Project, index: number) => {
        const isFullWidth = index < 2; // Hubblemeet and LesGo are 1 full-width item each, Dandar Patient & Doctor are side-by-side in 2-column grid

        return (
            <div
                key={index}
                className={`project-card ${isFullWidth ? 'project-card-full' : ''}`}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                {/* Header: Title and Logo on the right on same line */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '1rem'
                }}>
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        margin: 0,
                        flex: 1
                    }}>
                        {project.title}
                    </h3>
                    {(project.logo || project.image) && (
                        <img
                            src={project.logo || project.image}
                            alt={`${project.title} logo`}
                            className={`project-logo ${project.logo ? 'project-logo-contain' : ''}`}
                        />
                    )}
                </div>

                {project.description && (
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {project.description}
                    </p>
                )}

                {project.details && (
                    <div style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '1.25rem',
                        lineHeight: '1.7',
                        fontSize: '0.9rem',
                    }}>
                        {project.details.map((detail, idx) => (
                            <div key={idx} style={{
                                marginBottom: '0.5rem',
                                display: 'flex',
                                gap: '0.75rem',
                                alignItems: 'flex-start'
                            }}>
                                <span style={{
                                    color: 'var(--primary-color)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                    flexShrink: 0
                                }}>•</span>
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>

                {renderProjectLinks(project)}
            </div>
        );
    };

    return (
        <section id="work" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        marginBottom: 'var(--spacing-lg)'
                    }}
                >
                    <div className="section-title-block" style={{ marginBottom: 0 }}>
                        <h2 className="section-title">
                            Work
                        </h2>
                        <div className="section-title-underline" />
                    </div>

                    <button
                        className="btn btn-outline"
                        onClick={() => navigate('/projects')}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        View All ({projectsData.length})
                    </button>
                </motion.div>

                <div className="projects-grid-home">
                    {displayedProjects.map(renderProject)}
                </div>
            </div>
        </section>
    );
};

export default Projects;
