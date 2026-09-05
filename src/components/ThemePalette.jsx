import { THEMES, useTheme } from "@/theme";

export default function ThemePalette({ onSelect }) {
  const { theme, setTheme } = useTheme();

  const handleSelect = (name) => {
    setTheme(name);
    onSelect?.(name);
  };

  return (
    <div
      role="group"
      aria-label="Theme"
      className="absolute right-0 top-full z-50 mt-2 grid min-w-60 grid-cols-2 gap-1 rounded-xl border border-border bg-surface p-2 shadow-lg"
    >
      {THEMES.map((item) => (
        <button
          key={item.name}
          type="button"
          aria-pressed={theme === item.name}
          onClick={() => handleSelect(item.name)}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 text-left text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-pressed:border-primary aria-pressed:bg-surface-hover"
        >
          <span
            aria-hidden="true"
            style={{ backgroundColor: item.color }}
            className="size-5 shrink-0 rounded-full border border-border shadow-sm"
          />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
