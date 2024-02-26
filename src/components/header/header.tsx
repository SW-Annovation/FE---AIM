import { Logo } from '@/components/logo'
import { Link } from 'react-router-dom'

function Header({ title }: { title?: string }) {
  return (
    <header className="relative z-10 py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center justify-center gap-2 no-underline">
              <Logo />
              <h1 className=" mt-[5px] text-xl font-bold uppercase leading-none">
                <span>{title} </span>
              </h1>
            </Link>
          </h1>
          <div className="mr-[-30px] mt-[5px] flex items-center gap-4">
            <Link to="/result" className="flex items-center text-gray-600">
              <button className="bg-blue-500 prose prose-xl hidden rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:block">
                면접 결과 보러가기
              </button>
              <button className="bg-blue-500 prose prose-xl block rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </Link>
            <Link to="/video" className="flex items-center text-gray-600">
              <button className="bg-blue-500 prose prose-xl hidden rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:block">
                면접 영상 보러가기
              </button>
              <button className="bg-blue-500 prose prose-xl block rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </button>
            </Link>
            <a
              href="https://github.com/SW-Annovation/FE---AIM"
              target="_blank"
              className="flex items-center text-gray-600"
            >
              <button className="bg-blue-500 prose prose-xl hidden rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:block">
                코드보기
              </button>
              <button className="bg-blue-500 prose prose-xl block rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </button>
            </a>
            <Link to="/404" className="flex items-center text-gray-600">
              <button className="bg-blue-500 prose prose-xl hidden rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:block">
                로그인
              </button>
              <button className="bg-blue-500 prose prose-xl block rounded-md px-4 py-2 font-bold text-gray-400 hover:bg-gray-200 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
