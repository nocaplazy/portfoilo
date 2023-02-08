// 다크모드, 반응형, 이미지(LightHouse) 최적화, 헤더 스크롤 이동 및 현재 위치 표시
// 프로젝트 자세히 보기
// 블로그 링크 이동
// 프로젝트 호버 효과
// 버튼 액티브 효괴
// 다국어 지원
// 텍스트 최초방문시 위에서 아래로

import { Route, Routes } from 'react-router-dom';
import { AdditionalProjects } from './pages/AdditionalProjects';
import { HomePage } from './pages/home';
import { ProjectDetail } from './pages/ProjectDetail';
import { StyleProvider } from './styles';

export const App = () => (
  <StyleProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/more" element={<AdditionalProjects />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  </StyleProvider>
);
