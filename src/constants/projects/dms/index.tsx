import { GithubSvg, LinkSvg, projectImg } from '@/assets';
import { ProjectType } from '../';
import login from './login.png';
import register from './register.png';
import idFind from './id-find.gif';
import password from './password.png';
import { ImageSlider } from '@/components/ImageSlider';

export const dms: ProjectType = {
  id: '3',
  title: 'DMS',
  MVP: '매번 수기로 작성하는 것, 불편하시죠? DMS에서 편리하게 기숙사를 관리해보세요!\n DMS는 전국의 모든 학교 통합 기숙사 관리 서비스입니다.',
  technologyStackList: ['react', 'typescript', 'webpack'],
  anchor: [
    { Icon: 'github', url: 'https://github.com/jsh05' },
    {
      Icon: 'link',
      url: 'http://team-aliens-dev.dsm-dms.com/login',
    },
  ],
  features: [
    {
      summary: 'auth',
      detail: (
        <div>
          <ImageSlider images={[login, register, idFind, password]} />
        </div>
      ),
    },
    { summary: '학생 관리', detail: '' },
    { summary: '자습실 생성', detail: '' },
    { summary: '공지사항', detail: '' },
    { summary: '마이페이지', detail: '' },
  ],
  thumnail: projectImg,
  role: '',
  personnel: '',
};
