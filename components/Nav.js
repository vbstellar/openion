import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHummingbird } from "react-icons/gi";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="bg-gray-700 flex justify-between items-center rounded-lg px-2 py-2 mb-10">
      <Link href="/">
        <button className=" flex justify-start gap-3 text-white text-lg font-medium">
          <GiHummingbird className="text-2xl ml-3 mt-[0.5]"/>
          Openion
        </button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link
            href={"/auth/login"}
            className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
          >
            Join Now
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href={"/post"}>
              <button className="font-medium bg-cyan-500 text-white py-2 px-2 rounded-md text-sm">
                Post
              </button>
            </Link>
            <Link href={"dashboard"}>
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
