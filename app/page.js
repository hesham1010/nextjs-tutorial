import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href={"/client"} className="btn btn-accent">
        get Started
      </Link>
    </div>
  );
}
