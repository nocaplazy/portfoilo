import { LinkSvg } from '@/assets';
import { ProjectType } from '.';
import { lazy05 } from '@/assets/imgs';

export const lazy05CreateReactApp: ProjectType = {
  id: '10',
  title: '@lazy05/create-react-app',
  MVP: 'npx @lazy05/create-react-app name으로 편하게 세팅해보세요 !!',
  technologyStackList: ['react', 'typescript', 'webpack'],
  anchor: [
    {
      alt: 'jsh05',
      url: 'https://github.com/jsh05',
      Icon: <LinkSvg />,
    },
    {
      alt: 'team-aliens-dev.dsm-dms.com',
      url: 'http://team-aliens-dev.dsm-dms.com/login',
      Icon: <LinkSvg />,
    },
  ],
  features: [],
  thumnail: lazy05,
  role: '',
  personnel: '',
};
