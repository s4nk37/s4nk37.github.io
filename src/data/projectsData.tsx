import React from 'react';

export interface Project {
    title: string;
    description: string | React.ReactNode;
    details?: React.ReactNode[];
    tags: string[];
    link: string;
    appStoreLink?: string;
    websiteLink?: string;
    logo?: string;
    image?: string;
    category: 'professional' | 'personal';
    span?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        title: "Hubblemeet",
        description: <span>Cross-platform <strong style={{ color: 'var(--text-primary)' }}>professional networking</strong> application for iOS and Android.</span>,
        details: [
            <span>Built <strong style={{ color: 'var(--text-primary)' }}>native iOS widgets</strong> using Swift/WidgetKit and <strong style={{ color: 'var(--text-primary)' }}>Android widgets</strong> using Kotlin, synchronized with application state.</span>,
            <span>Engineered <strong style={{ color: '#4ade80' }}>real-time chat</strong> with read receipts, delivery indicators, and WebSocket-based store synchronization.</span>,
            <span>Implemented <strong style={{ color: 'var(--text-primary)' }}>in-app purchases</strong> and subscription management, including receipt validation and purchase recovery.</span>,
            <span>Overhauled network architecture with automated <strong style={{ color: '#4ade80' }}>JWT refresh-token handling</strong>.</span>,
            <span>Implemented and maintained <strong style={{ color: 'var(--text-primary)' }}>deep linking</strong>. Integrated Sentry monitoring and production error tracking.</span>,
            <span>Resolved low-level native <strong style={{ color: '#4ade80' }}>NDK and memory-alignment issues</strong> across iOS/Android.</span>,
            <span>Contributed to <strong style={{ color: 'var(--text-primary)' }}>15+ production releases</strong>. Responsible for iOS and Android release/deployment workflows.</span>,
        ],
        tags: ["React Native", "TypeScript", "Swift", "Kotlin", "Expo"],
        link: "https://play.google.com/store/apps/details?id=com.hubble.app",
        appStoreLink: "https://apps.apple.com/ng/app/hubblemeet/id6752544354",
        websiteLink: "https://hubblemeet.com/",
        image: "images/hubblemeet.png",
        category: "professional",
    },
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
        logo: "images/LesGo.png",
        category: "professional"
    },
    {
        title: "Dandar Health — Patient",
        description: <span>Healthcare application for <strong style={{ color: 'var(--text-primary)' }}>patients</strong>, enabling real-time consultations, prescriptions, and delivery tracking.</span>,
        details: [
            <span>Implemented <strong style={{ color: '#4ade80' }}>real-time Agora video consultations</strong>.</span>,
            <span>Implemented <strong style={{ color: 'var(--text-primary)' }}>live GPS delivery tracking</strong>.</span>,
            <span>Built/updated <strong style={{ color: 'var(--text-primary)' }}>appointment management</strong> functionality.</span>,
            <span>Implemented <strong style={{ color: '#4ade80' }}>digital prescriptions</strong>.</span>,
            <span>Performed major <strong style={{ color: 'var(--text-primary)' }}>UI/UX refinements and revamp</strong>.</span>,
            <span>Handled <strong style={{ color: 'var(--text-primary)' }}>App Store and Play Store</strong> deployment/release.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://play.google.com/store/apps/details?id=com.dandarpatient&hl=en_IN",
        appStoreLink: "https://apps.apple.com/in/app/dandar-health/id6759371534",
        websiteLink: "https://dandarhealth.com/",
        image: "images/dandar-patient.svg",
        category: "professional",
    },
    {
        title: "Dandar Health — Doctor",
        description: <span>Healthcare application for <strong style={{ color: 'var(--text-primary)' }}>doctors</strong>, featuring video consultations and prescription management.</span>,
        details: [
            <span>Implemented <strong style={{ color: '#4ade80' }}>real-time Agora video consultations</strong>.</span>,
            <span>Worked on <strong style={{ color: 'var(--text-primary)' }}>appointment management</strong>.</span>,
            <span>Implemented <strong style={{ color: '#4ade80' }}>digital prescriptions</strong>.</span>,
            <span>Performed <strong style={{ color: 'var(--text-primary)' }}>UI/UX revamp and refinements</strong>.</span>,
            <span>Handled <strong style={{ color: 'var(--text-primary)' }}>App Store and Play Store</strong> deployment.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://play.google.com/store/apps/details?id=com.dandaragora&hl=en_IN",
        appStoreLink: "https://apps.apple.com/in/app/dandar-health-doc/id6745950306",
        websiteLink: "https://dandarhealth.com/",
        image: "images/dandar-dr.svg",
        category: "professional",
    },
    {
        title: "Dandar Health — Rider",
        description: <span>Delivery and logistics application for <strong style={{ color: 'var(--text-primary)' }}>Dandar Health riders</strong>.</span>,
        details: [
            <span>Implemented <strong style={{ color: '#4ade80' }}>live GPS delivery tracking</strong>.</span>,
            <span>Implemented <strong style={{ color: 'var(--text-primary)' }}>return tracking</strong>.</span>,
            <span>Implemented <strong style={{ color: '#4ade80' }}>lab test collection tracking</strong>.</span>,
            <span>Performed <strong style={{ color: 'var(--text-primary)' }}>UI/UX revamp and refinements</strong>.</span>,
            <span>Handled mobile application <strong style={{ color: 'var(--text-primary)' }}>deployment/release</strong>.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://play.google.com/store/apps/details?id=com.dandardriver&hl=en_IN",
        websiteLink: "https://dandarhealth.com/",
        image: "images/dandar-rider.svg",
        category: "professional",
    },
    {
        title: "Donor Dispatch",
        description: <span>Mobile application focused on <strong style={{ color: 'var(--text-primary)' }}>donor/dispatch workflows</strong>, built for both iOS and Android platforms.</span>,
        details: [
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>bug fixes</strong> and stability improvements.</span>,
            <span>Implemented <strong style={{ color: '#4ade80' }}>live GPS tracking</strong>.</span>,
            <span>Handled <strong style={{ color: 'var(--text-primary)' }}>iOS and Android</strong> deployment/release.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://play.google.com/store/apps/details?id=com.donar.com&hl=en_IN",
        appStoreLink: "https://apps.apple.com/us/app/donor-dispatch/id6749001085",
        websiteLink: "https://www.donordispatch.com/",
        image: "images/donar_dispatch.png",
        category: "professional",
    },
    {
        title: "Awake by Cosmation",
        description: <span>Contributed to the Awake mobile application built with <strong style={{ color: '#4ade80' }}>Flutter</strong>.</span>,
        details: [
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>bug fixes and stability</strong> improvements.</span>,
            <span>iOS <strong style={{ color: '#4ade80' }}>Push Notification</strong> fixes.</span>,
            <span>Refined the <strong style={{ color: 'var(--text-primary)' }}>dream recording experience</strong>.</span>,
            <span>Performed <strong style={{ color: 'var(--text-primary)' }}>UI refinements</strong>.</span>,
            <span>Managed <strong style={{ color: 'var(--text-primary)' }}>App Store and Play Store</strong> deployment/release.</span>,
        ],
        tags: ["Flutter"],
        link: "https://play.google.com/store/apps/details?id=com.awake.cosmation",
        appStoreLink: "https://apps.apple.com/app/id6754566935",
        websiteLink: "https://www.cosmation.ai/",
        image: "images/awake.svg",
        category: "professional",
    },
    {
        title: "Chargeup — Partner Connect",
        description: <span>Mobile application for <strong style={{ color: 'var(--text-primary)' }}>Chargeup partners</strong>.</span>,
        details: [
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>bug fixes</strong>.</span>,
            <span>iOS <strong style={{ color: '#4ade80' }}>release deployment</strong>.</span>,
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>stability and release support</strong>.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://apps.apple.com/us/app/chargeup-partner-connect/id6756965869",
        websiteLink: "https://www.echargeup.com/",
        image: "images/cu_employee.png",
        category: "professional",
    },
    {
        title: "Chargeup — Hero App",
        description: <span>Mobile application for Chargeup <strong style={{ color: 'var(--text-primary)' }}>delivery/field operations</strong>.</span>,
        details: [
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>bug fixes</strong>.</span>,
            <span>iOS <strong style={{ color: '#4ade80' }}>release deployment</strong>.</span>,
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>stability and release support</strong>.</span>,
        ],
        tags: ["Expo", "React Native"],
        link: "https://apps.apple.com/th/app/chargeup-hero-app/id6757174897",
        websiteLink: "https://www.echargeup.com/",
        image: "images/cu_driver.png",
        category: "professional",
    },
    {
        title: "Fitnex",
        description: <span>Fitness application built with <strong style={{ color: '#4ade80' }}>Flutter</strong>.</span>,
        details: [
            <span>Built <strong style={{ color: 'var(--text-primary)' }}>pixel-perfect responsive UIs</strong>, fixed FCM and Deeplinking issues, and optimized calendar logic for event scheduling.</span>,
            <span>Collaborated with designers and backend engineers to deliver <strong style={{ color: '#4ade80' }}>production-ready</strong>, user-tested Flutter applications.</span>,
        ],
        tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Provider", "FCM"],
        link: "https://play.google.com/store/apps/details?id=com.app.fitnex&pcampaignid=web_share",
        appStoreLink: "https://apps.apple.com/gb/app/fitnex/id1661075570",
        websiteLink: "https://www.fitnex.life/",
        image: "images/fitnex.webp",
        category: "professional",
    },
    {
        title: "Flybagz",
        description: <span>Travel luggage logistics application built with <strong style={{ color: '#4ade80' }}>Flutter</strong>.</span>,
        details: [
            <span>Enhanced <strong style={{ color: 'var(--text-primary)' }}>SDK pagination</strong> and fixed automated chat message issues (English & French), boosting <strong style={{ color: '#4ade80' }}>cross-language reliability</strong>.</span>,
            <span>Collaborated with designers and backend engineers to deliver <strong style={{ color: 'var(--text-primary)' }}>production-ready</strong>, user-tested Flutter applications.</span>,
        ],
        tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Provider"],
        link: "https://play.google.com/store/apps/details?id=com.app.flybag&hl=en_IN",
        appStoreLink: "https://apps.apple.com/pl/app/flybagz/id6443655475",
        websiteLink: "https://www.flybagz.com/",
        image: "images/flybagz.webp",
        category: "professional",
    },
    {
        title: "Ginn AI",
        description: <span>Contributed to the <strong style={{ color: 'var(--text-primary)' }}>Ginn AI</strong> mobile application.</span>,
        details: [
            <span>Production <strong style={{ color: 'var(--text-primary)' }}>bug fixes</strong>.</span>,
            <span>Set up and configured the <strong style={{ color: '#4ade80' }}>iOS React Native CLI environment</strong>.</span>,
            <span>Worked on getting the existing React Native CLI project <strong style={{ color: 'var(--text-primary)' }}>running and supporting iOS development</strong>.</span>,
        ],
        tags: ["React Native CLI"],
        websiteLink: "https://www.ginn.ai/",
        link: "https://www.ginn.ai/",
        image: "images/ginn-ai.png",
        category: "professional",
    },
    // --- Personal & Open Source Projects ---
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
