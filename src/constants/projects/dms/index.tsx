import { GithubSvg, LinkSvg, projectImg } from '@/assets';
import { ProjectType } from '../';
import a from './1.png';
import d from './d.png';
import e from './e.png';
import f from './f.png';
import g from './g.png';
import i from './i.png';
import { ImageSlider } from '@/components/ImageSlider';

export const dms: ProjectType = {
  id: '3',
  title: 'DMS',
  MVP: '매번 수기로 작성하는 것, 불편하시죠? DMS에서 편리하게 기숙사를 관리해보세요!\n DMS는 전국의 모든 학교 통합 기숙사 관리 서비스입니다.',
  technologyStackList: ['react', 'typescript', 'webpack', 'storyBook'],
  anchor: [
    { Icon: 'github', url: 'https://github.com/team-aliens/dms-front-admin' },
    {
      Icon: 'link',
      url: 'https://admin.aliens-dms.com/',
    },
  ],
  projectImg: [a, d, e, f, g, i],
  thumnail: projectImg,
  role: '',
  personnel: '팀 프로젝트',
};
