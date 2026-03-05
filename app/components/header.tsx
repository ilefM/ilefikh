import Link from "next/link";

export default function Header() {
  return (
    <main className="flex justify-between p-4 border">
      <div>
        <p>Ilefikh</p>
      </div>
      <div>
        <Link href={""}>Home</Link>
        <Link href={""}>Projects</Link>
      </div>
    </main>
  );
}
