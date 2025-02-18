import { useEffect, useRef } from "react";

type DropdownProps = {
  onClose: () => void;
}

/**
 * @name Dropdown
 * @version 1.0.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 */
export default function Dropdown({ onClose }: DropdownProps) {
  const targetRef = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // clean-up effect
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section ref={targetRef} className="_dropdown-container animate-dropdown">
        <div className="_dropdown-container-wrap">
          dropdown
        </div>
      </section>
    </>
  );
}