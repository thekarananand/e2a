import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex sm:min-h-[60vh] min-h-[60vh] flex-col place-items-start justify-center px-2 py-8">
        <div
          className="mb-5 sm:text-lg"
        >
          Welcome to
        </div>
        <h1 className="text-5xl font-bold  w-max mb-4 sm:text-7xl">
          E2A 2025
        </h1>
        <p className="mb-8 sm:text-xl w-fit max-w-[30ch] text-muted-foreground">
          The International Conference on Electrical, Electronics and Automation.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/register`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Register
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            Download Flyer
          </Link>
        </div>
      </section>

      <section id="about" className="border-t flex sm:min-h-[60vh] min-h-[60vh] flex-col place-items-start justify-center px-2 py-8">
        <h3 className="text-xl font-bold  w-max mb-4 sm:text-3xl">About the Conference</h3>
        <p className="mb-8 sm:text-xl w-fit max-w-[60ch] text-muted-foreground text-justify">
          The International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where experts gather to explore, collaborate, and share groundbreaking research and innovations in the rapidly evolving fields of electrical engineering, electronics, and automation. E2A provides a vital platform for diverse professionals to exchange ideas and knowledge, fostering innovation and shaping a future powered by cutting-edge technologies. Join us at E2A to be part of this transformative journey towards a smarter, more connected, and automated world, where your contributions are essential in shaping the future. Selected papers will be published in SCOPUS indexed proceedings.
        </p>
      </section>

      <section className="border-t flex sm:min-h-[60vh] min-h-[60vh] flex-col place-items-start justify-center px-2 py-8">
        <h3 className="text-xl font-bold  w-max mb-4 sm:text-3xl">About</h3>
        <p className="mb-8 sm:text-xl w-fit max-w-[60ch] text-muted-foreground text-justify">

        </p>
      </section>
    </div>

  );
}
