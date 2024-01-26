interface Project {
    title: string;
    description: string;
    demoLink?: string;
    githubLink?: string;
    language?: string;
    in_progress?: boolean;
}

export const projects = [
    {
        title: 'Co-Fu',
        description: 'A mobile app built to connect home cooks with their community. (Vertical winner of the 2021 HackSC Hackathon)',
        demoLink: '/projects/cofu',
        githubLink: 'https://github.com/project1',
        language: 'Dart (Flutter)',
    },
    {
        title: 'Care-ma',
        description: 'A social media app built to spread joy and positivity.',
        demoLink: '/projects/carema',
        githubLink: 'https://github.com/project2',
        language: 'Dart (Flutter)',
        in_progress: false,
    },
    {
        title: 'LingoLift',
        description: 'An interactive language learning game for mastering vocabulary and grammar through engaging gameplay.',
        demoLink: 'projects/lingolift',
        language: 'Python (Pygame)',
        in_progress: false,
    },
    {
        title: 'RoomRevise',
        description: 'A web application enabling users to virtually design and visualize interior spaces by arranging furniture and decorations.',
        language: 'JavaScript (React, Node.js)',
        in_progress: true,
    },
    {
        title: 'AlgOptics',
        description: 'A tool that visually showcases various algorithms (sorting, searching, pathfinding) to aid users in understanding their functionality.',
        demoLink: '/projects/algoptics',
        language: 'JavaScript (D3.js)',
        in_progress: false,
    },
    {
        title: 'WellNook',
        description: 'A mobile app supporting users in tracking daily activities, nutrition, and mental well-being with personalized insights.',
        language: 'Kotlin/Java (Android)',
        in_progress: true,
    },
    {
        title: 'SonicSync',
        description: 'A music recommendation system that suggests tracks based on user preferences, incorporating machine learning for personalized insights.',
        demoLink: '/projects/sonicsync',
        language: 'Python (Django, React)',
        in_progress: false,
    },
    {
        title: 'ArtVirtuoso',
        description: 'A virtual reality experience allowing users to explore museums and art galleries from the comfort of their homes.',
        language: 'Unity (C#)',
        in_progress: true,
    },
    {
        title: 'ClimaCraft',
        description: 'A weather app providing accurate and visually appealing forecasts, incorporating real-time data from weather APIs.',
        demoLink: '/projects/climacraft',
        language: 'JavaScript (React Native)',
        in_progress: false,
    },
    {
        title: 'CryptoPal',
        description: 'A web application for tracking cryptocurrency investments, viewing market trends, and receiving alerts.',
        language: 'Python (Django, Vue.js)',
    },
];
