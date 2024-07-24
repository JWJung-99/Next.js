import { ApiRes, MultiItem, Post, SingleItem } from "@/types";

// node.js에서 env 파일 접근
const SERVER = process.env.API_SERVER;
const LIMIT = process.env.LIMIT;
const DELAY = process.env.DELAY;

export async function fetchPosts(
  type: string | undefined,
  page?: string,
  keyword?: string
): Promise<Post[]> {
  const params = new URLSearchParams();
  type && params.set("type", type);
  // 타입가드
  page && params.set("page", page);
  keyword && params.set("keyword", keyword);
  params.set("limit", LIMIT!);
  params.set("delay", DELAY!);

  const url = `${SERVER}/posts?${params.toString()}`;
  const res = await fetch(url);
  const resJson: ApiRes<MultiItem<Post>> = await res.json();

  if (!resJson.ok) {
    throw new Error("게시물 목록 조회 실패!");
  }

  return resJson.item;
}

export async function fetchDetail(_id: string): Promise<Post> {
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url); // Promise 객체 반환
  const resJson: ApiRes<SingleItem<Post>> = await res.json();

  if (!resJson.ok) {
    throw new Error("게시물 상세 조회 실패!");
  }

  return resJson.item;
}
