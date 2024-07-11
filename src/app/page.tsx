import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <header>Header</header>
      <main className="grid grid-cols-3 w-full gap-4">
        <Link href="/singleton">
          <Button>Singleton</Button>
        </Link>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
