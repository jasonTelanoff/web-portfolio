import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

interface Course {
    title: string;
    description: string;
    detailsLink?: string;
    catalogLink?: string;
    courseLink?: string;
}

const Coursework = () => {
    const semesters = [
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
                    description: 'Group study of selected topics for undergraduates under the supervision of a faculty member. Topics may vary from year to year.',
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
        <div className="container mx-auto my-16 px-4 pb-8">
            <Navbar />

            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Coursework</h1>

                {semesters.map((semester, index) => (
                    <div key={index} className="mb-8 flex lg:flex-row flex-col justify-start">
                        <div className="lg:w-32 lg:text-right">
                            <h2 className="text-2xl font-bold mb-4">{semester.semester}</h2>
                        </div>

                        <div className="lg:w-px lg:h-auto lg:mx-4 lg:my-0 h-px my-4 bg-gray-300" />
                        <div className="flex flex-col lg:w-1/2">
                            {semester.courses.map((course: Course, courseIndex) => (
                                <div key={courseIndex} className="mb-4">
                                    <p className="text-lg font-bold">{course.title}</p>
                                    <p className="text-gray-600 mb-2">{course.description}</p>
                                    <div className='flex flex-row mb-2'>
                                        {course.courseLink && (
                                            <div className='flex flex-row'>
                                                <Link target="_blank" href={course.courseLink}>
                                                    <p className="text-blue-500 hover:underline">Course Link</p>
                                                </Link>
                                                {(course.courseLink || course.detailsLink) && (
                                                    <p>&nbsp;|&nbsp;</p>
                                                )}
                                            </div>
                                        )}
                                        {course.catalogLink && (
                                            <div className='flex flex-row'>
                                                <Link target="_blank" href={course.catalogLink}>
                                                    <p className="text-blue-500 hover:underline">Course Description</p>
                                                </Link>
                                                {course.detailsLink && (
                                                    <p>&nbsp;|&nbsp;</p>
                                                )}
                                            </div>
                                        )}
                                        {course.detailsLink && (
                                            <Link target="_blank" href={course.detailsLink}>
                                                <p className="text-blue-500 hover:underline">More Details</p>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Coursework;
