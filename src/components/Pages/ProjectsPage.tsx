import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ArrowUp, ArrowLeft } from 'lucide-react';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import SEO from '../Utils/SEO';
import { projectsData, type Project } from '../../data/projectsData';

interface ProjectsPageProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'professional' | 'personal'>('all');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    const professionalCount = projectsData.filter(p => p.category === 'professional').length;
    const personalCount = projectsData.filter(p => p.category === 'personal').length;

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

    const renderProject = (project: Project, index: number) => (
        <motion.div
            key={project.title + index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
            className="project-card"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
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
                    fontSize: '1.35rem',
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
        </motion.div>
    );

    return (
        <div className="app">
            <SEO
                title="Projects | Sanket Patel"
                description="Explore all mobile applications and engineering projects developed by Sanket Patel across Flutter, React Native, iOS, Android, and Python."
                keywords={["Mobile Apps", "Flutter Projects", "React Native Portfolio", "iOS", "Android", "Sanket Patel"]}
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} simplified />

            <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>
                    {/* Top Navigation / Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ marginBottom: '2rem' }}
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-outline"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        >
                            <ArrowLeft size={16} /> Back to Home
                        </button>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: '2.5rem' }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 800,
                            marginBottom: '0.75rem',
                            letterSpacing: '-0.02em'
                        }}>
                            All Projects
                        </h1>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            lineHeight: '1.6'
                        }}>
                            A comprehensive showcase of <strong>{projectsData.length} projects</strong> spanning production cross-platform mobile apps, client solutions, native integrations, and open-source tools.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{
                            display: 'flex',
                            gap: '0.75rem',
                            flexWrap: 'wrap',
                            marginBottom: '2.5rem'
                        }}
                    >
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={selectedCategory === 'all' ? 'btn btn-primary' : 'btn btn-outline'}
                            style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem' }}
                        >
                            All ({projectsData.length})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('professional')}
                            className={selectedCategory === 'professional' ? 'btn btn-primary' : 'btn btn-outline'}
                            style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem' }}
                        >
                            Production & Client Apps ({professionalCount})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('personal')}
                            className={selectedCategory === 'personal' ? 'btn btn-primary' : 'btn btn-outline'}
                            style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem' }}
                        >
                            Open Source & Personal ({personalCount})
                        </button>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, idx) => renderProject(project, idx))}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default ProjectsPage;
