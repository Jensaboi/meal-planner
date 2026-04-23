"use client";

export default function HamburgerMenu({ isOpen = false }: { isOpen: boolean }) {
  return (
    <div className="size-6 flex flex-col gap-1">
      <span
        data-isopen={isOpen}
        className="transistion-all duration-300 ease-in-out h-1 w-full bg-zinc-900 block rounded-md data-[isopen=true]:translate-y-2 data-[isopen=true]:-rotate-45"
      ></span>
      <span
        data-isopen={isOpen}
        className="h-1 w-full bg-zinc-900 block rounded-md data-[isopen=true]:opacity-0"
      ></span>
      <span
        data-isopen={isOpen}
        className="transistion-all duration-300 ease-in-out h-1 w-full bg-zinc-900 block rounded-md data-[isopen=true]:-translate-y-2 data-[isopen=true]:rotate-45"
      ></span>
    </div>
  );
}
