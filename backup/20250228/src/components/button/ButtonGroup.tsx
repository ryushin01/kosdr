import "@styles/button-group.css";

type ButtonGroupProps = {
  data: ButtonGroupDataProps[];
  size: string;
  // isSelected: boolean;
  handleButton: (index: number) => void;
};

type ButtonGroupDataProps = {
  id: number;
  content: string;
  disabled: boolean;
}

/**
 * @name ButtonGroup
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @description 부모 컴포넌트가 클라이언트 컴포넌트이어야 합니다.
 *              aria-selected 속성은 단일 또는 다중 선택 상태를 나타냅니다.
 *              aria-selected 속성 사용 시 button에 role 속성을 추가해야 오류가 발생하지 않습니다.
 * @property {string} size
 * @property {string} content
 * @property {boolean} disabled
 * @property {function} handleButton
 */

export default function ButtonGroup({
                                      size,
                                      data,
                                      // isSelected,
                                      handleButton,
                                    }: ButtonGroupProps) {
  return (
    <div className={`_button-group ${size}`}>
      {data.map((button, index) => {
        const { id, content, disabled } = button;

        return (
          <button
            key={id}
            type="button"
            onClick={() => handleButton(index)}
            role="tab"
            // aria-selected={isSelected}
            aria-label={content}
            disabled={disabled}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
