export interface EventData {
  id: number;
  title: string;
  date: string;
  venue: string;
  img: string;
}

export interface StoryData {
  id: number;
  name: string;
  batch: string;
  role: string;
  img: string;
  text: string;
}

export interface EventsSectionProps {
  events: EventData[];
}

export interface StoriesSectionProps {
  stories: StoryData[];
}

export interface NavLink {
  name: string;
  href: string;
  target?: string;
}
