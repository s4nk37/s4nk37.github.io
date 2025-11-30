import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiTypescript, SiPython, SiFastapi, SiFirebase, SiMobx, SiSocketdotio,
    SiGit, SiPostman, SiSqlite, SiTailwindcss, SiAndroidstudio,
    SiXcode, SiFigma, SiRazorpay, SiSentry, SiGooglemaps,
    SiMixpanel, SiGoogle, SiAxios
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import {
    Smartphone, Layout, Terminal, Database, Globe, Bell, Link, Upload,
    Server, FileCode, Layers, Radio, Activity
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
                        {/* Row 1: Full width items */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-3">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Smartphone size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Languages & Frameworks</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<img src="/icons/dart.svg" alt="Dart" width="16" height="16" />} name="Dart" />
                                    <SkillPill icon={<SiTypescript color="#3178C6" size={16} />} name="TypeScript" />
                                    <SkillPill icon={<img src="/icons/flutter.svg" alt="Flutter" width="16" height="16" />} name="Flutter" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React Native" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="skill-bento-item span-3">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Server size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Backend & Cloud</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiFirebase color="#FFCA28" size={16} />} name="Firebase" />
                                    <SkillPill icon={<Globe size={16} />} name="REST APIs" />
                                    <SkillPill icon={<SiSocketdotio size={16} />} name="Socket.io" />
                                    <SkillPill icon={<Globe size={16} />} name="Dio" />
                                    <SkillPill icon={<SiAxios color="#5A29E4" size={16} />} name="Axios" />
                                    <SkillPill icon={<SiFastapi color="#009688" size={16} />} name="FastAPI" />
                                    <SkillPill icon={<SiPython color="#3776AB" size={16} />} name="Python" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Row 2: Mixed sizes */}
                        <motion.div variants={itemVariants} className="skill-bento-item">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Layers size={18} />
                                    </div>
                                    <h3 className="skill-category-title">State Management</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiMobx color="#FF9955" size={16} />} name="MobX" />
                                    <SkillPill icon={<Layers size={16} />} name="Provider" />
                                    <SkillPill icon={<img src="/icons/bloc.svg" alt="Bloc" width="16" height="16" />} name="Bloc" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="skill-bento-item span-2">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Layout size={18} />
                                    </div>
                                    <h3 className="skill-category-title">UI & Styling</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiTailwindcss color="#06B6D4" size={16} />} name="NativeWind" />
                                    <SkillPill icon={<FileCode size={16} />} name="StyleSheet" />
                                    <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React Hooks" />
                                    <SkillPill icon={<img src="/icons/flutter.svg" alt="Flutter" width="16" height="16" />} name="Flutter Hooks" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="skill-bento-item span-2">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Terminal size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Tools & Platforms</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiGit color="#F05032" size={16} />} name="Git" />
                                    <SkillPill icon={<SiPostman color="#FF6C37" size={16} />} name="Postman" />
                                    <SkillPill icon={<SiAndroidstudio color="#3DDC84" size={16} />} name="Android Studio" />
                                    <SkillPill icon={<SiXcode color="#147EFB" size={16} />} name="Xcode" />
                                    <SkillPill icon={<SiFigma color="#F24E1E" size={16} />} name="Figma" />
                                    <SkillPill icon={<VscVscode color="#007ACC" size={16} />} name="VS Code" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="skill-bento-item">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Database size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Databases</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<Database size={16} />} name="Hive" />
                                    <SkillPill icon={<SiSqlite color="#003B57" size={16} />} name="Sqflite" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Row 3: Integrations wide + Others */}
                        <motion.div variants={itemVariants} className="skill-bento-item span-4">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Link size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Integrations</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<SiRazorpay color="#3395FF" size={16} />} name="Razorpay" />
                                    <SkillPill icon={<SiSentry color="#362D59" size={16} />} name="Sentry" />
                                    <SkillPill icon={<SiGooglemaps color="#4285F4" size={16} />} name="Google Maps" />
                                    <SkillPill icon={<Radio size={16} />} name="NFC" />
                                    <SkillPill icon={<Activity color="#231F20" size={16} />} name="Amplitude" />
                                    <SkillPill icon={<SiMixpanel color="#A020F0" size={16} />} name="Mixpanel" />
                                    <SkillPill icon={<Bell size={16} />} name="Push Notifications" />
                                    <SkillPill icon={<SiGoogle color="#4285F4" size={16} />} name="Google Sign-in" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div variants={itemVariants} className="skill-bento-item span-2">
                            <SpotlightCard>
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <Globe size={18} />
                                    </div>
                                    <h3 className="skill-category-title">Others</h3>
                                </div>
                                <div className="skill-list">
                                    <SkillPill icon={<Upload size={16} />} name="iOS & Android App Deployment" />
                                    <SkillPill icon={<Globe size={16} />} name="Localization" />
                                    <SkillPill icon={<Link size={16} />} name="Deep Linking" />
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
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="spotlight-card"
            style={{
                '--mouse-x': `${position.x}px`,
                '--mouse-y': `${position.y}px`,
                '--spotlight-opacity': opacity,
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
