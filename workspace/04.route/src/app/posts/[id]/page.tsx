import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  return {
    title: `${params.id}번 게시물`,
    description: `${params.id}번 게시물 상세 정보`,
    openGraph: {
      title: "",
      description: "",
      images: {
        url: "",
      },
      url: "",
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <h1 className="text-xl font-bold mb-4">{params.id} 상세 조회</h1>;
}
