/**
 * CitationModal — Citation 클릭 시 인용 전문+출처 표시(DS Modal 사용).
 * 배경 클릭·ESC·닫기 버튼으로 닫음. citation이 null이면 렌더하지 않음.
 */
import { useEffect } from 'react';
import Modal from '../../ds/components/overlay/Modal.jsx';
import Button from '../../ds/components/actions/Button.jsx';
import { citeLoc } from './askUtils.js';

export default function CitationModal({ citation, onClose }) {
  useEffect(() => {
    if (!citation) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [citation, onClose]);

  if (!citation) return null;

  const body =
    `${citation.quote || '(인용문 없음)'}\n\n` +
    `출처: ${citeLoc(citation)}\n` +
    `passage_id: ${citation.passage_id || '-'}`;

  return (
    <div className="ask-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="ask-modal-box"
        role="dialog"
        aria-modal="true"
        aria-label="근거 인용 전문"
        onClick={(e) => e.stopPropagation()}
      >
        <Modal
          icon={false}
          iconButton={false}
          footer={false}
          title={citation.doc_title || '근거 인용 전문'}
          text1={body}
          style={{ width: 'min(640px, 92vw)', maxHeight: '78vh', overflowY: 'auto' }}
        />
        <button type="button" className="ask-pressable" onClick={onClose}>
          <Button
            label="닫기"
            variant="outline"
            color="grayscale"
            size="md"
            leftIcon={false}
            rightIcon={false}
          />
        </button>
      </div>
    </div>
  );
}
