import { TagType } from '@/components/common/technologyTag';
import { entry, projectImg, repo, simply } from '@/assets';
import { Text } from '@/components/common/Text';
import { ReactNode } from 'react';

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  member?: string;
  tagList: TagType[];
  thumnail: string;
  boxDes?: string;

  githubAlt?: string;
  githubUrl?: string;
  serviceAlt?: string;
  serviceUrl?: string;

  serviceDescription?: ReactNode;
  situation?: ReactNode;
  role?: string[];
  problem?: string;
  feeling?: ReactNode;
}

export const projects: ProjectType[] = [
  {
    id: '0',
    title: 'scouit',
    description:
      '기숙사 관리 시스템 어드민 페이지를 개발 했습니다. 기획부터 총 14명이 참가한 규모있는 프로젝트를 한 좋은 경험이였습니다.',
    tagList: ['react', 'typescript', 'webpack'],
    thumnail: projectImg,
  },
  {
    id: '1',
    title: 'simply',
    description:
      '기숙사 관리 시스템 어드민 페이지를 개발 했습니다. 기획부터 총 14명이 참가한 규모있는 프로젝트를 한 좋은 경험이였습니다.',
    tagList: ['react', 'typescript', 'webpack'],
    thumnail: simply,
  },
];

export const addtionalProjects: ProjectType[] = [
  {
    id: '3',
    title: 'DMS-admin',
    member:
      '프론트엔드 3명 / 백엔드 3명 / 디자이너 4명 / 안드로이드 3명 / iOS 3명',
    description:
      '기숙사 관리 시스템 어드민 페이지를 개발 했습니다. 기획부터 총 14명이 참가한 규모있는 프로젝트를 한 좋은 경험이였습니다.',
    tagList: ['react', 'typescript', 'webpack'],
    thumnail: projectImg,
    boxDes:
      '매번 수기로 작성하는 것, 불편하시죠? DMS에서 편리하게 기숙사를 관리해보세요!\n DMS는 전국의 모든 학교 통합 기숙사 관리 서비스입니다.',
    serviceUrl: 'http://team-aliens-dev.dsm-dms.com/login',
    serviceAlt: 'team-aliens-dev.dsm-dms.com',
    githubAlt: 'acoxx',
    githubUrl: 'https://github.com/akoxx',
  },
  {
    id: '4',
    title: 'REPO',
    member: '프론트엔드 4명 / 백엔드 4명 / 디자이너 1명',
    description:
      '기숙사 관리 시스템 어드민 페이지를 개발 했습니다. 기획부터 총 14명이 참가한 규모있는 프로젝트를 한 좋은 경험이였습니다.',
    tagList: ['react', 'typescript', 'webpack'],
    thumnail: repo,
    boxDes:
      '한글 파일로 작성하던 레주메는 이제 그만! \n직접 커스텀하며 자신의 취향대로 레주메를 꾸미고 편하게 작성해보세요.\n대덕소프트웨어마이스터고등학교 학생들의 레주메 관리 서비스 입니다.',
  },
  {
    id: '5',
    title: 'Entry 입학전형 시스템',
    member: '프론트엔드 4명 / 백엔드 4명 / 디자이너 1명',
    description:
      '기숙사 관리 시스템 어드민 페이지를 개발 했습니다. 기획부터 총 14명이 참가한 규모있는 프로젝트를 한 좋은 경험이였습니다.',
    tagList: ['react', 'typescript', 'webpack'],
    thumnail: entry,
    boxDes:
      '우리 학교로 오세요!\n 대덕소프트웨어마이스터고등학교의 입학 전형 시스템입니다.',
    situation: (
      <>
        <Text size="20px">
          제가 처음부터 참여한 프로젝트가 아닌 2016년 즉, 5년전부터 매 년마다
          리팩토링 해온 코드였습니다. 하지만 이번년도부터는 리팩토링 하지않고
          버그픽스/유지보수만 하기로 결정되었습니다. 그래서 기존 코드를
          오픈해봤습니다. 이런~! 코드는 작성한 뒤부터 레거시가
          된다더니...정말이였습니다. presentational and container로 작성된 redux
          + redux saga 조합이였는데
        </Text>
      </>
    ),
    feeling: (
      <>
        <Text size="20px">
          이번 프로젝트에서는 진행한 프로젝트 중 거의 유일하게 기여도가 제일
          낮았는데도 불구하고 제일 고통스러운 시간이였다.
        </Text>
        <Text size="20px" weight="semiBold">
          ➡️  지속적인 코드 리팩토링은 몰론 유통기한이 긴 제품을 만들자. 항상
          개발의 중간지점에 있다고 생각하자. 난 마지막이 아니다.
        </Text>
      </>
    ),
    serviceDescription: (
      <Text size="20px">
        신입생들이 대덕소프트웨어마이스터고등학교에 입학할 때 더욱 빠르고
        편리하게 지원할 수 있도록 하기 위해서 제작하였습니다.
      </Text>
    ),
    role: ['어드민 기존 코드 유지보수', '기획 검수 및 QA'],
  },
];
