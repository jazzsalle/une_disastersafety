/**
 * DetailPanel — 모듈④ 상세조회(위험지구 + 하천) 스택 구성.
 * 두 섹션 모두 adminCode 변경에 반응해 재조회한다(각 섹션 useEffect).
 */
import DistrictsSection from './DistrictsSection.jsx';
import RiversSection from './RiversSection.jsx';

export default function DetailPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DistrictsSection />
      <RiversSection />
    </div>
  );
}
