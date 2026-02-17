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
  {
    id: '1',
    name: 'Prof. Jitendra Mathur',
    role: 'Faculty Coordinator',
    image: "/images/team/jitendra-mathur.jpg",
  },
  {
    id: '2',
    name: 'Ashish Vishwakarma',
    role: 'Chairperson',
    image: "/images/team/ashish-vishwakarma.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ashish-vishwakarma04/"
    }
  },
  {
    id: '3',
    name: 'Khushang Singh',
    role: 'Chairperson',
    image: "/images/team/khushang-singh.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/khushangsingh2004/"
    }
  },
  {
    id: '4',
    name: 'Swayam Prakash Panda',
    role: 'Student Coordinator',
    image: "/images/team/swayam-panda.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/swayam200/",
      email: "swayam.23bai10661@vitbhopal.ac.in",
    }
  },
  {
    id: '5',
    name: 'Athrv Dixit',
    role: 'Student Coordinator',
    image: "/images/team/athrv-dixit.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/athrvdixit/"
    }
  },
];

export const TEAMS: TeamSection[] = [
  {
    name: 'Technical Team',
    lead: { id: 't1', name: 'Akanksha Shahi', role: 'Technical Lead', image: "images/team/technical/akanksha-shahi.jpg" },
    members: [
      { id: 't2', name: 'Kartikeya Shukla', role: 'Web Dev', image: "images/team/technical/kartikeya.webp" },
      { id: 't3', name: 'Krishna Kushwaha', role: 'App Dev', image: "images/team/technical/krishna.jpg" },
      { id: 't4', name: 'Praveen Kumar Patel', role: 'AI/ML', image: "images/team/technical/praveen.jpg" },
      { id: 't5', name: 'Tarni Jain', role: 'Cloud', image: "images/team/technical/tarni.jpg" },
      {
        id: 't6', name: 'Saumya Ambar', role: 'Web Dev', image: "images/team/technical/saumya.jpg",
      },
    ]
  },
  {
    name: 'Event Management Team',
    lead: { id: 'e1', name: 'Vishal Kumar', role: 'Events Lead', image: "images/team/events/vishal.jpg" },
    members: [
      { id: 'e2', name: 'Vedanshika Singh', role: 'Logistics', image: "images/team/event/vedanshika.jpg" },
      { id: 'e3', name: 'Steve Kevin Dias', role: 'Planning', image: "images/team/event/steve.jpg" },
      { id: 'e4', name: 'Sri Shaswathi P', role: 'Operations', image: "images/team/event/sri.png" },
      { id: 'e5', name: 'Sagar Shukla', role: 'Logistics', image: "images/team/event/sagar.jpg" },
      { id: 'e6', name: 'Rishika', role: 'Planning', image: "images/team/event/rishika.jpg" },
      { id: 'e7', name: 'Ojasv Choubey', role: 'Operations', image: "images/team/event/ojasv.jpg" },
      { id: 'e8', name: 'Kshitika Atri', role: 'Logistics', image: "images/team/event/kshitika.png" },
      { id: 'e9', name: 'Kristi Kar Choudhur', role: 'Planning', image: "images/team/event/kristi.jpg" },
      { id: 'e10', name: 'Hiral Jawarkar', role: 'Operations', image: "images/team/event/hiral.jpg" },
      { id: 'e11', name: 'Ashlesha Kamal ', role: 'Logistics', image: "images/team/event/ashlesha.jpg" },
    ]
  },
  {
    name: 'PR & Outreach Team',
    lead: { id: 'p1', name: 'Sejal Mishra', role: 'PR Lead', image: "images/team/pr/sejal.jpg" },
    members: [
      { id: 'p2', name: 'Sanskriti Tyagi', role: 'Outreach', image: "images/team/pr/sanskriti.jpg" },
      { id: 'p3', name: 'Sakshi Dhananjay Bhosale', role: 'Sponsorships', image: "images/team/pr/sakshi.jpg" },
      { id: 'p4', name: 'Priyanshi Mishra', role: 'Outreach', image: "images/team/pr/priyanshi.jpg" },
      { id: 'p5', name: 'Palak Bhatla', role: 'Sponsorships', image: "images/team/pr/palak.png" },
      { id: 'p6', name: 'Om shukla', role: 'Outreach', image: "images/team/pr/om.jpg" },
      { id: 'p7', name: 'Ayusman Choudhury', role: 'Sponsorships', image: "images/team/pr/ayushman.jpg" },
    ]
  },
  {
    name: 'Social Media Team',
    lead: { id: 's1', name: 'Nimisha Tailor', role: 'Social Media Lead', image: "images/team/social/nimisha.jpg" },
    members: [
      { id: 's2', name: 'Shivi Sanjay', role: 'Content Writer', image: "images/team/social/shivi.jpg" },
      { id: 's3', name: 'Shambhavi Singh', role: 'Reels/Video', image: "images/team/social/shambhavi.jpg" },
      { id: 's4', name: 'Saanvi Shukla', role: 'Content Writer', image: "images/team/social/saanvi.jpg" },
      { id: 's5', name: 'Jatin Rathor ', role: 'Reels/Video', image: "images/team/social/jatin.jpg" },
      { id: 's6', name: 'Chandashi gupta', role: 'Content Writer', image: "images/team/social/chandashi.jpg" },
      { id: 's7', name: 'Bisanjeet mohapatra', role: 'Reels/Video', image: "images/team/social/bisanjeet.jpg" },
    ]
  },
  {
    name: 'Design Team',
    lead: { id: 'd1', name: 'Akanksha Tripathi', role: 'Design Lead', image: IMAGES.placeholder_profile_f },
    members: [
      { id: 'd2', name: 'Rishita Prajapati', role: 'UI/UX', image: "images/team/design/rishita.jpg" },
      { id: 'd3', name: 'Shreesh Upadhayay', role: 'GFX', image: "images/team/design/shreesh.png" },
      { id: 'd4', name: 'Aditi Dubey', role: 'UI/UX', image: "images/team/design/aditi.jpg" },
      { id: 'd5', name: 'Deeksha Bhojwani ', role: 'UI/UX', image: "images/team/design/deeksha.jpg" },
      { id: 'd6', name: 'Gaurav Jain', role: 'UI/UX', image: "images/team/design/gaurav.jpg" },
    ]
  },
  {
    name: 'Marketing Team',
    lead: { id: 'm1', name: 'Shreya Gupta', role: 'Marketing Lead', image: "images/team/marketing/shreya.jpg" },
    members: [
      { id: 'm2', name: 'Ansh Mittal ', role: 'Content Writing', image: "images/team/marketing/ansh.jpg" },
      { id: 'm3', name: 'Aryan kumar', role: 'Social Media', image: "images/team/marketing/aryan.jpg" },
      { id: 'm4', name: 'Aryan Vishwakarma', role: 'Content Writing', image: "images/team/marketing/aryanv.jpg" },
      { id: 'm5', name: 'Ashvin Dewangan', role: 'Social Media', image: "images/team/marketing/ashvin.jpg" },
      { id: 'm6', name: 'Lavanya', role: 'Content Writing', image: "images/team/marketing/lavanya.jpg" },
    ]
  },
];

export const EVENTS: Event[] = [
  {
    id: 'borderland',
    title: 'Borderland: Survive the Chaos',
    date: 'Feb 27, 2026',
    type: 'Competition',
    image: "/images/events/borderland.png",
    description: '40 Minutes. Infinite Pressure. One Winning Team. A high-stakes survival game where trust is currency and betrayal is a weapon.',
    location: 'AB 1 - 303',
    status: 'Upcoming',
    link: '/borderlands'
  },
  {
    id: 'cp-insights',
    title: 'CP - Getting Started & ICPC Insights',
    date: 'Dec 29, 2025',
    type: 'Speaker Session',
    image: IMAGES.event_2,
    description: 'An online Competitive Programming speaker session featuring Jaskaran Singh (ICPC World Finalist, SWE @ Google).',
    location: 'Online',
    status: 'Past',
    link: 'https://www.youtube.com/live/hQaXJ6-Vx0w'
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
