"use client";

interface UserMenuProps {
  onLogout: () => void;
}

const UserMenu = ({ onLogout }: UserMenuProps) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black/85 rounded-box z-1 mt-5 w-52 p-2 shadow"
      >
        <li className="hover:bg-gray-500 rounded-sm">
          <a>پروفایل</a>
        </li>
        <li className="hover:bg-gray-500 rounded-sm">
          <a>تنظیمات</a>
        </li>
        <li className="hover:bg-gray-500 rounded-sm">
          <button onClick={onLogout}>خروج</button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
