const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/terminal.svg",
      type: "terminal",
    },
    {
      id: 2,
      img: "/icons/user.svg",
      type: "contact",
    },
    {
      id: 3,
      img: "/icons/mode.svg",
      type: "preferences",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: true,
    },
  ];
  
  const projects = [
    {
      id: 1,
      date: "Jan 2026",
      title:
        "AlgoCubeSolver – Optimal 3×3 Rubik’s Cube Solver using Korf’s IDA* Algorithm",
      image: "/images/algocubesolver.png",
      link: "https://algocubesolver.onrender.com/",
      tech: ["C++", "IDA*", "BFS", "DFS", "IDDFS", "OOP", "Docker"],
    },
    {
      id: 2,
      date: "Dec 2025",
      title:
        "DarwinDispatch – Logistics Optimization using Multi-Objective Genetic Algorithms",
      image: "/images/darwindispatch.png",
      link: "https://darwindispatch.streamlit.app/",
      tech: ["Python", "DEAP", "Genetic Algorithms", "NumPy"],
    },
    {
      id: 3,
      date: "Nov 2025",
      title:
        "ChronicleX – Serverless Medium-Style Blogging Platform",
      image: "/images/chroniclex.png",
      link: "https://github.com/Tarunbhati100/ChronicleX",
      tech: ["Node.js", "React", "Prisma", "Cloudflare Workers", "Tailwind"],
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/Tarunbhati100",
    },
    {
      id: 2,
      text: "Leetcode",
      icon: "/icons/leetcode.svg",
      bg: "#4bcb63",
      link: "https://leetcode.com/u/Tarunbhati/",
    },
    {
      id: 3,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/tarunbhati17/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/gal1.png",
    },
    {
      id: 2,
      img: "/images/gal2.png",
    },
    {
      id: 3,
      img: "/images/gal3.png",
    },
    {
      id: 4,
      img: "/images/gal4.png",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    projects,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
  
      // ▶ AlgoCubeSolver
      {
        id: 101,
        name: "AlgoCubeSolver",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-5",
        windowPosition: "top-[8vh] right-10",
        children: [
          {
            id: 1,
            name: "AlgoCubeSolver.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "High-performance 3×3 Rubik’s Cube solver built in C++ using OOP.",
              "Implemented BFS, DFS, IDDFS, and Korf’s IDA* for optimal solving.",
              "Solved 8-move scrambles under 3 seconds and 13-move scrambles under 10 seconds.",
              "Designed memory-efficient heuristic evaluation functions for optimal path guidance.",
              "Deployed cross-platform backend with Docker and Render."
            ],
          },
          {
            id: 2,
            name: "LiveDemo.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://algocubesolver.onrender.com/",
            position: "top-10 right-20",
          },
          {
            id: 3,
            name: "GitHub.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Tarunbhati100/AlgoCubeSolver",
            position: "top-20 right-60",
          },
          {
            id: 4,
            name: "Project flow.jpeg",
            icon: "/images/algocubesolver1.jpeg",
            kind: "file",
            fileType: "img",
            imageUrl: "/images/algocubesolver1.jpeg",
            position: "top-5 left-10",
          },
        ],
      },
  
      // ▶ DarwinDispatch
      {
        id: 102,
        name: "DarwinDispatch",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 left-80",
        windowPosition: "top-[20vh] right-10",
        children: [
          {
            id: 1,
            name: "DarwinDispatch.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Logistics optimization system solving the Vehicle Routing Problem (VRP).",
              "Implemented multi-objective genetic algorithms using DEAP.",
              "Used tournament selection, PMX crossover, and shuffle mutation.",
              "Introduced adaptive stopping criteria for convergence balance.",
              "Built using Python, NumPy, and Matplotlib for scalable results."
            ],
          },
          {
            id: 2,
            name: "GitHub.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Tarunbhati100/DarwinDispatch",
            position: "top-10 right-20",
          },
          {
            id: 3,
            name: "Live Link.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://darwindispatch.streamlit.app/#9c4910ec",
            position: "top-5 right-50",
          },
          {
            id: 4,
            name: "Project flow.jpeg",
            icon: "/images/darwinDispatch1.jpeg",
            kind: "file",
            fileType: "img",
            imageUrl: "/images/darwinDispatch1.jpeg",
            position: "top-5 left-10",
          },
        ],
      },
  
      // ▶ YouTube QA Assistant (NIT Internship)
      {
        id: 103,
        name: "YouTube QA Assistant",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 right-30",
        windowPosition: "top-[30vh] right-10",
        children: [
          {
            id: 1,
            name: "YouTubeQA.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Built during Summer Internship at NIT Trichy.",
              "Designed a YouTube Question-Answering system using lightweight transformer embeddings.",
              "Integrated transcript extraction, chunking, and vectorization.",
              "Implemented Retrieval-Augmented Generation (RAG) pipeline.",
              "Used FAISS for semantic similarity search and contextual responses.",
              "Built with Python, LangChain, Streamlit, and LLM integration."
            ],
          },
          {
            id: 2,
            name: "YouTubeQA Design.jpeg",
            icon: "/images/yt-assist1.jpeg",
            kind: "file",
            fileType: "img",
            imageUrl: "/images/yt-assist1.jpeg",
            position: "top-5 left-10",
          },
          {
            id: 3,
            name: "architectures.jpeg",
            icon: "/images/yt-assist2.jpeg",
            kind: "file",
            fileType: "img",
            imageUrl: "/images/yt-assist2.jpeg",
            position: "top-5 left-10",
          },
          {
            id: 4,
            name: "GitHub.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Tarunbhati100/yt-assist",
            position: "top-20 right-60",
          },
        ],
      },
      
    ],
  };
  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Tarun.jpeg",
        icon: "/images/Tarun.jpeg",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/Tarun.jpeg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/gal1.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/gal1.png",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/Tarun.jpeg",
        description: [
          "Hey! I’m Tarun 👋 — I enjoy tackling tough problems and building systems that actually work well under pressure.",
          "I’m passionate about clean logic, optimized performance, and creating experiences that feel effortless to use.",
          "I like understanding how things work at a deeper level — not just making them run, but making them run better.",
          "Curiosity drives me — whether it’s refining an idea, exploring new tools, or pushing my limits with something challenging.",
        ],
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        // you can add `href` if you want to open a hosted resume
        // href: "/your/resume/path.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "osi-model-7-layers-1.png",
        icon: "/images/osi-model-7-layers-1.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/osi-model-7-layers-1.png",
      },
      {
        id: 2,
        name: "process-state-diagram.png",
        icon: "/images/process-state-diagram.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/process-state-diagram.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    preferences: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };

  const AGENT_NAMES = ['Clippy', 'Bonzi', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']

  export {AGENT_NAMES}