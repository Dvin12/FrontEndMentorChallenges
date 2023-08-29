import Break from "./Break";

export default function Section() {
  return (
    <section className="w-full h-full ">
      <article className="relative flex flex-col items-center justify-center px-6 my-28 xl:px-0 xl:my-40 ">
        <h2 className="text-2xl font-medium font-ubuntu xl:text-4xl xl:tracking-normal text-blueHeadings ">
          Designed for the future
        </h2>
        <div className="items-center justify-center xl:flex">
          <section className="relative flex justify-end order-last w-full overflow-hidden xl:w-screen ">
            <img
              src="./assets/images/illustration-editor-mobile.svg"
              alt="illustration"
              className="block md:w-full py-14 xl:hidden "
            />

            <img
              src="./assets/images/illustration-editor-desktop.svg"
              alt="illustration"
              className="hidden py-14 xl:block "
            />
          </section>
          <section className="items-center justify-center w-full xl:flex xl:flex-col ">
            <div className="flex flex-col  justify-center xl:w-[51%]">
              <h3 className="text-3xl font-medium text-center font-ubuntu xl:text-left text-blueHeadings">
                Introducing an extensible editor
              </h3>
              <p className="py-8 text-lg text-center xl:text-left text-bodyDesaturatedBlue">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>

              <h3 className="py-8 text-3xl font-medium text-center font-ubuntu xl:text-left text-blueHeadings ">
                Robust content management
              </h3>
              <p className="text-lg text-center xl:text-left text-bodyDesaturatedBlue ">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format or flow. With this functionality,
                you're in full control.
              </p>
            </div>
          </section>
        </div>
        <img
          src="./assets/images/illustration-phones.svg"
          alt="phones"
          className="absolute z-40 -bottom-[30rem] md:-bottom-[36rem] xl:-bottom-[40rem] xl:left-64 drop-shadow-xl"
        />
      </article>

      <Break />

      <article className="flex flex-col items-center justify-center w-full h-full px-6 my-20 xl:px-0 xl:my-40">
        <div className="items-center justify-center xl:flex">
          <section className="relative flex w-full overflow-hidden justify-items-start xl:w-screen ">
            <img
              src="./assets/images/illustration-laptop-mobile.svg"
              alt=""
              className="block xl:hidden md:w-full "
            />

            <img
              src="./assets/images/illustration-laptop-desktop.svg"
              alt="illustration"
              className="hidden xl:block "
            />
          </section>
          <section className="items-center justify-center w-full xl:flex xl:flex-col ">
            <div className="flex flex-col  justify-center xl:w-[52%]">
              <h3 className="mt-24 text-2xl font-medium tracking-wider text-center font-ubuntu xl:text-left text-blueHeadings ">
                Free, open, simple
              </h3>

              <p className="py-10 text-lg text-center xl:text-left text-blueHeadings">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting. RSS feeds, social media intergration,
                third-party commenting tools and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>

              <h3 className="text-2xl font-medium text-center font-ubuntu xl:text-left text-blueHeadings">
                Powerful tooling
              </h3>
              <p className="py-6 text-lg text-center xl:text-left text-blueHeadings">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most coplicated sites.
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
