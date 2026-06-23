import { CiCalendarDate } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { FcTodoList } from "react-icons/fc";

function Header() {
  return (
    <header className="px-5 py-6 sm:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">
            My Everyday
          </h1>

          <HiDotsVertical className="w-6 h-6 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <CiCalendarDate className="w-5 h-5" />
            Tue Jun 23, 2026
          </p>

          <span className="flex items-center gap-2 text-sm font-medium">
            <FcTodoList className="w-5 h-5" />
            All Tasks
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;