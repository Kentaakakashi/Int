import SectionHeading from "@/components/SectionHeading";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { siteData } from "@/data/siteData";

function FavoriteCard({
  title,
  image,
  subtitle,
  category,
}: {
  title: string;
  image: string;
  subtitle?: string;
  category: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[32px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 text-white">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
            {category}
          </span>
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h3>
          {subtitle ? (
            <p className="mt-3 max-w-xl text-sm md:text-base text-white/80">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function FavoritesSection() {
  return (
    <section id="favorites" className="py-20 md:py-24 scroll-mt-24">
      <SectionHeading
        eyebrow="Favorites"
        title="Stuff I keep coming back to"
        description="Anime, music, and games, but now with actual motion instead of sad little boxes."
      />

      <div className="space-y-20">
        {siteData.favorites.map((group) => (
          <div key={group.category}>
            <div className="mb-8">
              <p className="text-sm font-medium text-white/70">{group.category}</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                {group.introTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-white/70">
                {group.introText}
              </p>
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

                  {group.items.map((item) => (
                    <ScrollStackItem
                      key={`${group.category}-${item.title}`}
                      itemClassName="bg-transparent shadow-none"
                    >
                      <FavoriteCard
                        title={item.title}
                        image={item.image}
                        category={group.category}
                      />
                    </ScrollStackItem>
                  ))}
                </ScrollStack>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
