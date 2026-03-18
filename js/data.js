/**
 * data.js — Portfolio data
 * Edit this file with your real info.
 */

const portfolioData = {
  pageInfo: {
    title: "Dan Ngugi",
    role: "Full-Stack Developer",
    backgroundInformation:
      "I'm a passionate software developer with a strong foundation in building scalable, efficient, and user-centered applications. With experience across the full development lifecy from concept and design to deployment and maintenance,I thrive on turning complex problems into clean, elegant solutions.. " +
      "I love building clean, performant web applications and exploring " +
      "emerging technologies. When I'm not coding, you'll find me gaming " +
      "or tinkering with side projects.",
    heroImage: "", // leave empty — hero image is set directly in home.php
    email: "dancanngugi79@gmail.com",
    phoneNumber: "+254717136695",
    address: "Rainbow Resort Lane",
  },

  socials: [
    { _id: "1", title: "GitHub", url: "https://github.com/" },
    { _id: "2", title: "LinkedIn", url: "https://linkedin.com/in/" },
    { _id: "3", title: "Twitter", url: "https://twitter.com/" },
  ],

  experiences: [
    {
      _id: "exp1",
      jobTite: "Frontend Developer Intern",
      company: "National Hospital Insurance Fund",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw2FDjSDVMCU0RK38iZsZAd1T3CcvvY5kmw&s",
      dateStarted: "2024-01-01",
      dateEnded: "2024-06-01",
      isCurrentWorkingHere: false,
      technologies: [
        {
          _id: "t1",
          title: "React",
          image: "https://placehold.co/40x40/61dafb/000?text=R",
        },
        {
          _id: "t2",
          title: "TypeScript",
          image: "https://placehold.co/40x40/3178c6/fff?text=TS",
        },
      ],
      points: [
        "Built responsive UI components using React and TailwindCSS.",
        "Integrated RESTful APIs for dynamic content rendering.",
        "Collaborated in an Agile team using Git and Jira.",
      ],
    },
    {
      _id: "exp1",
      jobTite: "Software Developer Intern",
      company: "Rawliz Design",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBm4KtQGyNLC9C184VtE-xvxkSSl4SeATHQ&s",
      dateStarted: "2024-01-01",
      dateEnded: "2024-06-01",
      isCurrentWorkingHere: false,
      technologies: [
        {
          _id: "t1",
          title: "React",
          image: "https://placehold.co/40x40/61dafb/000?text=R",
        },
        {
          _id: "t2",
          title: "TypeScript",
          image: "https://placehold.co/40x40/3178c6/fff?text=TS",
        },
      ],
      points: [
        "Built responsive UI components using React and TailwindCSS.",
        "Integrated RESTful APIs for dynamic content rendering.",
        "Collaborated in an Agile team using Git and Jira.",
      ],
    },
    {
      _id: "exp1",
      jobTite: "Frontend Developer Intern",
      company: "National Hospital Insurance Fund",
      companyImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw2FDjSDVMCU0RK38iZsZAd1T3CcvvY5kmw&s",
      dateStarted: "2024-01-01",
      dateEnded: "2024-06-01",
      isCurrentWorkingHere: false,
      technologies: [
        {
          _id: "t1",
          title: "React",
          image: "https://placehold.co/40x40/61dafb/000?text=R",
        },
        {
          _id: "t2",
          title: "TypeScript",
          image: "https://placehold.co/40x40/3178c6/fff?text=TS",
        },
      ],
      points: [
        "Built responsive UI components using React and TailwindCSS.",
        "Integrated RESTful APIs for dynamic content rendering.",
        "Collaborated in an Agile team using Git and Jira.",
      ],
    },
  ],

  skills: [
    {
      _id: "s1",
      title: "JavaScript",
      progress: 85,
      image: "https://placehold.co/60x60/f7df1e/000?text=JS",
    },
    {
      _id: "s2",
      title: "TypeScript",
      progress: 80,
      image: "https://placehold.co/60x60/3178c6/fff?text=TS",
    },
    {
      _id: "s3",
      title: "React",
      progress: 90,
      image: "https://placehold.co/60x60/61dafb/000?text=Re",
    },
    {
      _id: "s4",
      title: "Next.js",
      progress: 75,
      image: "https://placehold.co/60x60/000/fff?text=Nx",
    },
    {
      _id: "s5",
      title: "Node.js",
      progress: 78,
      image: "https://placehold.co/60x60/3c873a/fff?text=No",
    },
    {
      _id: "s6",
      title: "PHP",
      progress: 70,
      image: "https://placehold.co/60x60/8993be/fff?text=PHP",
    },
    {
      _id: "s7",
      title: "Python",
      progress: 72,
      image: "https://placehold.co/60x60/3572a5/fff?text=Py",
    },
    {
      _id: "s8",
      title: "MySQL",
      progress: 68,
      image: "https://placehold.co/60x60/f29111/fff?text=SQL",
    },
    {
      _id: "s9",
      title: "Git",
      progress: 88,
      image: "https://placehold.co/60x60/f14e32/fff?text=Git",
    },
    {
      _id: "s10",
      title: "Docker",
      progress: 55,
      image: "https://placehold.co/60x60/0db7ed/fff?text=Do",
    },
    {
      _id: "s11",
      title: "Tailwind",
      progress: 85,
      image: "https://placehold.co/60x60/38bdf8/000?text=Tw",
    },
    {
      _id: "s12",
      title: "Linux",
      progress: 65,
      image: "https://placehold.co/60x60/333/fff?text=Lx",
    },
    {
      _id: "s13",
      title: "laravel",
      progress: 65,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
  ],

  projects: [
    {
      _id: "p1",
      title: "Hospital Management System",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-K63vmhpQN_YXvhiczTXwFVh7Qy0VhcuvA&s",
      summary:
        "A full-stack Hospital management system built with react, tailwindcss. " +
        "Used Laravel framework for the backend " +
        "The system is used to manage the daily hospital operations.",
      linkToBuild: "https://github.com/",
      technologies: [
        {
          _id: "pt13",
          title: "Laravel",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          _id: "pt11",
          title: "Tailwind",
          image: "https://placehold.co/60x60/38bdf8/000?text=Tw",
        },
      ],
    },
    {
      _id: "p1",
      title: "Netflix clone",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkX7S56E5uRpJxqUb5x2M1s9BbqT-lo7F0g&s",
      summary:
        "A full-stack Hospital management system built with react, tailwindcss. " +
        "Used Laravel framework for the backend " +
        "The system is used to manage the daily hospital operations.",
      linkToBuild: "https://github.com/",
      technologies: [
        {
          _id: "pt13",
          title: "Laravel",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          _id: "pt11",
          title: "Tailwind",
          image: "https://placehold.co/60x60/38bdf8/000?text=Tw",
        },
      ],
    },
    {
      _id: "p2",
      title: "Mern Food Delivery App",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*UYIABjZ-o319cmLVTgM7Tw.jpeg",
      summary:
        "A full-stack Food delivery management system built with react, tailwindcss. " +
        "Used nodejs, express and mongodb frameworks for the backend " +
        "The system is used to all users to create restaurant , clients can search for restaurants that are near their location and order food from them",
      linkToBuild: "https://github.com/",
      technologies: [
        {
          _id: "pt1",
          title: "React",
          image: "https://placehold.co/40x40/61dafb/000?text=R",
        },
        {
          _id: "pt11",
          title: "Tailwind",
          image: "https://placehold.co/60x60/38bdf8/000?text=Tw",
        },
      ],
    },
  ],
};
