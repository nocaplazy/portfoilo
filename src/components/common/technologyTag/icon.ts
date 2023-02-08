import { TagType } from '.';
import { React, TypeScript, Webpack } from '@/assets';

export const iconSwitch = (tag: TagType) => {
  switch (tag) {
    case 'react':
      return { stroke: '#00D8FF', Icon: React };
    case 'typescript':
      return { stroke: '#3178C6', Icon: TypeScript };
    case 'webpack':
      return { stroke: '#8ED6FB', Icon: Webpack };
  }
};
