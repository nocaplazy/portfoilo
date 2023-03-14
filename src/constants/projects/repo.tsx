import { LinkSvg, repoImg } from '@/assets';
import { ProjectType } from '.';

export const repo: ProjectType = {
  id: '4',
  title: 'REPO',
  MVP: '한글 파일로 작성하던 레주메는 이제 그만! 직접 커스텀하며 자신의 취향대로 레주메를 꾸미고 편하게 작성해보세요. 대덕소프트웨어마이스터고등학교 학생들의 레주메 관리 서비스 입니다.',
  technologyStackList: ['next', 'typescript'],
  anchor: [
    {
      Icon: 'link',
      url: 'https://www.dsm-repo.com/',
    },
  ],
  features: [],
  thumnail: repoImg,
  role: '',
  personnel: '',
};
