import { Experience, Education, Skill, ResearchItem, Contribution } from './types';

export const PROFILE = {
  name: "Ashlin V Thomas",
  title: "Research Student",
  email: "ashlinv.thomas@niser.ac.in",
  birthday: "30 March, 2004",
  location: "NISER, Bhubaneswar, India",
  image: "/assets/images/AshlinProfile.jpeg",
  socials: {
    github: "https://github.com/Ashlin-V-Thomas",
    twitter: "https://x.com/AshlinVThomas",
    linkedin: "https://in.linkedin.com/in/ashlin-v-thomas-b517b92b1"
  }
};

export const ABOUT_TEXT = [
  "I am an Integrated MSc. student at the National Institute of Science Education and Research (NISER) Bhubaneswar, India. Currently, I am pursuing a major degree in physics and a minor degree in mathematics; and have completed six semesters of the course.",
  "Raised in the serene countryside of Kerala, my curiosity was sparked by the mathematical descriptions of natural phenomena. This curiosity grew into a deep respect for the various mathematical methods used to understand the world around us, guiding me on a path to becoming an aspiring theoretical physicist with a keen interest in unraveling the mysteries of the universe through mathematics."
];

export const INTERESTS = [
  { title: "Theoretical Physics", desc: "Describing the beauty and complexity of the world around us." },
  { title: "Mathematics", desc: "The most beautiful language I have ever learned, spoken and written." },
  { title: "Computational studies", desc: "Making use of computational power to simulate theoretical models." },
  { title: "Cinema, Friends, Music", desc: "Former for the joy, latter for the soul and the middle for the heart." }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "Integrated MSc. (Major - Physics, Minor - Mathematics)",
    period: "2022 - Present",
    description: "I am currently enrolled in the seventh semester of the Integrated MSc. programme at the National Institute of Science Education and Research (NISER), Bhubaneswar, India. I am having a CGPA of 9.79 at the end of six semesters."
  },
  {
    id: "e2",
    degree: "AISSCE",
    period: "2021 - 2022",
    description: "I have completed my higher secondary education from Citadel Residential School Ranni, Pathanamthitta, Kerala. I managed to secure a total of 99.2 % in the AISSCE examination, with the subjects - English, Physics, Chemistry, Mathematics and Biology."
  },
  {
    id: "e3",
    degree: "AISSE",
    period: "2019 - 2020",
    description: "I have completed my secondary education from Citadel Residential School Ranni, Pathanamthitta, Kerala. I managed to secure a total of 98.4 % in the AISSE examination, with the subjects - English, Malayalam, Mathematics, Science and Social Science."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ex1",
    title: "Summer Internship 2025 : Max Planck Institute for the Physics of Complex Systems, Dresden, Germany",
    description: "I am currently working as a research intern at the Finite Systems Division of the Max Planck Institute for the Physics of Complex Systems, Dresden, Germany under the supervision of Prof. Dr. Jan Michael Rost. The project is on developing a scheme to visualize quantum Hamiltonians as smooth images and exploring the relationship between the Hamiltonian and the image."
  },
  {
    id: "ex2",
    title: "Summer Internship 2024 : Raman Research Instiute, Bangalore",
    description: "I have completed a summer internship at the theoretical physics division of Raman Research Institute(RRI), Bangalore under the supervision of Dr. Shovan Dutta. The project was on developing a semi-classical quantization scheme for open quantum systems evolving under Lindblad dynamics using the Wigner-Weyl formalism."
  },
  {
    id: "ex3",
    title: "Dynamical Systems Project Group Supervisor",
    description: "Vikiran, the physics club of NISER, offered me the chance to lead a team of students exploring and applying concepts in dynamical systems."
  },
  {
    id: "ex4",
    title: "Winter Internship 2023 : IISER Pune",
    description: "I have completed a winter internship at the mathematics department of IISER Pune under the supervision of Dr. Anisa Chorwadwala. The project was on shape optimization(isoperimetric) problems."
  },
  {
    id: "ex5",
    title: "Summer Internship 2023 : NISER Bhubaneswar",
    description: "I have completed a summer internship at the School of Mathematical Sciences, NISER, under the supervision of Dr. Anupam Pal Choudhury. The project was on planar systems of differential equations."
  },
  {
    id: "ex6",
    title: "Summer Internship 2023 : NISER Bhubaneswar",
    description: "I have completed a summer internship at the School of Physical Sciences, NISER, under the supervision of Dr. Sayantani Bhattacharyya. The project was on nonlinear dynamics and chaos theory."
  }
];

export const AWARDS: Experience[] = [
  {
    id: "a1",
    title: "Academic Achievements",
    points: [
      "Achieved the highest CGPA in the batch of 2022 at the end of the academic year 2022-23.",
      "Achieved the highest CGPA among all Int. MSc students in the academic year 2023-24.",
      "Achieved the highest CGPA among all Int. MSc students in the academic year 2024-25.",
      "Consistently excelled securing a grade of 10 in all physics theory courses."
    ]
  },
  {
    id: "a2",
    title: "INSPIRE Scholarship",
    description: "Recipient of Innovation in Science Pursuit for Inspired Research (INSPIRE) Scholarship issued by Department of Science and Technology - Government of India."
  },
  {
    id: "a3",
    title: "AISSCE District Topper",
    description: "District topper in All India Senior School Certificate Examination (AISSCE) 2022 with centum in physics and chemistry. Awarded by Central Travancore Sahodaya Complex."
  },
  {
    id: "a4",
    title: "Third position at Science Expo",
    description: "Secured third position at the Science Expo 2019 held at the Department of Physics, Catholicate College, Pathanamthitta."
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, fullMark: 100 },
  { name: "Mathematica", level: 100, fullMark: 100 },
  { name: "LaTeX", level: 90, fullMark: 100 },
  { name: "Linux", level: 80, fullMark: 100 },
];

export const LANGUAGES: Skill[] = [
  { name: "Malayalam", level: 100, fullMark: 100 },
  { name: "English", level: 95, fullMark: 100 },
  { name: "Hindi", level: 80, fullMark: 100 },
  { name: "Tamil", level: 70, fullMark: 100 },
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  { 
    title: "Quantum Many Body Physics", 
    description: "Investigating the collective behavior of interacting quantum particles, focusing on emergent phenomena, phase transitions, and strongly correlated systems."
  },
  { 
    title: "Quantum Optics", 
    description: "Exploring the interaction between light and matter at the quantum level, including photon statistics, coherence, and cavity quantum electrodynamics."
  },
  { 
    title: "Open Quantum Systems", 
    description: "Modeling the dynamics of quantum systems interacting with their environment, studying decoherence, dissipation, and non-equilibrium steady states."
  },
  { 
    title: "Non-Hermitian Physics and Topology", 
    description: "Analyzing systems described by non-Hermitian Hamiltonians, focusing on exceptional points, PT-symmetry, and topological phases in open systems."
  },
  { 
    title: "Theoretical Condensed Matter Physics", 
    description: "Theoretical study of macroscopic physical properties of matter, electronic structure, and novel material phases using quantum field theory and statistical mechanics."
  },
  { 
    title: "Mathematical Physics", 
    description: "Applying rigorous mathematical methods to solve physical problems, emphasizing operator algebras, spectral theory, and geometric mechanics."
  },
  { 
    title: "Quantum Information and Computation", 
    description: "Studying information processing using quantum systems, including entanglement, quantum algorithms, and error correction protocols."
  },
  { 
    title: "Nonlinear Dynamics and Chaos", 
    description: "Investigating the behavior of dynamical systems highly sensitive to initial conditions, focusing on attractors, bifurcations, and complexity."
  },
];

export const CONTRIBUTIONS: Contribution[] = [
  {
    type: "Talk",
    title: "Harmonizing Classical and Quantum Mechanics: A semi-classical approach to quantum systems",
    abstract: "Classical and quantum mechanics: so united in purpose, yet worlds apart in their formalism. While position-momentum phase space, poison brackets and Hamilton’s equations reign the realm of classical mechanics, the quantum domain is governed by Hilbert spaces, hermitian operators and Schrodinger equation. Initial attempts to bridge the gap are quickly thwarted by Heisenberg and his uncertainty principle, but let’s not give up just yet. In the talk, I will try to define the quantum counterparts of elements of classical mechanics using the language of Wigner-Weyl transform. I’ll aim to establish a robust semi-classical approach to quantum mechanics — one that isn’t just an approximation, but is actually exact! Along the way, expect some fun examples, fewer headaches, and a bit more harmony in the universe—or at least in our equations!",
    links: [
      { label: "Youtube Video", url: "https://www.youtube.com/watch?v=O3ZkijtkoRg" },
      { label: "Download Slides", url: "/assets/pdfs/WignerWeyl_VikiranTalk.pdf" }
    ]
  },
  {
    type: "Talk",
    title: "Turning Quantum Hamiltonians into Images: A Framework for Noise-Resilient Representations",
    abstract: "In the realm of quantum mechanics, Hamiltonians are central to under-standing the behaviour of quantum systems, as they encapsulate the total energy and dynamics of these systems. In a finite-dimensional Hilbert space, one can represent Hamiltonians as Hermitian matrices but the challenge lies in effectively visualizing and interpreting these matrices. Formally, what would be a good basis to represent a Hamiltonian? In this talk, we will explore the idea of transforming Hamiltonians into “smooth images” using a basis change through a unitary transformation. We will lay out the rigorous mathematical framework behind this transformation and study the properties of the resulting images. We will also discuss the robustness of these representations to noise, which is crucial for practical applications in quantum error mitigation and quantum control. Beyond the equations, this approach opens a new visual way of thinking about quantum systems - where the algebra of operators meets the aesthetics of image processing. By the end of this talk, one would leave with not just a new perspective on visualizing Hamiltonians but also an appreciation of the interplay between quantum mechanics, linear algebra, and image processing.",
    links: [
      { label: "Youtube Video", url: "https://www.youtube.com/watch?v=RX38xi0GiFk" },
      { label: "Download Slides", url: "/assets/pdfs/TurningHamiltoniansIntoImages_VikiranTalk.pdf" }
    ]
  },
  {
    type: "Project",
    title: "Nonlinear Dynamics",
    abstract: "In this project, we will discuss the basics of nonlinear dynamics and will dive into the study of a nonlinear system - a population growth model involving different population interactions. Nonlinear dynamics involves the study of systems that are governed by equations that are not of the linear form - such as population dynamics, double pendulum, weather dynamics and fluid dynamics. We will begin our study with an analysis of first-order and linear systems, introducing the notion of fixed points and their stability and bifurcations and its different types. We will look into a few numerical methods to solve these systems and phase plane analysis. We will conclude by analyzing a second-order nonlinear system of two populations interacting with each other.",
    links: [
      { label: "Download Report", url: "/assets/pdfs/Non_linear_Dynamics_final-1.pdf" }
    ]
  },
  {
    type: "Project",
    title: "Google PageRank Algorithm",
    abstract: "The Google PageRank algorithm is a cornerstone of modern web search engines, providing a mechanism to rank web pages based on their link structure. This project explores the mathematical foundation of the algorithm, modeling the internet as a directed graph using stochastic matrices and probability vectors. An iterative scheme is utilized to compute the PageRank vector, representing the steady-state distribution of web page ranks. The computational challenges of convergence and the scalability of the algorithm are addressed.",
    links: [
      { label: "Download Report", url: "/assets/pdfs/googlepagerank_finalreport.pdf" },
      { label: "Download Slides", url: "/assets/pdfs/Google Page Rank Algorithm-1.pdf" }
    ]
  },
  {
    type: "Project",
    title: "Automorphism Group of Symmetric Groups",
    abstract: "In the domain of group theory, one finds symmetric groups or permutation groups to be significant when it comes to understanding the symmetries and structure of mathematical objects, extending its applications to topology, combinatorics and cryptography. In this report, we will discuss about the group of automorphisms - structure-preserving maps - on symmetric groups and list a few important theorems.",
    links: [
      { label: "Download Report", url: "/assets/pdfs/Automorphism_group_of_Symmetric_Groups.pdf" }
    ]
  },
  {
    type: "Project",
    title: "The Splitwise Problem",
    abstract: "One evening, out of sheer boredom, I started pondering how the famous application Splitwise works. The concept is straightforward: you and your friends make numerous payments for each other, and at the end of the day, you want to settle all debts. What is the minimum number of transactions required to achieve this? Check out the report to find the answer.",
    links: [
      { label: "Download Report", url: "/assets/pdfs/The__Splitwise__Problem-1.pdf" }
    ]
  }
];