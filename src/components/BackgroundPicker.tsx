import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/siteData";
import { Film, Image as ImageIcon, X } from "lucide-react";

type BackgroundPreset = {
  id: string;
  title: string;
  type: "regular" | "video";
  videoSrc?: string;
  thumbnail?: string;
  description?: string;
};

type BackgroundPickerProps = {
  activePresetId: string;
  onSelect: (presetId: string) => void;
};

export default function BackgroundPicker({
  activePresetId,
  onSelect,
}: BackgroundPickerProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const presets = (siteData.backgroundPresets ?? []) as BackgroundPreset[];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={panelRef} className="fixed bottom-6 left-6 z-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/65"
      >
        <Film className="h-4 w-4" />
        Background
      </button>

      {open ? (
        <div className="mt-3 w-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Choose Background</p>
              <p className="text-xs text-white/55">Switch the whole vibe of the site</p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[420px] overflow-y-auto p-3 space-y-3">
            {presets.map((preset) => {
              const selected = preset.id === activePresetId;

              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    onSelect(preset.id);
                    setOpen(false);
                  }}
                  className={`group w-full overflow-hidden rounded-[20px] border text-left transition ${
                    selected
                      ? "border-white/25 bg-white/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="relative h-28 w-full overflow-hidden">
                    {preset.thumbnail ? (
                      <img
                        src={preset.thumbnail}
                        alt={preset.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-zinc-900" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                        {preset.type === "video" ? (
                          <>
                            <Film className="h-3 w-3" />
                            Video
                          </>
                        ) : (
                          <>
                            <ImageIcon className="h-3 w-3" />
                            Default
                          </>
                        )}
                      </span>
                    </div>

                    {selected ? (
                      <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
                        Active
                      </div>
                    ) : null}

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base font-semibold text-white">{preset.title}</h3>
                      {preset.description ? (
                        <p className="mt-1 text-xs text-white/70">{preset.description}</p>
                      ) : null}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
