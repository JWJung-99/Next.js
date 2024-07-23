import Submit from "@/components/Submit";
import CommentItem from "./CommentItem";
import CommentNew from "./CommentNew";

export interface CommentProps {
  _id: number;
  content: string;
  createdAt: string;
  user: {
    name: string;
    profile: string;
  };
}

export default function CommentList() {
  const replies = [
    {
      _id: 1,
      user: {
        name: "무지",
        profile: "/files/00-sample/user-muzi.webp",
      },
      createdAt: "2024.07.07 12:34:56",
      content: "축하해요~~~",
    },
    {
      _id: 2,
      user: {
        name: "어피치",
        profile: "/files/00-sample/user-apeach.webp",
      },
      createdAt: "2024.07.02 14:11:22",
      content: "화이팅!",
    },
  ];

  const list: JSX.Element[] = replies.map((item) => (
    <CommentItem key={item._id} item={item} />
  ));

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {replies.length}개</h4>

      {list}

      <CommentNew />
    </section>
  );
}
