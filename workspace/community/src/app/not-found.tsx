import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">
        🚧 앗, 무언가 잘못됐네요!
      </h2>
      <h3 className="text-md font-semibold mb-2 text-center">
        존재하지 않는 페이지입니다.
      </h3>
      <p className="pt-12 text-center">
        이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!
      </p>
      <Button bgColor="red" size="md">
        ⚙️ 문제 해결하기
      </Button>
    </div>
  );
}
