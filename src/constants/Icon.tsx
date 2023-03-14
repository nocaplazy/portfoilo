import { React, TypeScript, Webpack } from '@/assets/svgs';
import { Next } from '@/assets/svgs/tags/Next';
import { Redux } from '@/assets/svgs/tags/Redux';

export const Tag = {
  react: <React />,
  typescript: <TypeScript />,
  webpack: <Webpack />,
  next: <Next />,
  redux: <Redux />,
};

export type TagType = keyof typeof Tag;
