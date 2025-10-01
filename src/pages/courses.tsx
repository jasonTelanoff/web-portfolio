import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface Course {
    title: string;
    description: string;
    detailsLink?: string;
    catalogLink?: string;
    courseLink?: string;
}

const Coursework = () => {
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    const semesters = [
        {
            semester: 'Fall 2024',
            courses: [
                {
                    title: 'Introduction to Machine Learning',
                    description: 'Theoretical foundations, algorithms, methodologies, and applications for machine learning. Topics may include supervised methods for regression and classication',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-fall-compsci-189-001-lec-001',
                },
                {
                    title: 'Introduction to Database Systems',
                    description: 'Access methods and file systems to facilitate data access. Hierarchical, network, relational, and object-oriented data models, application generators, browsers, report writers, and transaction processing.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-fall-compsci-186-001-lec-001',
                },
                {
                    title: 'Intro to Computer Vision and Computational Photography',
                    description: 'This advanced undergraduate course introduces students to computing with visual data (images and video). We will cover acquisition, representation, and manipulation of visual information from digital photographs, image analysis and visual understanding, and image synthesis',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-fall-compsci-180-001-lec-001',
                },
                {
                    title: 'Introduction to General Astronomy',
                    description: 'A description of modern astronomy with emphasis on the structure and evolution of stars, galaxies, and the Universe. Additional topics optionally discussed include quasars, pulsars, black holes, and extraterrestrial communication, etc. Individual instructor\'s synopses available from the department.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-fall-astron-c10-001-lec-001',
                },
            ],
        },
        {
            semester: 'Summer 2024',
            courses: [
                {
                    title: 'Introduction to Complex Analysis',
                    description: 'Analytic functions of a complex variable. Cauchy\'s integral theorem, power series, Laurent series, singularities of analytic functions, the residue theorem with application to definite integrals. Some additional topics such as conformal mapping.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-summer-math-185-002-lec-002',
                },
                {
                    title: 'Numerical Analysis',
                    description: 'Programming for numerical calculations, round-off error, approximation and interpolation, numerical quadrature, and solution of ordinary differential equations.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-summer-math-w128a-001-wbl-001',
                },
            ],
        },
        {
            semester: 'Spring 2024',
            courses: [
                {
                    title: 'Efficient Algorithms and Intractable Problems',
                    description: 'Introduction to the design and analysis of algorithms. Topics include asymptotic analysis, recurrence relations, divide-and-conquer algorithms, dynamic programming, greedy algorithms, data structures, graph algorithms, and randomized algorithms. ',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-spring-compsci-170-001-lec-001',
                    courseLink: 'https://cs170.org/',
                },
                {
                    title: 'Foundations of Computer Graphics',
                    description: 'Introduction to the fundamental concepts of computer graphics. Topics include graphics pipeline, 2D and 3D transformations, viewing, projections, rendering, texture mapping, ray tracing, graphics hardware, and animation.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-spring-compsci-184-001-lec-001',
                    courseLink: 'https://cs184.eecs.berkeley.edu/',
                },
                {
                    title: 'Introduction to Abstract Algebra',
                    description: 'An introduction to the basic concepts of abstract algebra, including groups, rings, and fields.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-spring-math-113-001-lec-001',
                },
                {
                    title: 'Great Ideas of Computer Architecture (Machine Structures)',
                    description: 'Introduction to the fundamental concepts of computer systems through bare metal programming on the Raspberry Pi. Topics covered include assembly language, computer arithmetic, the hardware/software interface, and the basics of operating system design.',
                    catalogLink: 'https://classes.berkeley.edu/content/2024-spring-compsci-61c-001-lec-001',
                    courseLink: 'https://cs61c.org/',
                },
            ],
        },
        {
            semester: 'Fall 2023',
            courses: [
                {
                    title: 'Computer Security',
                    description: 'Introduction to computer security. Cryptography, authentication, access control, program security, malicious code, operating systems and network security, web security, privacy, and legal and ethical issues.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-fall-compsci-161-001-lec-001',
                    courseLink: 'https://cs161.org/',
                },
                {
                    title: 'Introduction to Artificial Intelligence',
                    description: 'Introduction to the ideas and techniques underlying the design of intelligent computer systems. Topics include search, game playing, knowledge representation, inference, planning, reasoning under uncertainty, machine learning, robotics, perception, and language understanding.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-fall-compsci-188-001-lec-001',
                    courseLink: 'https://inst.eecs.berkeley.edu/~cs188/',
                },
                {
                    title: 'Introduction to Analysis',
                    description: 'An introduction to the concepts and methods of real analysis, including the real number system, limits, continuity, differentiation, the Riemann integral, sequences, and series.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-fall-math-104-001-lec-001',
                },
                {
                    title: 'Linear Algebra',
                    description: 'Matrices, vector spaces, linear transformations, inner products, determinants. Eigenvectors. QR factorization. Quadratic forms and Rayleigh\'s principle.Jordan canonical form, applications.Linear functionals.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-fall-math-110-001-lec-001',
                },
                {
                    title: 'Directed Group Studies for Advanced Undergraduates',
                    description: 'Lead students in developing data science curriculum through DS modules program for other courses. Such curriculum includes data analysis, data visualization, and machine learning.',
                },
            ],
        },
        {
            semester: 'Spring 2023',
            courses: [
                {
                    title: 'Accelerated Structure and Interpretation of Computer Programs',
                    description: 'Implementing generic operations, streams, iterators, and techniques to support functional, object-oriented, and constraint-based programming in Scheme.',
                    courseLink: 'https://inst.eecs.berkeley.edu/~cs61a/sp23/',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-spring-compsci-61a-001-lec-001',
                },
                {
                    title: 'Multivariable Calculus',
                    description: 'Parametric equations and polar coordinates. Vectors in 2- and 3-dimensional Euclidean spaces. Partial derivatives. Multiple integrals. Vector calculus. Theorems of Green, Gauss, and Stokes. ',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-spring-math-53-001-lec-001',
                },
                {
                    title: 'Linear Algebra and Differential Equations',
                    description: 'Foundational linear algebra covering matrix operations, determinants, vector spaces, inner product spaces, eigenvalues, eigenvectors, orthogonality, symmetric matrices, linear second- order differential equations, first - order systems with constant coefficients, and Fourier series.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-spring-math-54-001-lec-001',
                },
                {
                    title: 'Music in American Culture',
                    description: 'A survey of American music from the 17th century to the present, including art music, folk music, and popular music, and their effect on American culture.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-spring-music-26ac-001-lec-001',
                },
                {
                    title: 'Introduction to Logic',
                    description: 'An introduction to the concepts and principles of logic, including formal and informal reasoning, logical analysis, and logical fallacies.',
                    catalogLink: 'https://classes.berkeley.edu/content/2023-spring-philos-12a-001-lec-001',
                },
            ],
        },
        {
            semester: 'Fall 2022',
            courses: [
                {
                    title: 'Data Structures',
                    description: 'Introduction to data structures and their algorithms, including arrays, stacks, queues, linked lists, trees, binary search trees, balanced trees, graphs, and hash tables. ',
                    courseLink: 'https://fa22.datastructur.es/',
                    catalogLink: 'https://classes.berkeley.edu/content/2022-fall-compsci-61b-001-lec-001',
                },
                {
                    title: 'Calculus',
                    description: 'Techniques of integration; applications of integration. Infinite sequences and series. First-order ordinary differential equations. Second-order ordinary differential equations; oscillation and damping; series solutions of ordinary differential equations.',
                    catalogLink: 'https://classes.berkeley.edu/content/2022-fall-math-1b-001-lec-001',
                },
                {
                    title: 'Discrete Mathematics',
                    description: 'A course on the study of logic, mathematical induction, sets, relations, functions, graphs, number theory, combinatorics, algebraic structures, and discrete probability theory.',
                    catalogLink: 'https://classes.berkeley.edu/content/2022-fall-compsci-70-001-lec-001',
                },
                {
                    title: 'Drugs and the Brain',
                    description: 'Exploration of drugs\' history, chemistry, effects on the brain, and botanical sources.',
                    catalogLink: 'https://classes.berkeley.edu/content/2022-fall-mcellbi-c62-001-lec-001',
                },
            ],
        },
        // Add more semesters as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="pt-16">
                <Navbar />
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                                Coursework
                            </span>
                        </h1>
                        <div className='mb-8 lg:w-1/2'>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Here&apos;s a list of courses I&apos;ve taken or plan to take during my time at UC Berkeley. I&apos;ve included a brief description of each course, as well as links to the course website, course description, and additional details where available.
                            </p>
                        </div>
                    </div>

                    {/* Coursework List - Original Layout with Expandable Courses */}
                    {semesters.map((semester, index) => (
                        <div key={index} className="mb-8 flex lg:flex-row flex-col justify-start">
                            <div className="lg:w-32 lg:text-right">
                                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                                    {semester.semester}
                                </h2>
                            </div>

                            <div className="lg:w-px lg:h-auto lg:mx-4 lg:my-0 h-px my-4 bg-slate-300 dark:bg-slate-600" />
                            <div className="flex flex-col lg:w-1/2">
                                {semester.courses.map((course: Course, courseIndex) => {
                                    const courseId = `${index}-${courseIndex}`;
                                    const isHovered = hoveredCourse === courseId;

                                    return (
                                        <div
                                            key={courseIndex}
                                            className="mb-4 group"
                                            onMouseEnter={() => setHoveredCourse(courseId)}
                                            onMouseLeave={() => setHoveredCourse(null)}
                                        >
                                            {/* Course Title */}
                                            <div className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg p-3 transition-colors duration-200">
                                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                                                    {course.title}
                                                </h3>
                                            </div>

                                            {/* Course Details - Hover Expandable */}
                                            <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="ml-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                                    <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                                                        {course.description}
                                                    </p>
                                                    <div className='flex flex-row flex-wrap gap-4'>
                                                        {course.courseLink && (
                                                            <Link
                                                                target="_blank"
                                                                href={course.courseLink}
                                                                className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors duration-200 flex items-center"
                                                            >
                                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                                Course Website
                                                            </Link>
                                                        )}
                                                        {course.catalogLink && (
                                                            <Link
                                                                target="_blank"
                                                                href={course.catalogLink}
                                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 flex items-center"
                                                            >
                                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                                Course Description
                                                            </Link>
                                                        )}
                                                        {course.detailsLink && (
                                                            <Link
                                                                target="_blank"
                                                                href={course.detailsLink}
                                                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200 flex items-center"
                                                            >
                                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                More Details
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Coursework;
