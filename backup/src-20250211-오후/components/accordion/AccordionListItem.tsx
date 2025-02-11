type AccordionListItemProps = {};

/**
 * @name AccordionListItem
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @property {Date} startDate               - 선택된 날짜(시작일)
 */
export default function AccordionListItem({}: AccordionListItemProps) {
  return (
    <div className="_accordion-list-item">
      <button type="button" className="_accordion-trigger">
        <span>번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>등록일</span>
        <span>토글 아이콘</span>
      </button>

      <div className="_accordion-content">내용</div>
    </div>
  );
}
