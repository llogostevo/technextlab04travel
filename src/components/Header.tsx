import Link from "next/link";

export default function Header() {
  return (
    <div>
        <h1>Lloyd's Travel Diary</h1>
        <Link href="/locations">Travel Locations</Link>
    </div>
  )
}
