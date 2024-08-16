import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[50vh] min-h-[40vh] flex-col items-center justify-center text-center px-2 py-8">
      <div
        className="mb-5 sm:text-lg"
      >
        Welcome to
      </div>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Contact Page
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        This is the International Conference on Electrical, Electronics and Automation (E2A)
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/`}
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
    </div>

    // <div>E2a</div>
  );
}
