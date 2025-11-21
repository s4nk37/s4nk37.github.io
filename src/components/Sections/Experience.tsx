import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "LesGo Global Pvt Ltd",
            role: "Software Development Engineer I",
            period: "Jan 2024 - Feb 2025",
            location: "Remote Bengaluru",
            description: [
                "Contributed to the end-to-end development and migration of LesGo's consumer app, working across Flutter and React Native.",
                "Developed key modules: Offers, Reservation, Search, AI chatbots, social systems, and real-time chat.",
                "Integrated Razorpay, Firebase, Sentry, and Amplitude.",
                "Resolved performance issues, improved load times, and managed production releases on Play Store and App Store."
            ]
        },
        {
            company: "Tecocraft Infusion Pvt Ltd",
            role: "Jr. Flutter Developer",
            period: "Aug 2023 - Nov 2023",
            location: "Surat, Gujarat",
            description: [
                "Contributed to Fitnex and Flybagz projects focusing on UI development and integration.",
                "Built pixel-perfect responsive UIs and fixed FCM/Deeplinking issues.",
                "Enhanced Flybagz by improving SDK pagination and fixing automated chat message issues.",
                "Collaborated with designers and backend engineers to deliver production-ready applications."
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'center'
                }}>
                    Professional <span className="gradient-text">Experience</span>
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            marginBottom: '2rem',
                            position: 'relative'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                marginBottom: '1rem',
                                gap: '0.5rem'
                            }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{exp.company}</h4>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{exp.period}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</p>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
