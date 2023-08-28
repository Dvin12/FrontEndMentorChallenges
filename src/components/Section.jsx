import Break from "./Break";

export default function Section() {
  return (
    <section className="w-full h-full ">
      <article className="flex flex-col items-center justify-center my-28 relative px-6 ">
        <h2 className="text-2xl font-ubuntu tracking-wide">
          Designed for the future
        </h2>
        <img
          src="./assets/images/illustration-editor-mobile.svg"
          alt="illustration"
          className="py-14"
        />
        <h3 className="text-3xl  text-center font-ubuntu ">
          Introducing an extensible editor
        </h3>
        <p className="text-center pt-3   text-lg ">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>

        <h3 className="text-3xl  text-center font-ubuntu py-8 ">
          Robust content management
        </h3>
        <p className="text-center   text-lg ">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format or flow. With this functionality, you're
          in full control.
        </p>
        <img
          src="./assets/images/illustration-phones.svg"
          alt="phones"
          className="absolute z-40 -bottom-[30rem] drop-shadow-xl"
        />
      </article>

      <Break />

      <article className="w-full h-full my-20 flex flex-col items-center justify-center px-6">
        <img src="./assets/images/illustration-laptop-mobile.svg" alt="" />

        <h3 className="text-center text-2xl font-ubuntu tracking-wider mt-24 ">
          Free, open, simple
        </h3>

        <p className="text-center py-10  text-lg">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting. RSS feeds, social media intergration, third-party
          commenting tools and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>

        <h3 className="text-2xl font-ubuntu">Powerful tooling</h3>
        <p className="text-center py-6  text-lg">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most coplicated sites.
        </p>
      </article>
    </section>
  );
}
