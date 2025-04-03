import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    afosha,
    cyberforge,
    DaDU,
    habesha,insa,kilole,laba,osc,sn,tripRide
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cyber Security",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full-Stack Developer",
        company_name: "Dambi Dollo University (DaDU)",
        icon: DaDU, // Replace with appropriate icon
        iconBg: "#383E56",
        date: "Jan 2024 - Present",
        points: [
            "Developing and maintaining procurement and tender management systems.",
            "Building a research repository for storing and accessing academic papers.",
            "Developing a journal management system to streamline article and journal publications.",
            "Implementing a hospital management system to automate the referral hospital workflow.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Organisation of Southern Cooperation (OSC)",
        icon: osc, // Replace with appropriate icon
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Aug 2024",
        points: [
            "Developed GreSLERN, an interactive educational content creation platform.",
            "Built CLUB, a financial visualization system for OSC member states.",
            "Collaborated with cross-functional teams to implement scalable and secure solutions.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "CyberForge Solution",
        icon: cyberforge, // Replace with appropriate icon
        iconBg: "#383E56",
        date: "Mar 2023 - Present",
        points: [
            "Designed and developed enterprise software solutions and cloud applications.",
            "Implemented secure digital platforms with a focus on cybersecurity best practices.",
            "Optimized database performance using SQL and NoSQL solutions.",
            "Deployed applications across AWS, GCP, and Infomaniak Swiss Cloud.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Information Network Security Administration (INSA)",
        icon: insa, // Replace with appropriate icon
        iconBg: "#E6DEDD",
        date: "Apr 2018 - Present",
        points: [
            "Developed multiple e-commerce platforms integrating payment gateways.",
            "Built an exit-exam practice system using Next.js and Firebase.",
            "Designed an Internet Intelligence Management system integrating OWASP and security monitoring tools.",
            "Created an offline map system using React.js and Leaflet.",
        ],
    },
    {
        title: "Mobile App Developer",
        company_name: "Trip Ride Hailing",
        icon: tripRide, // Replace with appropriate icon
        iconBg: "#383E56",
        date: "Sep 2021 - Jul 2022",
        points: [
            "Developed a ride-hailing mobile application using React Native.",
            "Integrated Google Maps API for real-time location tracking.",
            "Implemented Redux for efficient state management.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "SN-oneAfrica",
        icon: sn, // Replace with appropriate icon
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Mar 2022",
        points: [
            "Built a news platform using React.js and Node.js.",
            "Developed a streaming platform with WebSockets for real-time communication.",
            "Created a chat room system for interactive user engagement.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Habesha Gebeya",
        icon: habesha, // Replace with appropriate icon
        iconBg: "#383E56",
        date: "Feb 2022 - Jun 2023",
        points: [
            "Developed an e-commerce system using React.js and Node.js.",
            "Designed and optimized database interactions with MySQL.",
            "Implemented secure authentication and payment processing.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "LABA Technology",
        icon: laba, // Replace with appropriate icon
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Nov 2022",
        points: [
            "Developed a school management system for student record management.",
            "Built a dating application with text and video chat features using React Native.",
        ],
    },
    {
        title: "Mobile App Developer",
        company_name: "Afosha Hora Amba",
        icon: afosha, // Replace with appropriate icon
        iconBg: "#383E56",
        date: "May 2023 - May 2023",
        points: [
            "Developed a mobile app for tracking monthly community payments.",
            "Integrated Firebase for real-time database functionality.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

// const projects = [
//     {
//         name: "Car Rent",
//         description:
//             "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//         tags: [
//             {
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "mongodb",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "tailwind",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: carrent,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "Job IT",
//         description:
//             "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//         tags: [
//             {
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "restapi",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "scss",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: jobit,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "Trip Guide",
//         description:
//             "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//         tags: [
//             {
//                 name: "nextjs",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "supabase",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "css",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: tripguide,
//         source_code_link: "https://github.com/",
//     },
// ];

const projects = [
    {
        name: "Afosha Hora Amba",
        description:
            "A mobile application allowing users to report their monthly (Edir) payments to the committee, with payment history filtering and admin overview.",
        tags: [
            { name: "react-native", color: "blue-text-gradient" },
            { name: "firebase", color: "green-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Laba School Management System",
        description:
            "A system for school administrators to manage student records, including academic history, attendance, and discipline tracking.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "firebase", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "LOUQ Dating App",
        description:
            "A dating application with text and video chat functionalities, built for interactive social engagement.",
        tags: [
            { name: "react-native", color: "blue-text-gradient" },
            { name: "firebase", color: "green-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Habesha Gebeya",
        description:
            "An e-commerce system providing a platform for vendors and buyers to conduct business online.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "SN-oneAfrica News Platform",
        description:
            "A digital news platform allowing users to read and publish articles with interactive design elements.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "sql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "SN-oneAfrica Streaming Platform",
        description:
            "A real-time streaming platform for media content with support for live chat.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "socket.io", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Ride Hailing",
        description:
            "A ride-hailing mobile application connecting riders with nearby drivers for a convenient transport experience.",
        tags: [
            { name: "react-native", color: "blue-text-gradient" },
            { name: "django", color: "green-text-gradient" },
            { name: "firebase", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "G-market",
        description:
            "An e-commerce platform with integrated payment gateways, supporting multiple vendors and drop-shipping.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "mongodb", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "GreSLERN",
        description:
            "An interactive educational content creation platform developed for the Organization of Southern Cooperation (OSC).",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "mongodb", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "CLUB Finance Visualization System",
        description:
            "A financial visualization system designed for OSC member states to track and analyze financial data.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "flask", color: "green-text-gradient" },
            { name: "lightsql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Procurement (Tender Management)",
        description:
            "A full procurement system helping to manage tenders and participants’ information efficiently.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "nodejs", color: "green-text-gradient" },
            { name: "postgresql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Research Repository",
        description:
            "A centralized system to store and access research papers for students and researchers.",
        tags: [
            { name: "angular", color: "blue-text-gradient" },
            { name: "spring-boot", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Journal Management System",
        description:
            "A system allowing universities to manage and publish academic journals and articles.",
        tags: [
            { name: "php", color: "blue-text-gradient" },
            { name: "mysql", color: "green-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Hospital Management System",
        description:
            "A system automating workflow for a university referral hospital.",
        tags: [
            { name: "reactjs", color: "blue-text-gradient" },
            { name: "django", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };