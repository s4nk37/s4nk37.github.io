import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiTypescript, SiPython, SiFastapi, SiFirebase, SiMobx, SiSocketdotio,
    SiGit, SiPostman, SiSqlite, SiTailwindcss, SiFigma, SiRazorpay, SiSentry, SiGooglemaps,
    SiMixpanel, SiGoogle, SiAxios, SiJavascript, SiMapbox, SiGithub, SiApple, SiGoogleplay,
    SiAndroidstudio, SiXcode
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import {
    Smartphone, Layout, Terminal, Database, Globe, Bell,
    FileCode, Layers, Radio, Activity, Camera, MapPin, Box, Cpu
} from 'lucide-react';

const Skills: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="section-title-block">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="section-title-underline" />
                    </div>

                    <div className="skills-bento-grid">
                        {/* Languages */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-4">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <FileCode size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Languages</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<img src="/icons/dart.svg" alt="Dart" width="16" height="16" />} name="Dart" />
                                    <SkillPill icon={<SiTypescript color="#3178C6" size={16} />} name="TypeScript" />
                                    <SkillPill icon={<SiJavascript color="#F7DF1E" size={16} />} name="JavaScript" />
                                    <SkillPill icon={<SiPython color="#3776AB" size={16} />} name="Python" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Frameworks & UI */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-6">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Layout size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Frameworks & UI</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<img src="/icons/flutter.svg" alt="Flutter" width="16" height="16" />} name="Flutter" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React Native" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React.js" />
                                    <SkillPill icon={<SiTailwindcss color="#06B6D4" size={16} />} name="Tailwind CSS" />
                                    <SkillPill icon={<SiTailwindcss color="#06B6D4" size={16} />} name="NativeWind" />
                                    <SkillPill icon={<Smartphone size={16} />} name="Material Design" />
                                    <SkillPill icon={<SiApple size={16} />} name="Cupertino" />
                                    <SkillPill icon={<SiFigma color="#F24E1E" size={16} />} name="Figma" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Architecture & State Management */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-5">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Cpu size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Architecture & State Management</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<Box size={16} />} name="Clean Architecture" />
                                    <SkillPill icon={<Layout size={16} />} name="MVVM" />
                                    <SkillPill icon={<img src="/icons/bloc.svg" alt="Bloc" width="16" height="16" />} name="BLoC" />
                                    <SkillPill icon={<SiMobx color="#FF9955" size={16} />} name="MobX" />
                                    <SkillPill icon={<Layers size={16} />} name="Provider" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React Hooks" />
                                    <SkillPill icon={<img src="/icons/flutter.svg" alt="Flutter" width="16" height="16" />} name="Flutter Hooks" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Backend, Data & Networking */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-5">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Database size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Backend, Data & Networking</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiFirebase color="#FFCA28" size={16} />} name="Firebase" />
                                    <SkillPill icon={<SiFirebase color="#FFCA28" size={16} />} name="Firestore" />
                                    <SkillPill icon={<SiFastapi color="#009688" size={16} />} name="FastAPI" />
                                    <SkillPill icon={<Database style={{ color: 'var(--icon-neutral)' }} size={16} />} name="Hive" />
                                    <SkillPill icon={<SiSqlite color="#003B57" size={16} />} name="Sqflite" />
                                    <SkillPill icon={<SiSocketdotio style={{ color: 'var(--icon-neutral)' }} size={16} />} name="Socket.io" />
                                    <SkillPill icon={<Globe size={16} />} name="REST APIs" />
                                    <SkillPill icon={<Globe size={16} />} name="Dio" />
                                    <SkillPill icon={<SiAxios color="#5A29E4" size={16} />} name="Axios" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Integrations */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-6">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Globe size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Integrations</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiGooglemaps color="#4285F4" size={16} />} name="Google Maps" />
                                    <SkillPill icon={<SiMapbox color="#4264FB" size={16} />} name="Mapbox" />
                                    <SkillPill icon={<SiRazorpay color="#3395FF" size={16} />} name="Razorpay" />
                                    <SkillPill icon={<Camera size={16} />} name="Camera" />
                                    <SkillPill icon={<Radio size={16} />} name="NFC" />
                                    <SkillPill icon={<MapPin size={16} />} name="GPS" />
                                    <SkillPill icon={<Bell size={16} />} name="Push Notifications" />
                                    <SkillPill icon={<SiGoogle color="#4285F4" size={16} />} name="Google Sign-In" />
                                    <SkillPill icon={<SiSentry color="#362D59" size={16} />} name="Sentry" />
                                    <SkillPill icon={<SiMixpanel color="#A020F0" size={16} />} name="Mixpanel" />
                                    <SkillPill icon={<Activity style={{ color: 'var(--icon-neutral)' }} size={16} />} name="Amplitude" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Tools & Deployment */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-4">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Terminal size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Tools & Deployment</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiGit color="#F05032" size={16} />} name="Git" />
                                    <SkillPill icon={<SiGithub style={{ color: 'var(--icon-neutral)' }} size={16} />} name="GitHub" />
                                    <SkillPill icon={<VscVscode color="#007ACC" size={16} />} name="VS Code" />
                                    <SkillPill icon={<SiAndroidstudio color="#3DDC84" size={16} />} name="Android Studio" />
                                    <SkillPill icon={<SiXcode color="#147EFB" size={16} />} name="Xcode" />
                                    <SkillPill icon={<SiPostman color="#FF6C37" size={16} />} name="Postman" />
                                    <SkillPill icon={<SiApple size={16} />} name="App Store Connect" />
                                    <SkillPill icon={<SiGoogleplay style={{ color: 'var(--icon-neutral)' }} size={16} />} name="Play Console" />
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SpotlightCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const divRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
        if (divRef.current) {
            divRef.current.style.setProperty('--spotlight-opacity', '1');
        }
    };

    const handleMouseLeave = () => {
        if (divRef.current) {
            divRef.current.style.setProperty('--spotlight-opacity', '0');
        }
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="spotlight-card"
            style={{
                '--mouse-x': '0px',
                '--mouse-y': '0px',
                '--spotlight-opacity': 0,
            } as React.CSSProperties}
        >
            <div className="spotlight-glow" />
            <div className="spotlight-content">{children}</div>
        </div>
    );
};

const SkillPill: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="skill-pill">
        {icon}
        <span>{name}</span>
    </div>
);

export default Skills;
