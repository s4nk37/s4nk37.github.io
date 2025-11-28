import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, MoveRight } from 'lucide-react';

interface Article {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    url: string;
    tags: string[];
}

const Articles: React.FC = () => {
    const articles: Article[] = [
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
            date: "Nov 2025",
            readTime: "4 min read",
            url: "https://s4nk37.medium.com/how-mobile-apps-run-internally-jit-aot-machine-code-vms-kotlin-swift-flutter-react-0b32a25ec63d",
            tags: ["Mobile Development", "Flutter", "React Native", "Performance"]
        }
    ];

    return (
        <section id="articles" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-title-block">
                        <h2 className="section-title">
                            Latest Articles
                        </h2>
                        <div className="section-title-underline" />
                    </div>
                </motion.div>

                <div style={{
                    marginTop: '1.5rem',
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
                        These articles come from things I learned, broke, fixed, Googled, got curious about, or asked AI while coding. They’re basically my personal notes—written to help me remember and to help the community too.
                    </p>
                </div>

                <div className="swipe-indicator">
                    <span>Swipe to explore</span>
                    <MoveRight size={16} />
                </div>

                <div className="articles-grid">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
        </section >
    );
};

export default Articles;
