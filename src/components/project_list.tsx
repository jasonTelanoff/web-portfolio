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
        // demoLink: '/projects/cofu',
        githubLink: 'https://github.com/Cofu-HackSC',
        language: 'Dart (Flutter)',
    },
    {
        title: 'Care-ma',
        description: 'A social media app built to spread joy and positivity.',
        // demoLink: '/projects/carema',
        githubLink: 'https://github.com/jonathanferrari/carema',
        language: 'Dart (Flutter)',
        in_progress: false,
    },
    {
        title: 'Mastermind',
        description: 'An interactive language learning game for mastering vocabulary and grammar through engaging gameplay.',
        demoLink: 'projects/mastermind',
        githubLink: 'https://github.com/jasonTelanoff/mastermind',
        language: 'JavaScript (Processing)',
        in_progress: false,
    },
];
