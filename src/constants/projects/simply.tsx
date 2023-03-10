import { GithubSvg, LinkSvg, simply } from '@/assets';
import { ProjectType } from '../projects';

export const simplyProject: ProjectType = {
  id: '1',
  title: 'simply',
  MVP: '새 탭을 열 때마다 급식과 시간표를 보여주는 크롬 익스텐션',
  technologyStackList: ['react', 'typescript', 'webpack'],
  anchor: [
    { Icon: 'github', url: 'https://github.com/jsh05/simply' },
    {
      Icon: 'link',
      url: 'https://chrome.google.com/webstore/detail/simply/mbgbaioiffnffccjiianicpjaokimbkc?hl=ko&authuser=0',
    },
  ],
  projectImg: [],
  thumnail: simply,
  role: '프론트엔드 및 디자인',
  personnel: '개인 프로젝트',
};
