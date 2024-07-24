import Submit from "@/components/Submit";
import { fetchDetail } from "@/data/fetch/postFetch";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CommentList from "./CommentList";

export async function generateMetadata({
  params,
}: {
  params: { type: string; id: string };
}): Promise<Metadata> {
  const boardName = params.type;
  const item = await fetchDetail(params.id);
  if (item === null) notFound();
  return {
    title: `${boardName} - ${item.title}`,
    description: `${boardName} - ${item.content}`,
    openGraph: {
      title: `${boardName} - ${item.title}`,
      description: `${boardName} - ${item.content}`,
      url: `/${params.type}/${params.id}`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { type: "notice", id: "4" },
    { type: "notice", id: "5" },
  ];
}

export default async function Page({
  params,
}: {
  params: { type: string; id: string };
}) {
  // const data = await model.post.detail(+params.id);
  const data = await fetchDetail(params.id);
  if (data === null) notFound();

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`/${params.type}`}>
          <div className="font-semibold text-xl">제목 : {data?.title}</div>
          <div className="text-right text-gray-400">
            작성자 : {data?.user?.name || "익명"}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                {data?.content}
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

      <CommentList id={params.id} />
    </main>
  );
}
