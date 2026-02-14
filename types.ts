export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface TeamSection {
  name: string;
  lead: TeamMember;
  members: TeamMember[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'Workshop' | 'Hackathon' | 'Webinar' | 'Meetup' | 'Speaker Session' | 'Tech Carnival' | 'Competition';
  image: string;
  description: string;
  location: string;
  status: 'Upcoming' | 'Past';
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
  stars?: number;
  forks?: number;
}

export enum TabType {
  UPCOMING = 'Upcoming',
  PAST = 'Past',
  HACKATHONS = 'Hackathons'
}