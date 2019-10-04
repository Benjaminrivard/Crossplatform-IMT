import { Track } from "./Track.model";

export interface Session {
  id: number;
  title: string;
  titleMobile: string;
  image: string;
  description: string;
  type: string;
  track: Track;
  category: string;
  language: string;
  tags: string[];
  complexity: string;
  speakers: number[];
}
