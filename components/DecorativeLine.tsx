export default function DecorativeLine() {
  return (
    <div className="my-12 md:my-20 flex justify-center">
      <div
        className="h-[2px] w-[80vw] max-w-5xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(202, 170, 130, 0), rgb(202, 170, 130), rgba(202, 170, 130, 0))",
        }}
      ></div>
    </div>
  );
}
