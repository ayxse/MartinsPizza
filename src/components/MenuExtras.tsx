import { MENU_CATEGORIES, type MenuCategory, type MenuItem } from "../data/menu";

export default function MenuExtras() {
  return (
    <div className="mt-16">
      <header className="text-center mb-10">
        <span className="font-script text-green-dark text-2xl block mb-1.5">
          ~ Y mucho más ~
        </span>
        <h3 className="font-display italic text-[clamp(28px,4vw,40px)] text-red-dark">
          Acompañantes y Postres
        </h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {MENU_CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: MenuCategory }) {
  return (
    <div className="bg-paper/70 border border-ink-2/15 px-6 py-7 md:px-8 md:py-8 rounded-sm">
      <header className="mb-5 pb-3 border-b-2 border-ink/15 text-center">
        <h4 className="font-display italic font-medium text-[clamp(24px,3vw,30px)] text-red-dark">
          {category.title}
        </h4>
      </header>

      <ul className="space-y-2.5">
        {category.items.map((item) => (
          <ItemRow key={item.name} item={item} />
        ))}
      </ul>

      {category.priceNote && (
        <p className="mt-6 text-center font-script text-lg text-green-dark">
          ~ {category.priceNote} ~
        </p>
      )}
    </div>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="font-display italic text-[18px] text-ink">
        {item.name}
        {item.note && (
          <span className="font-body not-italic text-[13px] text-ink-2 ml-1.5">
            ({item.note})
          </span>
        )}
      </span>
      <span
        className="flex-1 border-b border-dotted border-ink-2/30 self-center mx-1"
        aria-hidden
      />
      {item.price && (
        <span className="font-display font-semibold text-[17px] text-red-dark tabular-nums">
          {item.price}
        </span>
      )}
    </li>
  );
}
