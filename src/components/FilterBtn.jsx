export function FilterBtn({ color = " bg-secondary-gray", text, children }) {
  return (
    <div
      className={`${color} flex items-center gap-2 py-3 px-4 w-[126px] justify-center rounded-xl `}
    >
      {children}

      <p className="font-medium ">{text}</p>
    </div>
  );
}
