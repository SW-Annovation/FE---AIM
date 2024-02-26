import { Layout } from '@/components/layout'
import styled from 'styled-components'
import avatar1 from './avatar/1.png'
import avatar2 from './avatar/2.png'
import avatar3 from './avatar/3.png'
import avatar4 from './avatar/4.png'
const BackgroundContainer = styled.div`
  background: linear-gradient(180deg, #f8feff 0%, #cef8ff 50%, #d9f7fd 75%, #d6f6ff 100%);
  min-height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) =>
    props.status === '분석 중..'
      ? '#ff0000'
      : props.status === '분석 완료'
      ? '#30ff30'
      : '#000000'};
`
export default function ResultPage() {
  return (
    <Layout>
      <BackgroundContainer>
        <div className="z-4 container relative mx-auto max-w-3xl px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-bold uppercase text-gray-800"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-bold uppercase text-gray-800"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-bold uppercase text-gray-800"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 bg-white px-7 py-3 text-left text-sm font-bold uppercase text-gray-800"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-bold uppercase text-gray-800"
                      >
                        결과 확인하기
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <img
                                alt="profil"
                                src={avatar2}
                                className="mx-auto h-10 w-10 rounded-full object-cover "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap text-gray-900">Jean marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">개발자</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">12/09/2020</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                          <StatusIndicator status="분석 중.." />
                          <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span
                              aria-hidden="true"
                              className="bg-green-200 absolute inset-0 rounded-full opacity-50"
                            ></span>
                            <span className="relative">분석 중..</span>
                          </span>
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          조금 더 기다려주세여..
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <img
                                alt="profil"
                                src={avatar4}
                                className="mx-auto h-10 w-10 rounded-full object-cover "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap text-gray-900">Marcus coco</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">디자인어</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">01/10/2012</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden="true"
                            className="bg-green-200 absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative">분석 중..</span>
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          조금 더 기다려주세여..
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <img
                                alt="profile"
                                src={avatar1}
                                className="mx-auto h-10 w-10 rounded-full object-cover "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap text-gray-900">Ecric marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">섹시가이</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">02/10/2018</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                          <StatusIndicator status="분석 완료" />
                          <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span
                              aria-hidden="true"
                              className="bg-green-200 absolute inset-0 rounded-full opacity-50"
                            ></span>
                            <span className="relative">분석 완료</span>
                          </span>
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          결과 확인하기
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <img
                                alt="profil"
                                src={avatar3}
                                className="mx-auto h-10 w-10 rounded-full object-cover "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap text-gray-900">Julien Huger</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">User</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">23/09/2010</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="text-green-900 relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden="true"
                            className="bg-green-200 absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative">분석 완료</span>
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          결과 확인하기
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="xs:flex-row xs:justify-between flex flex-col items-center bg-white px-5 py-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                    >
                      <svg
                        width="9"
                        fill="currentColor"
                        height="8"
                        className=""
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="w-full border-b border-t bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100 "
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="w-full border-b border-t bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-r-xl border-b border-r border-t bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                    >
                      <svg
                        width="9"
                        fill="currentColor"
                        height="8"
                        className=""
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundContainer>
    </Layout>
  )
}
