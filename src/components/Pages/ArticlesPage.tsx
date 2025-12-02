import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowUp } from 'lucide-react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { fetchMediumArticles, type Article } from '../../services/medium';
import SEO from '../Utils/SEO';

interface ArticlesPageProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ theme, toggleTheme }) => {
    const fallbackArticles: Article[] = [
        {
            title: "🖥️ Essential Terminal Commands: macOS & Linux",
            excerpt: "A comprehensive guide to essential terminal commands for macOS and Linux users to boost productivity and navigate the command line with confidence.",
            date: "Dec 1, 2025",
            readTime: "4 min read",
            url: "https://s4nk37.medium.com/%EF%B8%8F-essential-terminal-commands-macos-linux-f727b71901cf",
            tags: ["Terminal", "macOS", "Linux", "Productivity", "CLI"]
        },
        {
            title: "Supercharge Your Flutter Workflow with Flutter Toolkit",
            excerpt: "Discover how to streamline your Flutter development process using the Flutter Toolkit, a powerful CLI tool for generating assets, managing builds, and more.",
            date: "Nov 29, 2025",
            readTime: "3 min read",
            url: "https://s4nk37.medium.com/supercharge-your-flutter-workflow-with-flutter-toolkit-db29fab17e01",
            tags: ["Flutter", "DevTools", "Productivity", "Mobile Development"]
        },
        {
            title: "Understanding Kernels: Linux, Unix, Windows, macOS & More",
            excerpt: "A comprehensive guide to understanding kernels, their types, and how they function in different operating systems like Linux, Unix, Windows, and macOS.",
            date: "Nov 28, 2025",
            readTime: "4 min read",
            url: "https://s4nk37.medium.com/understanding-kernels-linux-unix-windows-macos-more-9b4cb95dee80",
            tags: ["Operating Systems", "Kernel", "Linux", "Windows", "macOS"]
        },
        {
            title: "Understanding Types of Programming Languages: A Beginner-Friendly Guide to How Code Really Works",
            excerpt: "A beginner-friendly guide explaining the different types of programming languages and how code actually works under the hood.",
            date: "Nov 25, 2025",
            readTime: "3 min read",
            url: "https://s4nk37.medium.com/understanding-types-of-programming-languages-a-beginner-friendly-guide-to-how-code-really-works-dbedf5bf3b7a",
            tags: ["Programming", "Beginner Guide", "Computer Science"]
        },
        {
            title: "How Mobile Apps Run Internally: JIT, AOT, Machine Code, VMs",
            excerpt: "A deep dive into the internals of mobile app execution, exploring JIT compilation, AOT compilation, machine code, and virtual machines across Kotlin, Swift, Flutter, and React Native.",
            date: "Nov 23, 2025",
            readTime: "4 min read",
            url: "https://s4nk37.medium.com/how-mobile-apps-run-internally-jit-aot-machine-code-vms-kotlin-swift-flutter-react-0b32a25ec63d",
            tags: ["Mobile Development", "Flutter", "React Native", "Performance"]
        }
    ];

    const [articles, setArticles] = useState<Article[]>(fallbackArticles);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const fetchedArticles = await fetchMediumArticles();
                if (fetchedArticles.length > 0) {
                    setArticles(fetchedArticles);
                }
            } catch (error) {
                console.error("Failed to load articles", error);
            }
        };
        loadArticles();
    }, []);

    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll to top when page loads
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

    return (
        <div className="app">
            <SEO
                title="Articles"
                description="Read technical articles and tutorials about Flutter, React Native, and Mobile Development by Sanket Patel."
                url="https://s4nk37.github.io/articles"
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} simplified={true} />
            <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <section className="section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="section-title-block">
                                <h1 className="section-title">
                                    All Articles
                                </h1>
                                <div className="section-title-underline" />
                            </div>
                        </motion.div>

                        <div style={{
                            marginTop: '1.5rem',
                            marginBottom: '2rem',
                            padding: '1.5rem',
                            borderLeft: '4px solid var(--primary-color)',
                            background: 'rgba(128, 128, 128, 0.05)',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                margin: 0,
                                fontStyle: 'italic'
                            }}>
                                These articles come from things I learned, broke, fixed, Googled, got curious about, or asked AI while coding. They're basically my personal notes—written to help me remember and to help the community too.
                            </p>
                        </div>

                        <div className="articles-grid" style={{
                            display: 'grid',
                            overflowX: 'visible',
                            scrollSnapType: 'none',
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            {articles.map((article, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="article-card"
                                >
                                    <div className="article-content">
                                        <h3 className="article-title">{article.title}</h3>
                                        <p className="article-excerpt">{article.excerpt}</p>

                                        <div className="article-meta">
                                            <span className="article-meta-item">
                                                <Calendar size={16} />
                                                {article.date}
                                            </span>
                                            <span className="article-meta-item">
                                                <Clock size={16} />
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <div className="article-tags">
                                            {article.tags.map((tag, i) => (
                                                <span key={i} className="project-tag">{tag}</span>
                                            ))}
                                        </div>

                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="article-link"
                                        >
                                            Read on Medium
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </div>
    );
};

export default ArticlesPage;
