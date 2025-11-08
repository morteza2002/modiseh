import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl w-full max-w">
      <FaSearch className="text-gray-500 text-sm" />
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="bg-transparent focus:outline-none text-sm flex-1"
      />
    </div>
  );
}
