import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'
import { NewsletterForm } from '@/components/newsletter-form'
import { Navigate, useNavigate, Link } from 'react-router-dom'

export default function SupportPage() {
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState('')

  function handleClick(e) {
    e.preventDefault()
    setSuccess(true)
  }
  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values })
      }, 1000)
    })
  }
  function onSendButton() {
    localStorage.setItem('jobTitle', jobTitle)
    navigate('/faqs')
  }
  return (
    <Layout>
      {success ? (
        <div
          className="m-auto w-128 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
          style={{ zIndex: 1 }}
        >
          <div className="flex h-auto w-full flex-col items-center">
            <div>
              <p className="text-green-800 dark:text-green-200 mt-4 text-xl font-bold">
                감사합니다! 동의하셨습니다.
              </p>
              <p className="text-green-800 dark:text-green-200 mt-4 text-xl font-bold">
                아래는 PDF 제출란과 직무 선택란입니다.
              </p>
            </div>
            <NewsletterForm
              className="mx-auto mt-8 max-w-md lg:mx-0"
              submitText="파일 제출하기"
              onSubmit={onNewsletterSubmit}
            />
            <div className="m-auto mt-10 w-full max-w-2xl bg-white px-2 ">
              <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" focus:ring-purple-600 w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
                      placeholder="회사"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className=" focus:ring-purple-600 w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
                      placeholder="직무"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" for="name">
                    <textarea
                      class="focus:ring-purple-600 w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2"
                      id="comment"
                      placeholder="추가사항을 입력해주세요!"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    onClick={onSendButton}
                    className="w-full rounded-[20px]  bg-indigo-600 px-4 py-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="m-auto w-[800px] rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
          style={{ zIndex: 1 }}
        >
          <div className="h-auto w-full">
            <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
              본 서비스는 사용자의 면접 과정을 녹화해주는 서비스로 해당 과정을 촬영하기 위해서
              카메라 및 음성에 대한 권한이 필요합니다.
              <br />
              <br />
              사용자는 해당 권한을 통해 촬영된 영상을 직접 다운로드 받거나 서버에 저장하여 나중에
              다시 볼 수 있습니다.
              <br />
              <br />
              해당 녹화본은 사용자의 개인정보로서 외부에 공개되지 않으며, 사용자가 직접 공개하기
              위해서는 별도의 공개 설정을 통해 공개할 수 있습니다.
              <br />
              <br />
              참여자는 해당 약관에 대해서 거부할 수 있지만 거부시에 해당 서비스를 이용하지 못합니다.
              <br />
            </p>
            <p className="mt-2 px-2 py-2 text-base text-gray-600 dark:text-gray-400">
              동의 하시겠습니까 ?
            </p>
            <div className="mt-8 flex w-full items-center justify-between gap-4">
              <button
                type="button"
                className="w-full rounded-[20px]  bg-indigo-600 px-4 py-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                onClick={handleClick}
              >
                예
              </button>
              <Link to="/" className="px-4 py-4 ">
                <button
                  type="button"
                  className="w-full rounded-[20px]  bg-white px-4 py-4 text-center text-base font-semibold text-indigo-500 text-indigo-500 shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
