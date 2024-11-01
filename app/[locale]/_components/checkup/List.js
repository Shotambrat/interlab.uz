import { client } from "@/sanity/lib/client";
import ListItem from "./ListItem";

export default async function List({locale}) {
  const checkups = await client.fetch(`*[_type == "checkup"]`, { cache: 'no-store' });

  return (
    <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8 pt-8">
      <div className="flex flex-col">
        <h1 className="text-5xl max-mdx:text-4xl font-bold">Чек-апы</h1>
        <p className="w-full max-w-[500px] text-[#5B5B5B]">
          Сдавайте несколько анализова сразу и проверяйте здоровье целиком, при
          этом экономя больше, чем при отдельной сдаче
        </p>
      </div>
      <div className="w-full grid slg:grid-cols-12 mdx:grid-cols-2 grid-cols-1 gap-3">
        {
          checkups.map( (item, index) => (
            <ListItem 
            locale={item.locale}
            key={index}
            index={index}
            title={item.title[locale]}
            description={item.description[locale]}
            slug={item.slug.current}
            icon={item.icon}
            color={item.color}
            secondaryColor={item.secondaryColor}
            />
          ))
        }
      </div>
    </div>
  );
}
