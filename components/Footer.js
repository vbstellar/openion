export default function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="bg-gray-700 py-3 rounded-lg text-center text-cyan-600">
        Made by{" : "}{" "}
        <a
          target="_blank"
          className="text-white"
          href="https://vbstellar.vercel.app/"
        >
          {" "}
          Vishu
        </a>{" "}
      </div>
    </div>
  );
}
