import { TeamMember, TeamSection, Event, Project } from './types';

// Images from the provided HTML or generic placeholders
export const IMAGES = {
  hero_code: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBEEyFiRVadIR_7Kqu7uqRDW1uaN5NxgzKpfm44j1k3JPD_vrBJKVLveqaLm1D3_dCfPtsEimMAcnmIqzGnF3P5IG1PZfv10Zgpp01MyGHE7HqyiijgSOkmS6a1rsYA7zqdfL2dLJQrbU9qxKk3N0qe17MEY1vT-XywRvC1-mdfN5Vy62E98Jcx1I0Bto0Slx1ema58oSKCjc2CODbolV24TBj1sjJ2Otx2DbRNuKJLvIbd6mp6j8Yu4siRcHEtWnHmo0vcMFmIUc",
  event_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0GYqIyoCeNrYlU5JqjMIonHeLCoGOoBNU0TdLbn_71KdubX8HjDkkM-0hCYP8zDdBZk57PHSEYmNCfE834K7oEIe4VEAPAczgmK3IPtNG5wBjMfCw7pmliw9zszVXfPHWj4Jtwfue4vRUpWUke1fKWnGFrnKUd34BXdEiyaR8Sih0Ipa6piUofaDI91hEBkLna3_2PuMQMiynvT5Q2gsoQHM9UVXSIYQyzIdgKXdF0aOL3bLZz_9fVbDpaeFwTXmnijZwpuOvH0Q",
  event_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuClX6otex0hv446wffPZBTzx2VZiktO_SdFS3Y2P7t9VV4P4P2t3yWQEM5UT0FtHkbGdyqnZluO1FZYMYjuunxCJjblKGEVgxh3x5ePFeIxk3O1H5ksQjz7UvD-g8SAj6vbLNd-JV0uz1FHgFGCrrufvGPVYUvomo-ZkfZC-J70LvXLy9OeH855djmUXKBaPEqIZ3U-LNjD4ySrue-aHVD-ZmP21jbDMtI2yEVrxsAEFYBizI5KHxpOFs12RDdag3X6AfGElavfhfI",
  event_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-IRP-we-qSBb5JB5faOm34vonqGFqKJNdmy3wV6j7auqlCsovVHc8zkOu1Zu_XHkyXBbBSTnRRtjm8-wwpGWWGv4JJXzYBGgyhHb1Uw80E8YlIQtv_Bfc3AUwQFcV15mn8xj96PmD9zBIqGx7FhhJeDSEPhn4AakjOIER0G7p64FlpKJ_g0o1SoHi_IAcwHZFoWwDkQPpUrt7FGXOsgWpnaeQRoXjDq-6Gi-78zExbpGjQUe4y88pgpKJyyB3WmL_dOPyq8QtYwE",
  placeholder_profile_m: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5pfx9L9Sz8n3sFqdFCcwCVNcFuOb0RplBncp5e6mhlwXX4IbjqPjNJp2wFBSgV0Ti_HENNPtw9o4Glj5pTflqBcB6OTbPCFrASNMBDUYgc0oQ7MTV-XD28IZRYR8-xRyDWKVG3z78UfJy9WFIs8oQSk_i38TZNg9ivVHyegRVv_raCQURmi_bydw0UR7Q3fs_TgRGpLUyN-3xL9yPOntVOmrE-puDmDnScdYiTk0ROQAtIl4gg7tZ5pWRJs3U3QzaBi9fnbcgacc",
  placeholder_profile_f: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrKV-P_UmumfhbMyxNHCxCgT-fu8ENcvpjrOwCyDl6FR9wApUKY1nu6vPgfKYhQ6kERE66M-Ao5oAUPc_NrKCs_CDhgn8YAolEIJMX3IQT6wSgwuqcvBfUXSrHFcnVm51xs5db3syLzt5FDLYaYosVeXFyUo4liwQJMZtnFqhGLurmkrBen2VS1yFJV-rdvI8nVqL2--vkf0lJY7W-I9-mg-vnp2jDuJCGhNcSRy9GNgkzonmO59CMX-EdIgI1cVKLKaIoBCIsRG8",
};

export const LEADERSHIP: TeamMember[] = [
  { id: '1', name: 'Dr. S. Karthikeyan', role: 'Faculty Coordinator', image: IMAGES.placeholder_profile_m },
  { id: '2', name: 'Dr. R. Ganesan', role: 'Faculty Co-Coordinator', image: IMAGES.placeholder_profile_m },
  { id: '3', name: 'Arjun Mehta', role: 'Chairperson', image: IMAGES.placeholder_profile_m },
  { id: '4', name: 'Priya Sharma', role: 'Vice Chairperson', image: IMAGES.placeholder_profile_f },
  { id: '5', name: 'Rohan Das', role: 'Student Coordinator', image: IMAGES.placeholder_profile_m },
  { id: '6', name: 'Sneha Patel', role: 'Student Coordinator', image: IMAGES.placeholder_profile_f },
];

export const TEAMS: TeamSection[] = [
  {
    name: 'Technical Team',
    lead: { id: 't1', name: 'Vikram Singh', role: 'Technical Lead', image: IMAGES.placeholder_profile_m },
    members: [
      { id: 't2', name: 'Member 1', role: 'Web Dev', image: IMAGES.placeholder_profile_f },
      { id: 't3', name: 'Member 2', role: 'App Dev', image: IMAGES.placeholder_profile_m },
      { id: 't4', name: 'Member 3', role: 'AI/ML', image: IMAGES.placeholder_profile_f },
      { id: 't5', name: 'Member 4', role: 'Cloud', image: IMAGES.placeholder_profile_m },
    ]
  },
  {
    name: 'Event Management Team',
    lead: { id: 'e1', name: 'Ananya Roy', role: 'Events Lead', image: IMAGES.placeholder_profile_f },
    members: [
      { id: 'e2', name: 'Member 1', role: 'Logistics', image: IMAGES.placeholder_profile_m },
      { id: 'e3', name: 'Member 2', role: 'Planning', image: IMAGES.placeholder_profile_f },
      { id: 'e4', name: 'Member 3', role: 'Operations', image: IMAGES.placeholder_profile_m },
    ]
  },
  {
    name: 'PR & Outreach Team',
    lead: { id: 'p1', name: 'Kabir Singh', role: 'PR Lead', image: IMAGES.placeholder_profile_m },
    members: [
      { id: 'p2', name: 'Member 1', role: 'Outreach', image: IMAGES.placeholder_profile_f },
      { id: 'p3', name: 'Member 2', role: 'Sponsorships', image: IMAGES.placeholder_profile_m },
    ]
  },
  {
    name: 'Social Media Team',
    lead: { id: 's1', name: 'Zara Khan', role: 'Social Media Lead', image: IMAGES.placeholder_profile_f },
    members: [
      { id: 's2', name: 'Member 1', role: 'Content Writer', image: IMAGES.placeholder_profile_m },
      { id: 's3', name: 'Member 2', role: 'Reels/Video', image: IMAGES.placeholder_profile_f },
    ]
  },
  {
    name: 'Design Team',
    lead: { id: 'd1', name: 'Riya Sen', role: 'Design Lead', image: IMAGES.placeholder_profile_f },
    members: [
      { id: 'd2', name: 'Member 1', role: 'UI/UX', image: IMAGES.placeholder_profile_m },
      { id: 'd3', name: 'Member 2', role: 'GFX', image: IMAGES.placeholder_profile_f },
    ]
  },
];

export const EVENTS: Event[] = [
  {
    id: 'advitya-26',
    title: '@ Advitya 26\'',
    date: 'Stay Tuned',
    type: 'Meetup',
    image: IMAGES.event_1,
    description: 'Get ready for our upcoming event at Advitya 26. More details coming soon.',
    location: 'VIT Bhopal',
    status: 'Upcoming'
  },
  {
    id: 'cp-insights',
    title: 'CP – Getting Started & ICPC Insights',
    date: 'Dec 29, 2025',
    type: 'Speaker Session',
    image: IMAGES.event_2,
    description: 'An online Competitive Programming speaker session featuring Jaskaran Singh (ICPC World Finalist, SWE @ Google).',
    location: 'Online',
    status: 'Past'
  },
  {
    id: 'geek-gala',
    title: 'Geek Gala 3.0',
    date: 'Feb 16, 2025',
    type: 'Tech Carnival',
    image: IMAGES.event_3,
    description: 'Step into the ultimate battleground of wits, games, and coding duels! From cracking riddles to smashing high scores in retro classics.',
    location: 'VIT Bhopal',
    status: 'Past'
  },
  {
    id: 'meme-tournament',
    title: 'Meme Tournament',
    date: 'Feb 20, 2025',
    type: 'Competition',
    image: IMAGES.event_1,
    description: 'Test your humour in the upcoming meme tournament. Participate with your friends and battle for the funniest title.',
    location: 'VIT Bhopal',
    status: 'Past'
  }
];

export const PROJECTS: Project[] = [
  {
    name: 'Geek Week: Local',
    description: 'A week-long hackathon of creating hacks, solving problems, and building profiles both big and small.',
    tags: ['C++', 'Hackathon', 'Competitive Programming'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/GeekWeek-Local',
    stars: 6,
    forks: 13
  },
  {
    name: 'VIT-links-frontend',
    description: 'VITLinks is the place where you can find & connect with fellow VITians! Browse students and share social links.',
    tags: ['JavaScript', 'React', 'Frontend'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/VIT-links-frontend',
    stars: 1,
    forks: 0
  },
  {
    name: 'VIT-links-backend',
    description: 'Backend API for VITLinks returning data of all contributors with dynamic endpoints.',
    tags: ['JavaScript', 'Node.js', 'API'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/VIT-links-backend',
    stars: 1,
    forks: 0
  },
  {
    name: 'Hacktoberfest2021-Python',
    description: 'Collection of Beginner to Intermediate level Python scripts contributed by members and participants.',
    tags: ['Python', 'Jupyter Notebook', 'Open Source'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/HacktoberFest2021-Python',
    stars: 14,
    forks: 55
  },
  {
    name: 'Hacktoberfest2021-Python-Projects',
    description: 'Collection of Beginner to Intermediate level Python projects contributed by members.',
    tags: ['Python', 'Projects', 'Hacktoberfest'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/Hacktoberfest2021-Python-Projects',
    stars: 4,
    forks: 20
  },
  {
    name: 'GeeksforGeeks-Coding-Practise',
    description: 'Collection of Beginner to Intermediate level Coding Questions from GeeksforGeeks.',
    tags: ['Java', 'Algorithms', 'DS'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/GeeksforGeeks-Coding-Practise',
    stars: 12,
    forks: 22
  },
  {
    name: 'Coding-Hearts',
    description: 'A 3-day event teaching Python and helping participants build capstone projects.',
    tags: ['Python', 'Education', 'Workshop'],
    link: 'https://github.com/GeeksforGeeks-VIT-Bhopal/Coding-Hearts',
    stars: 3,
    forks: 0
  }
];