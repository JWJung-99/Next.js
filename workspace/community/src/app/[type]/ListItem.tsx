import Link from "next/link";
import { ItemType } from "./page";

export default function ListItem({
  item,
  params,
}: {
  item: ItemType;
  params: { type: string };
}) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{item._id}</td>
      <td className="p-2 truncate indent-4">
        <Link href={`/${params.type}/${item._id}`} className="cursor-pointer">
          {item.title}
        </Link>
      </td>
      <td className="p-2 text-center truncate">{item.user.name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{item.views}</td>
      <td className="p-2 text-center hidden sm:table-cell">
        {item.repliesCount}
      </td>
      <td className="p-2 truncate text-center hidden sm:table-cell">
        {item.createdAt}
      </td>
    </tr>
  );
}
