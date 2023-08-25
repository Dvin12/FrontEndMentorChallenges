export default function BulletPoints() {
  return (
    <article className="flex flex-col items-center justify-center gap-20 mt-20 text-cyan">
      <section className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/icon-access-anywhere.svg"
          alt="icon"
          className="w-1/5"
        />
        <h3 className="pt-8 text-lg font-bold font-raleway ">
          Access your files anywhere
        </h3>
        <p className="px-2 pt-1 text-sm leading-relaxed text-center">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/icon-security.svg"
          alt="icon"
          className="w-1/5"
        />
        <h3 className="pt-4 text-lg font-bold font-raleway ">
          Security you can trust
        </h3>
        <p className="px-2 pt-1 text-sm leading-relaxed text-center">
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/icon-collaboration.svg"
          alt="icon"
          className="w-1/5"
        />
        <h3 className="pt-10 text-lg font-bold font-raleway ">
          Real-time collaboration
        </h3>
        <p className="px-2 pt-1 text-sm leading-relaxed text-center">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/icon-any-file.svg"
          alt="icon"
          className="w-1/5"
        />
        <h3 className="text-lg font-bold pt-14 font-raleway ">
          Store any type of file
        </h3>
        <p className="px-1 pt-1 text-sm leading-relaxed text-center">
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </section>
    </article>
  );
}
