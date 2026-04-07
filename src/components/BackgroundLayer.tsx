import { useEffect, useMemo, useRef, useState } from "react";
import { siteData } from "@/data/siteData";

type BackgroundPreset = {
  id: string;
  title: string;
  type: "regular" | "video";
  videoSrc?: string;
  thumbnail?: string;
  description?: string;
};

type BackgroundLayerProps = {
  activePresetId: string;
};

export default function BackgroundLayer({
  activePresetId,
}: BackgroundLayerProps) {
  const rawPresets = siteData.backgroundPresets;
  const presets: BackgroundPreset[] = Array.isArray(rawPresets) ? rawPresets : [];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  const activePreset = useMemo(() => {
    if (!presets.length) return null;
    return (
      presets.find((preset) => preset.id === activePresetId) ??
      presets.find((preset) => preset.id === "default") ??
      presets[0]
    );
  }, [activePresetId, presets]);

  useEffect(() => {
    setVideoError(false);
  }, [activePresetId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || activePreset?.type !== "video") return;

    const tryPlay = async () => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        // autoplay with sound may be blocked until user interaction
      }
    };

    tryPlay();
  }, [activePreset]);

  if (
    !activePreset ||
    activePreset.type === "regular" ||
    !activePreset.videoSrc ||
    videoError
  ) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        key={activePreset.id}
        className="absolute inset-0 h-full w-full object-cover"
        src={activePreset.videoSrc}
        autoPlay
        loop
        playsInline
        controls={false}
        onError={() => setVideoError(true)}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.65))]" />
    </div>
  );
}
