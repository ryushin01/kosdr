type DrawerHeaderProps = {
  title: string;
  onClose: () => void;
}

/**
 * @name DrawerHeader
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @property {string} title         - 드로어 컴포넌트 타이틀
 * @property {function} onClose     - 드로어 닫기 기능
 */
export default function DrawerHeader({ title, onClose }: DrawerHeaderProps) {
  return (
    <div className="_drawer-header">
      <h1 className="_hidden">{title}</h1>
      <button type="button" onClick={onClose}>닫기</button>
    </div>
  );
};
