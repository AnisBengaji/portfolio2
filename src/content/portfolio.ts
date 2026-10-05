export const profile = {
  handle: "anis@security",
  name: "Anis Bengaji",
  availability: "Open to end of studies internship — 2026",
  tagline: "Cybersecurity student building intelligent systems for threat detection, response, and cloud security.",
  subline: "Off duty: building security labs, experimenting with AI, and exploring new technologies.",
  metaLines: [
    "Location: Ariana, Tunisia",
    "Rhythm: Open to internships, projects & cybersecurity opportunities",
  ],
  cvUrl: "#",
  terminal: {
    title: "anis@security — bash",
    command: "whoami",
    output: "Cybersecurity student focused on threat detection, security automation, and cloud security",
    nextCommand: "cat focus.txt",
  },
};

export const about = {
  photo: "/anis.png",
  paragraphs: [
    "I'm Anis Bengaji, a Network Infrastructure and Data Security engineering student at Esprit, focused on threat detection, incident response, and security automation.",
    "I enjoy working on cybersecurity projects from both sides — blue team, defending and detecting, and red team, testing and breaking things — because understanding both makes me better at each.",
  ],
};

export const skillGroups = [
  {
    category: "Cybersecurity",
    groups: [
      {
        title: "Threat Detection & SOC",
        items: [
          "Wazuh",
          "Splunk",
          "ELK",
          "Suricata",
          "Snort",
          "Sysmon",
          "Falco",
          "MITRE ATT&CK",
        ],
      },
      {
        title: "Incident Response & SOAR",
        items: [
          "Incident Response",
          "SOAR",
          "n8n",
          "Shuffle",
          "TheHive",
          "Cortex",
          "Security Automation",
        ],
      },
      {
        title: "Offensive Security",
        items: [
          "Kali Linux",
          "Metasploit",
          "Nmap",
          "Hydra",
          "CrackMapExec",
          "Atomic Red Team",
        ],
      },
      {
        title: "Network Security",
        items: [
          "pfSense",
          "Wireshark",
          "Networking",
          "DNS",
          "VPN",
          "Firewall",
        ],
      },
    ],
  },
  {
    category: "Cloud, Infrastructure & Development",
    groups: [
      {
        title: "Cloud & Containers",
        items: [
          "Kubernetes",
          "Docker",
          "Cilium",
          "Minikube",
          "Kubernetes Goat",
          "VMware",
        ],
      },
      {
        title: "Systems",
        items: [
          "Linux",
          "Ubuntu",
          "Windows",
          "Active Directory",
          "Bash",
          "Virtualization",
        ],
      },
      {
        title: "Programming",
        items: [
          "Python",
          "Java",
          "JavaScript",
          "C",
          "C++",
          "SQL",
        ],
      },
      {
        title: "DevOps & Tools",
        items: [
          "Git",
          "GitHub",
          "Jenkins",
          "Maven",
          "SonarQube",
          "Prometheus",
          "Grafana",
        ],
      },
    ],
  },
];

export type Project = {
  tag: string;
  title: string;
  stack: string[];
  bullets: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    tag: "SOC · SOAR · Banking · AI",
    title: "Banking SOC — Automated Incident Response Ecosystem",
    stack: [
      "Wazuh",
      "Suricata",
      "ELK",
      "T-Pot",
      "Shuffle",
      "TheHive",
      "Cortex",
      "RAG",
    ],
    bullets: [
      "Designed and deployed a next-generation SOC for the banking sector, integrating a full threat detection stack (Wazuh, Suricata, ELK, T-Pot) with end-to-end SOAR automation (Shuffle, TheHive, Cortex).",
      "Reduced MTTD by ~70% and MTTR by ~65% through automated playbooks and real-time alerting.",
      "Engineered a RAG-powered AI assistant capable of autonomously orchestrating response workflows and generating compliance-ready incident reports.",
      "Built compliance-aligned reporting workflows in line with PCI DSS and ISO 27001 requirements.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji" }],
  },
  {
    tag: "AI · Kubernetes · Cybersecurity",
    title: "AI-Powered Kubernetes Runtime Security",
    stack: [
      "Python",
      "Kubernetes",
      "Falco",
      "Cilium",
      "Isolation Forest",
      "Ollama",
      "Docker",
    ],
    bullets: [
      "Designed an autonomous runtime security system for Kubernetes capable of detecting abnormal container behavior and responding to security threats.",
      "Built a detection pipeline combining Falco runtime alerts with an Isolation Forest anomaly detection model to identify suspicious behavior.",
      "Implemented automated remediation actions such as pod isolation and termination using Kubernetes and Cilium, with circuit-breaker logic to prevent repeated actions.",
      "Integrated a local LLM through Ollama to generate structured SOC-style incident explanations using retrieved Falco rules, MITRE ATT&CK context, and remediation data.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/kubryon" }],
  },
  {
    tag: "SOC · Detection · Automation",
    title: "SOC Homelab — Detection & Monitoring",
    stack: [
      "Splunk",
      "Suricata",
      "Sysmon",
      "pfSense",
      "n8n",
      "Kali Linux",
      "Atomic Red Team",
    ],
    bullets: [
      "Built a virtualized SOC environment combining network IDS, firewall telemetry, endpoint monitoring, and SIEM capabilities.",
      "Developed an n8n SOAR workflow for automated threat classification, IP blocking through pfSense, and Discord alerting.",
      "Simulated multi-stage attacks and mapped detected activity to MITRE ATT&CK techniques across network and endpoint layers.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/Detection-Monitoring-homelab" }],
  },
  {
    tag: "Security Automation",
    title: "Automated SOC Pipeline — Wazuh + VirusTotal",
    stack: [
      "Wazuh",
      "VirusTotal API",
      "Ubuntu",
      "Shell",
      "Python",
    ],
    bullets: [
      "Built a real-time file integrity monitoring pipeline using Wazuh.",
      "Automatically extracted file hashes and validated suspicious files against the VirusTotal API.",
      "Implemented automated malware removal through Wazuh active response with no manual intervention.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/Automated-SOC-Pipeline-Wazuh-Active-Response-VirusTotal" }],
  },
  {
    tag: "DevOps · CI/CD",
    title: "DevOps — CI/CD Pipeline",
    stack: [
      "Jenkins",
      "Docker",
      "Kubernetes",
      "SonarQube",
      "Spring Boot",
      "Maven",
      "MySQL",
    ],
    bullets: [
      "Designed a complete CI/CD pipeline for a Spring Boot and MySQL application.",
      "Automated Maven builds, SonarQube code analysis, Docker image creation and DockerHub publishing.",
      "Deployed the application to Kubernetes on Minikube with Jenkins-triggered automation.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/Devops" }],
  },
  {
    tag: "Web · Desktop · Full Stack",
    title: "Tripin",
    stack: [
      "Symfony 6.4",
      "Java",
      "MySQL",
      "PHP",
      "Twig",
    ],
    bullets: [
      "Developed a complete travel platform combining web and desktop components.",
      "Implemented destination browsing, activity booking, event management, and community interaction features.",
      "Worked with Symfony, Doctrine ORM, Twig, Java, and MySQL to build the application architecture.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/travel-managementDesktop" }],
  },
  {
    tag: "Infrastructure · Monitoring",
    title: "Secure Virtual Infrastructure",
    stack: [
      "pfSense",
      "Linux",
      "OpenVPN",
      "Wazuh",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    bullets: [
      "Designed and secured a virtual infrastructure composed of Windows, Ubuntu, FreeNAS, and containerized services.",
      "Configured network security and remote access using pfSense and OpenVPN.",
      "Integrated Wazuh, Prometheus, and Grafana for security monitoring and infrastructure observability.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/Virtualisation-project" }],
  },
  {
    tag: "Networking · Security",
    title: "Network Reconnaissance Tool",
    stack: [
      "Nmap",
      "Python",
      "DNS",
      "WHOIS",
      "Network Enumeration",
    ],
    bullets: [
      "Built an integrated reconnaissance tool combining Nmap scanning, WHOIS information, and DNS enumeration.",
      "Automated reconnaissance workflows to collect network and domain information.",
      "Implemented report generation to present discovered information in a structured format.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/network-recon-tool" }],
  },
  {
    tag: "Desktop · Application",
    title: "EasyLab",
    stack: [
      "C++",
      "Qt",
      "MySQL",
    ],
    bullets: [
      "Developed a desktop application for managing Fab Lab resources, activities, and access control.",
      "Implemented database-backed resource and user management features.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/APPDesktop-SmartFabLab" }],
  },
  {
    tag: "Mobile · Flutter",
    title: "SmartGrind",
    stack: [
      "FlutterFlow",
      "Mobile",
    ],
    bullets: [
      "Developed a mobile application focused on sports and fitness tracking.",
      "Designed a user-friendly interface for tracking and managing sports activities.",
    ],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/AnisBengaji/fitnessApp-Mobile" }],
  },
];

export type TimelineEntry = {
  kind: "Education" | "Experience";
  period: string;
  title: string;
  org?: string;
  bullets?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "Education",
    period: "2025 – Present · Tunisia",
    title: "Engineering Cycle — Network Infrastructure & Data Security",
    org: "Esprit",
    bullets: [
      "Engineering studies focused on network infrastructure, cybersecurity, systems, and data security.",
      "Currently in the 2nd year of the engineering cycle.",
    ],
  },
  {
    kind: "Experience",
    period: "July – August 2026 · Tunisia",
    title: "Engineering Internship — Cybersecurity & Cloud Security",
    org: "RDI Espritech Cloud",
    bullets: [
      "Designed and developed an AI-powered autonomous runtime security system for Kubernetes.",
      "Integrated Falco for runtime threat detection and Cilium for network-level enforcement and workload isolation.",
      "Built an Isolation Forest anomaly detection pipeline to identify abnormal container behavior.",
      "Developed automated remediation logic for security incidents and integrated a local LLM with Ollama to generate SOC-style incident reports.",
    ],
  },
  {
    kind: "Experience",
    period: "August – September 2025 · Tunisia",
    title: "Corporate Immersion Internship — Technical Department",
    org: "Tunisie Telecom",
    bullets: [
      "Participated in the Network Operations Center (NOC): traffic monitoring and real-time incident resolution support.",
      "Designed and developed a customer request analytics dashboard with a React.js and Chart.js frontend for data visualization, Excel import, and real-time filtering.",
      "Integrated a Spring Boot API using Spring Data JPA and MySQL for data storage and retrieval via REST endpoints.",
    ],
  },
  {
    kind: "Education",
    period: "2022 – 2024 · Tunisia",
    title: "Integrated Preparatory Cycle",
    org: "Esprit",
    bullets: [
      "Two-year foundational cycle covering mathematics, algorithms, programming, and core computer science fundamentals before specializing in Network Infrastructure & Data Security.",
    ],
  },
  {
    kind: "Experience",
    period: "July – August 2023 · Tunisia",
    title: "Observation Internship",
    org: "Tunisie Telecom",
    bullets: [
      "Gained knowledge of network infrastructure and internal work methodologies.",
    ],
  },
  {
    kind: "Education",
    period: "2022 · Tunisia",
    title: "Baccalaureate in Computer Science",
    bullets: [],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
};

export const certificates: Certificate[] = [
  { title: "Ethical Hacker", issuer: "Cisco" },
  { title: "Cyber Threat Management", issuer: "Cisco" },
  { title: "Blue Team Junior Analyst", issuer: "Security Blue Team" },
  { title: "Cyberops Associate", issuer: "Cisco" },
  { title: "Fortinet Certified Associate in Cybersecurity", issuer: "Fortinet" },
  { title: "Scientific Computing with Python", issuer: "freeCodeCamp" },
  { title: "Certified Red Team Operations Management (CRTOM)", issuer: "Red Team Leaders" },
  { title: "Certified Phishing Prevention Specialist", issuer: "Hack & Fix" },
];

export type Award = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "First Prize — Integrated NIDS Project",
    org: "Esprit",
    period: "06/2026",
    description:
      "Recipient of the First Prize for the integrated network infrastructure and data security project at the 13th \"Bal des Projets,\" Esprit.",
  },
];

export const contact = {
  blurb:
    "I'm open to cybersecurity internships, projects, and opportunities involving threat detection, security automation, cloud security, and incident response.",
  links: [
    {
      label: "Email",
      value: "bengaji.anis@outlook.com",
      href: "mailto:bengaji.anis@outlook.com",
    },
    {
      label: "Phone",
      value: "+216 56078498",
      href: "tel:+21656078498",
    },
    {
      label: "Location",
      value: "Ariana, Tunisia",
      href: "#",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/bengajianis",
      href: "https://www.linkedin.com/in/bengajianis/",
    },
    {
      label: "GitHub",
      value: "github.com/AnisBengaji",
      href: "https://github.com/AnisBengaji",
    },
    
  ],
};