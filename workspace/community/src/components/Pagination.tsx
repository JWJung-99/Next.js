import Link from "next/link";

export default function Pagination({ params }: { params: { type: string } }) {
  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        <li className="font-bold text-blue-700">
          <Link href={`/${params.type}?page=1`}>1</Link>
        </li>
        <li>
          <Link href={`/${params.type}?page=2`}>2</Link>
        </li>
      </ul>
    </div>
  );
}
