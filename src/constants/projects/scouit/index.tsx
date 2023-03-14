import { LinkSvg } from '@/assets';
import { ProjectType } from '..';
import Scouit from './scouit.jpeg';

export const scouit: ProjectType = {
  id: '20',
  title: 'scouit',
  MVP: '당신이 지원자라면? 프로필을 등록해서 회사에게 스카웃받고 원하는 회사에 대한 정보를 쉽게 확인하세요. 당신이 CEO라면? 원하는 인재를 스카웃하고 면접 프로세스 관리를 편리하게 해보세요.',
  technologyStackList: ['react', 'typescript', 'webpack'],
  anchor: [
    { Icon: 'github', url: 'https://github.com/jsh05' },
    {
      url: 'http://team-aliens-dev.dsm-dms.com/login',
      Icon: 'github',
    },
  ],
  features: [],
  thumnail: Scouit,
  role: '',
  personnel: '',
};
