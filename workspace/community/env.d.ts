declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_SERVER: string; // 클라이언트 컴포넌트에서 사용하려면 NEXT_PUBLIC을 붙이면 된다.
    NEXT_PUBLIC_DELAY: string;
    NEXT_PUBLIC_LIMIT: string;
    DB_SERVER: string;
    DB_NAME: string;
  }
}
