import Image from "next/image"
import img from "../../assets/images/profile.png"
const TopNav = () => {
  return (
    <div className="flex justify-between w-full border rounded-lg mx-auto items-center p-4 bg-gray-50 border-b">
      <input
        type="text"
        placeholder="Search rooms"
        className="w-1/3 px-4 py-2 rounded-full border outline-none"
      />
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 p-2 rounded-full">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2..." />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <Image src={img} width={35} height={35} className="rounded-full" alt="User" />
          <div>
            <p className="text-sm font-semibold">Gladys Adediji</p>
            <p className="text-xs text-gray-500">gladyssade10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
