export default function Card({ read }) {
  return (
    <>
      <li
        className={`${
          read === true ? "bg-white" : "bg-[hsl(210,60%,98%)]"
        } p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)] md:h-fit w-full h-full`}
      >
        <img
          src="./assets/images/avatar-mark-webber.webp"
          alt="person"
          className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
        />
        <section className="flex flex-col justify-center w-full">
          <article className="flex flex-row w-full">
            <p className="w-full">
              <span className="mr-1 font-bold text-[hsl(224,21%,14%)] cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Mark Webber
              </span>
              reacted to your recent post
              <span className="ml-1 font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                My first tournament today!
              </span>
              {read === true ? (
                ""
              ) : (
                <div className="w-[9px] h-[9px] rounded-full bg-[hsl(1,90%,64%)] inline-block mx-1"></div>
              )}
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">1m ago</span>
        </section>
      </li>

      <li
        className={`${
          read === true ? "bg-white" : "bg-[hsl(210,60%,98%)]"
        } p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)]`}
      >
        <img
          src="./assets/images/avatar-angela-gray.webp"
          alt="person"
          className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
        />
        <section className="flex flex-col justify-center ">
          <article className="flex flex-row w-full">
            <p className="relative">
              <span className="mr-1 text-[hsl(224,21%,14%)] font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Angela Gray
              </span>
              followed you
              {read === true ? (
                ""
              ) : (
                <div className="w-[9px] h-[9px] rounded-full bg-[hsl(1,90%,64%)] inline-block mx-1"></div>
              )}
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">5m ago</span>
        </section>
      </li>

      <li
        className={`${
          read === true ? "bg-white" : "bg-[hsl(210,60%,98%)]"
        } p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)]`}
      >
        <img
          src="./assets/images/avatar-jacob-thompson.webp"
          alt="person"
          className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
        />
        <section className="flex flex-col justify-center ">
          <article className="flex flex-row w-full">
            <p className="relative">
              <span className="mr-1 text-[hsl(224,21%,14%)] font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Jacob Thompson
              </span>
              has joined your group
              <span className="ml-1 font-bold text-[hsl(219,85%,26%)] cursor-pointer">
                Chess Club
              </span>
              {read === true ? (
                ""
              ) : (
                <div className="w-[9px] h-[9px] rounded-full bg-[hsl(1,90%,64%)] inline-block mx-1"></div>
              )}
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">1day ago</span>
        </section>
      </li>

      <li className=" p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)] ">
        <img
          src="./assets/images/avatar-rizky-hasanuddin.webp"
          alt="person"
          className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
        />
        <section className="flex flex-col justify-center w-full ">
          <article className="flex flex-row w-full">
            <p className="relative">
              <span className="mr-1 text-[hsl(224,21%,14%)] font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Rizky Hasanuddin
              </span>
              sent you a private message
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">5 days ago</span>
          <p className="my-2 rounded-lg px-4 py-4 justify-between md:w-[500px] w-full  leading-relaxed border-2 hover:bg-[hsl(211,68%,94%)] border-[hsl(211,68%,94%)] duration-300 cursor-pointer">
            Hello, thanks for setting up the Chess Club.I've been a member for a
            few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </section>
      </li>

      <li className=" p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)] ">
        <section className="flex flex-row items-center justify-between w-full">
          <img
            src="./assets/images/avatar-kimberly-smith.webp"
            alt="person"
            className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
          />
          <section className="flex-1 flex-col justify-center ml-4 ">
            <article className="flex flex-row w-full">
              <p className="relative">
                <span className="mr-1 text-[hsl(224,21%,14%)] font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                  Kimberly Smith
                </span>
                commented on your picture
              </p>
            </article>
            <span className="text-[hsl(219,14%,63%)]">1week ago</span>
          </section>
          <img
            src="./assets/images/image-chess.webp"
            alt="person"
            className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] cursor-pointer"
          />
        </section>
      </li>

      <li className=" p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)] ">
        <img
          src="./assets/images/avatar-nathan-peterson.webp"
          alt="person"
          className="w-[50px] h-[50px]"
        />
        <section className="flex flex-col justify-center">
          <article className="flex flex-row w-full">
            <p className="relative">
              <span className="mr-1 font-bold text-[hsl(224,21%,14%)] cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Nathan Peterson
              </span>
              reacted to your recent post
              <span className="ml-1 font-bold cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                5 end-game strategies to increase your win rate
              </span>
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">2 weeks ago</span>
        </section>
      </li>

      <li className=" p-4 rounded-xl flex flex-row gap-4 text-sm text-[hsl(219,12%,42%)] ">
        <img
          src="./assets/images/avatar-anna-kim.webp"
          alt="person"
          className="w-[50px] h-[50px]"
        />
        <section className="flex flex-col justify-center">
          <article className="flex flex-row w-full">
            <p className="relative">
              <span className="mr-1 font-bold text-[hsl(224,21%,14%)] cursor-pointer hover:text-[hsl(219,85%,26%)] duration-300">
                Anna Kim
              </span>
              left the group
              <span className="ml-1 font-bold text-[hsl(219,85%,26%)] cursor-pointer">
                Chess Club
              </span>
            </p>
          </article>
          <span className="text-[hsl(219,14%,63%)]">2 weeks ago</span>
        </section>
      </li>
    </>
  );
}
