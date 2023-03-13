import { ProjectType } from '../projects';
import { entryImg } from '@/assets/imgs';
import { LinkSvg } from '@/assets';

export const entry: ProjectType = {
  id: '5',
  title: 'DSM 입학전형 시스템',
  MVP: '우리 학교로 오세요! 대덕소프트웨어마이스터고등학교의 입학 전형 시스템입니다.',
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
  thumnail: entryImg,
  role: '',
  personnel: '',
};
