import Submit from "@/components/Submit";
import { Metadata } from "next";
import Link from "next/link";
import CommentList from "./CommentList";

export function generateMetadata({
  params,
}: {
  params: { type: string; id: string };
}): Metadata {
  return {
    title: "좋은 소식이 있습니다.",
    openGraph: {
      title: "좋은 소식이 있습니다.",
      description: "좋은 소식을 가지고 왔습니다. 오늘 드디어...",
      url: `https://community.fesp.shop/${params.type}/${params.id}`,
      type: "article",
      images: {
        url: "/images/fesp.webp",
      },
      siteName: "멋사컴",
    },
  };
}

export default function PostDetailPage({
  params,
}: {
  params: { type: string; id: string };
}) {
  const item = {
    title: "좋은 소식이 있습니다.",
    content:
      "좋은 소식을 가지고 왔습니다. 오늘 드디어 최종 면접을 합니다. 많이 응원해 주세요^^",
    user: {
      name: "제이지",
    },
  };

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`/${params.type}`}>
          <div className="font-semibold text-xl">제목 : {item.title}</div>
          <div className="text-right text-gray-400">
            작성자 : {item.user.name}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                {item.content}
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Link
              href={`/${params.type}`}
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              목록
            </Link>
            <Link
              href={`/${params.type}/${params.id}/edit`}
              className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              수정
            </Link>
            <Submit bgColor="red">삭제</Submit>
          </div>
        </form>
      </section>

      <CommentList />
    </main>
  );
}
