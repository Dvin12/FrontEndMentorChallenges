import Button from "./Button";

export default function Download() {
  return (
    <section className="flex flex-col items-center w-full mb-12 text-center py-28 justify-normal">
      <h3 className="text-3xl font-bold text-dBlue ">
        Clipboard for iOS and Mac OS
      </h3>
      <p className="my-10 leading-relaxed ">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
      <section className="flex flex-col w-full gap-6 my-3">
        <Button>Download for iOS</Button>
        <Button color="bg-lBlue">Download for Mac</Button>
      </section>
    </section>
  );
}
