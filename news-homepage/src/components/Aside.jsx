import AsideSection from "./AsideSection";

export default function Aside() {
  return (
    <aside className="row-span-3 bg-[hsl(240,100%,5%)] xl:p-12 p-8 order-2 xl:order-none">
      <h2 className="text-[hsl(35,77%,62%)] text-5xl font-bold">New</h2>
      <figure className="flex flex-col h-full justify-evenly">
        <AsideSection
          title={"Hydrogen VS Electric Cars"}
          paragraph={"Will hydrogen-fueled cars ever catch up to EVs?"}
          border={"border-b"}
        />

        <AsideSection
          title={"The Downsides of AI Artistry"}
          paragraph={
            "What are the possible adverse effects of on-demand AI image generation?"
          }
          border={"border-b"}
        />

        <AsideSection
          title={"Is VC Funding Drying Up?"}
          paragraph={
            "Private funding by VC firms is down 50% YOY. We take a look at what that means."
          }
        />
      </figure>
    </aside>
  );
}
