import Link from "next/link";

export default function Button({ label, onClick, className, icon, type, src }) {
  const ButtonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`group flex transform-gpu cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-light tracking-wider text-nowrap text-white shadow-[0_1px_1px_2.1px_rgba(0,0,0,0.1),_0_0_0.5px_1px_rgba(0,0,0,0.01),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_1px_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-500 select-none hover:scale-105 active:scale-75 dark:text-black dark:shadow-[0_1px_1px_2.1px_rgba(0,0,0,0.1),_0_0_0.5px_1px_rgba(0,0,0,0.01),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_1px_1px_1px_rgba(255,255,255,0.1)] ${className} `}
    >
      {icon}
      {label}
    </button>
  );

  return src ? <Link href={src}>{ButtonContent}</Link> : ButtonContent;
}
