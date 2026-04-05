import { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { siteData } from "@/data/siteData";

type FavoriteItem = {
  title: string;
  image: string;
  description?: string;
  link?: string;
};

type FavoriteGroup = {
  category: string;
  introTitle: string;
  introText: string;
  items: FavoriteItem[];
};

type SelectedState = {
  item: FavoriteItem;
  category: string;
  sourceRect: DOMRect;
};

function FavoriteCard({
  title,
  image,
  subtitle,
  category,
  description,
  onClick,
  isClickable,
}: {
  title: string;
  image: string;
  subtitle?: string;
  category: string;
  description?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isClickable?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isClickable}
      className={`relative h-full w-full overflow-hidden rounded-[32px] text-left ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 text-white">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
            {category}
          </span>

          {isClickable ? (
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
              Tap to expand
            </span>
          ) : null}
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h3>

          {subtitle ? (
            <p className="mt-3 text-sm md:text-base text-white/80">{subtitle}</p>
          ) : null}

          {description ? (
            <p
              className="mt-3 text-sm md:text-base text-white/75"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}

function FavoriteExpandedOverlay({
  selected,
  onClose,
}: {
  selected: SelectedState;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    const raf = requestAnimationFrame(() => {
      setIsOpen(true);
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsOpen(false);
    window.setTimeout(() => {
      onClose();
    }, 420);
  };

  const source = selected.sourceRect;

  const targetWidth = typeof window !== "undefined"
    ? Math.min(window.innerWidth - 32, 1100)
    : 1100;

  const targetHeight = typeof window !== "undefined"
    ? Math.min(window.innerHeight - 32, window.innerWidth >= 768 ? 680 : window.innerHeight - 48)
    : 680;

  const targetLeft = typeof window !== "undefined"
    ? (window.innerWidth - targetWidth) / 2
    : 16;

  const targetTop = typeof window !== "undefined"
    ? (window.innerHeight - targetHeight) / 2
    : 16;

  const panelStyle: React.CSSProperties = {
    position: "fixed",
    left: isOpen ? targetLeft : source.left,
    top: isOpen ? targetTop : source.top,
    width: isOpen ? targetWidth : source.width,
    height: isOpen ? targetHeight : source.height,
    borderRadius: isOpen ? 32 : 32,
    transition:
      "left 420ms cubic-bezier(0.22, 1, 0.36, 1), top 420ms cubic-bezier(0.22, 1, 0.36, 1), width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease",
    transform: isOpen ? "translateZ(0) scale(1)" : "translateZ(0) scale(1)",
    opacity: isClosing ? 0.98 : 1,
    zIndex: 101,
    overflow: "hidden",
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className={`absolute inset-0 bg-black/55 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div
        ref={panelRef}
        style={panelStyle}
        className="border border-white/10 bg-zinc-950 shadow-2xl"
      >
        <div className="grid h-full md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[240px] md:min-h-full">
            <img
              src={selected.item.image}
              alt={selected.item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

            <div
              className={`absolute left-5 top-5 transition-all duration-300 ${
                isOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 -translate-y-2"
              }`}
            >
              <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs uppercase tracking-widest text-white">
                {selected.category}
              </span>
            </div>

            <div
              className={`absolute right-5 top-5 flex items-center gap-3 transition-all duration-300 ${
                isOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 -translate-y-2"
              }`}
            >
              {selected.item.link ? (
                <a
                  href={selected.item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Open
                </a>
              ) : null}

              <button
                type="button"
                onClick={handleClose}
                className="inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            <div
              className={`transition-all duration-300 ${
                isOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-3"
              }`}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-white/60">
                {selected.category}
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
                {selected.item.title}
              </h3>

              {selected.item.description ? (
                <p className="mt-6 text-base leading-8 text-white/75">
                  {selected.item.description}
                </p>
              ) : (
                <p className="mt-6 text-base leading-8 text-white/60">
                  No extra write-up for this one. Some things are just vibes.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FavoritesSection() {
  const favorites = siteData.favorites as FavoriteGroup[];
  const [selected, setSelected] = useState<SelectedState | null>(null);
  const modalEnabledCategories = useMemo(() => new Set(["Anime", "Games"]), []);

  return (
    <>
      <section id="favorites" className="py-20 md:py-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Favorites"
          title="Stuff I keep coming back to"
          description="Anime, music, and games, but now with actual motion instead of sad little boxes."
        />

        <div className="space-y-20">
          {favorites.map((group) => (
            <div key={group.category}>
              <div className="mb-8">
                <p className="text-sm font-medium text-white/70">{group.category}</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                  {group.introTitle}
                </h3>
                <p className="mt-3 max-w-2xl text-white/70">{group.introText}</p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
                <div className="h-[70vh] min-h-[540px]">
                  <ScrollStack
                    itemDistance={80}
                    itemScale={0.02}
                    itemStackDistance={24}
                    baseScale={0.92}
                    rotationAmount={0}
                    blurAmount={0}
                    useWindowScroll={false}
                  >
                    <ScrollStackItem itemClassName="bg-transparent shadow-none">
                      <FavoriteCard
                        title={group.introTitle}
                        image={group.items[0]?.image ?? ""}
                        subtitle={group.introText}
                        category={group.category}
                      />
                    </ScrollStackItem>

                    {group.items.map((item) => {
                      const canExpand = modalEnabledCategories.has(group.category);

                      return (
                        <ScrollStackItem
                          key={`${group.category}-${item.title}`}
                          itemClassName="bg-transparent shadow-none"
                        >
                          <FavoriteCard
                            title={item.title}
                            image={item.image}
                            category={group.category}
                            description={canExpand ? item.description : undefined}
                            isClickable={canExpand}
                            onClick={
                              canExpand
                                ? (event) => {
                                    const rect = event.currentTarget.getBoundingClientRect();
                                    setSelected({
                                      item,
                                      category: group.category,
                                      sourceRect: rect,
                                    });
                                  }
                                : undefined
                            }
                          />
                        </ScrollStackItem>
                      );
                    })}
                  </ScrollStack>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected ? (
        <FavoriteExpandedOverlay
          selected={selected}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </>
  );
                }      
