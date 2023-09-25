import Article from "./Article";
import ArticleBanner from "./ArticleBanner";
import Aside from "./Aside";
import SmallArticle from "./SmallArticle";

export default function Articles({ isMobile }) {
  return (
    <>
      <ArticleBanner
        image={
          isMobile === true
            ? "image-web-3-mobile.jpg"
            : "image-web-3-desktop.jpg"
        }
      />
      <Aside />
      <Article
        title={"The Bright Future of Web 3.0?"}
        paragraph={`We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fufilling its promise?`}
      />
      <SmallArticle
        number={1}
        image={"image-retro-pcs.jpg"}
        title={"Reviving Retro PCs"}
        paragraph={"What happens when old PCs are given modern upgrades?"}
      />

      <SmallArticle
        number={2}
        image={"image-top-laptops.jpg"}
        title={"Top 10 Laptops of 2022"}
        paragraph={"Our best picks of various needs and budgets."}
      />

      <SmallArticle
        number={3}
        image={"image-gaming-growth.jpg"}
        title={"The  Growth of Gaming"}
        paragraph={"How the pandemic has sparked fresh opportunities."}
      />
    </>
  );
}
