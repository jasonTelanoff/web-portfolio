export interface Project {
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
        title: 'Cards Against my Sanity',
        description: 'A mobile app implementation of the party game Cards Against Humanity using a cross platform Flutter app and Express.js backend using websockets.',
        language: 'Dart (Flutter), Express.js',
        languageColor: '#2CB7F6',
    },
    {
        title: 'Chess AI',
        description: '(In progress) A chess AI that uses minimax, alpha-beta pruning, and monte carlo tree search to play chess against a human player. It features several different techniques to evaluate the board state and make decisions.',
        language: 'Javascript',
        languageColor: '#C4AF13',
    },
    {
        title: 'Connect 4 AI',
        description: '(In progress) A connect 4 neural network that uses reinforcement learning to play connect 4 against a human player. The neural network is trained on user input, allowing the user to experience the improvement.',
        language: 'Javascript',
        languageColor: '#C4AF13',
    },
    {
        title: 'Co-Fu',
        description: 'A mobile app built to connect home cooks with their community. (Vertical winner of the 2021 HackSC Hackathon)',
        demoLink: '/projects/cofu',
        githubLink: 'https://github.com/Cofu-HackSC',
        language: 'Dart (Flutter)',
        color: '#5C9F35',
        languageColor: '#2CB7F6',
    },
    {
        title: 'Care-ma',
        description: 'A social media app built to spread joy and positivity.',
        demoLink: 'https://devpost.com/software/care-ma-txk7jb',
        githubLink: 'https://github.com/jonathanferrari/carema',
        language: 'Dart (Flutter)',
        color: "#FFB7B3",
        languageColor: '#2CB7F6',
    },
    {
        title: 'Mastermind',
        description: 'Interactive language learning game for mastering vocabulary and grammar through engaging gameplay.',
        demoLink: 'projects/mastermind',
        githubLink: 'https://github.com/jasonTelanoff/mastermind',
        language: 'JavaScript (Processing)',
        languageColor: '#C4AF13',
    },
    {
        title: 'Website Schmebsite',
        description: 'Developed and executed a comprehensive security assessment for a file storage website, identifying and addressing potential vulnerabilities such as SQL injection and XSS attacks.',
        language: 'JavaScript, SQL',
        languageColor: '#C4AF13',
    },
    {
        title: 'CryptoVault Storage',
        description: 'A file storage server utilizing various cryptography techniques to ensure integrity. Users can create, update, and delete files, as well as share them with other users.',
        language: 'GoLang',
        languageColor: '#69D7E4',
    },
    {
        title: 'C the issues',
        description: 'A program to exploit various flaws in the C programming language and run shell commands on a server. GDB was used to find and debug exploits, and python was used to perform the commands necessary.',
        language: 'Python',
        languageColor: '#3673A5',
    },
    {
        title: 'Machine Learning',
        description: 'Multiple machine learning projects, including a neural network for approximating sin, classifying handwritten digits, and identifying language.',
        language: 'Python',
        languageColor: '#3673A5',
    },
    {
        title: 'Reinforcement Learning',
        description: 'Implementation of value iteration and Q-learning that are applied to a simulated robot controller and a simulated crawler robot. The robot controller is able to navigate a world and figure out an optimal path.',
        language: 'Python',
        languageColor: '#3673A5',
    },
    {
        title: 'Multi-Agent Search',
        description: 'Design and implementation of several search agents to create a version of PacMan. Reflex agents were build for ghosts and Pacman using minimax, expectimax, alpha-beta pruning, and more.',
        language: 'Python',
        languageColor: '#3673A5',
    },
    {
        title: 'Ghostbusters',
        description: 'Implementation of a Hidden Markov Model to track ghosts over time and a joint particle filter to track multiple ghosts simultaneously. Variable elimination, exact inference, approximate inference, and more were used to optimize the problem.',
        language: 'Python',
        languageColor: '#3673A5',
    },
    {
        title: 'PacMan Search',
        description: 'Implementation of several search engines in order to solve a PacMan style maze. The search engines include DFS, BFS, UCS, A* Search, and Greedy Search.',
        language: 'Python',
        languageColor: '#3673A5',
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
        // demoLink: 'projects/byow',
    },
    {
        title: 'Scheme Interpreter',
        description: 'A python script for interpreting Scheme, a dialect of Lisp. It supports the core features of Scheme, including recursion, first-class functions, and lexical scoping.',
        language: 'Python',
        languageColor: '#3673A5',
    }
];
