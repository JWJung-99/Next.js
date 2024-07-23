export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-10">
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-semibold">
          로딩 중... 잠시만 기다려주세요.
        </h3>
        {/* <HashLoader color="#F97316" /> */}
      </div>
    </div>
  );
}
