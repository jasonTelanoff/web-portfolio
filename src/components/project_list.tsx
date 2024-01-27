interface Project {
    title: string;
    description: string;
    demoLink?: string;
    githubLink?: string;
    language?: string;
    in_progress?: boolean;
    color?: string;
    languageColor?: string;
}

export const projects = [
    {
        title: 'Co-Fu',
        description: 'A mobile app built to connect home cooks with their community. (Vertical winner of the 2021 HackSC Hackathon)',
        // demoLink: '/projects/cofu',
        githubLink: 'https://github.com/Cofu-HackSC',
        language: 'Dart (Flutter)',
        color: '#5C9F35',
        languageColor: '#2CB7F6',
    },
    {
        title: 'Care-ma',
        description: 'A social media app built to spread joy and positivity.',
        // demoLink: '/projects/carema',
        githubLink: 'https://github.com/jonathanferrari/carema',
        language: 'Dart (Flutter)',
        color: "#FFB7B3",
        languageColor: '#2CB7F6',
    },
    {
        title: 'Mastermind',
        description: 'An interactive language learning game for mastering vocabulary and grammar through engaging gameplay.',
        demoLink: 'projects/mastermind',
        githubLink: 'https://github.com/jasonTelanoff/mastermind',
        language: 'JavaScript (Processing)',
        languageColor: '#C4AF13',
    },
    {
        title: 'Deques',
        description: 'Implementation of a Linked List Deque and a Array List Deque, which are then used to implement a sound synthesizer capable of playing music from Guitar Hero',
        language: 'Java',
        languageColor: '#EC2025',
    },
    {
        title: 'NGordnet',
        description: 'A browser based tool for exploring the history of word usage in English texts.',
        language: 'Java',
        languageColor: '#EC2025',
    },
    {
        title: 'Build Your Own World',
        description: 'A game that allows the user to explore procedurally generated mazes. It offers saving and loading of worlds, as well as music that is too loud.',
        language: 'Java',
        languageColor: '#EC2025',
    },
    {
        title: 'Scheme Interpreter',
        description: 'A python script for interpreting Scheme, a dialect of Lisp. It supports the core features of Scheme, including recursion, first-class functions, and lexical scoping.',
        language: 'Python',
        languageColor: '#3673A5',
    }
];
