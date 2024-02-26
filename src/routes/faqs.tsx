import { Layout } from '@/components/layout'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FaqsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [storageOption, setStorageOption] = useState('')
  const [mediaStream, setMediaStream] = useState(null)
  const [loadingVideo, setLoadingVideo] = useState(false)
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const handleStorageOption = (option) => {
    setStorageOption((prevOption) => (prevOption === option ? '' : option))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }
  const navigateToInterview = () => {
    navigate('/interview')
  }

  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        setLoadingVideo(true) // Set loading state to true
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices.filter((device) => device.kind === 'videoinput')
        if (videoDevices.length > 0) {
          // 사용 가능한 비디오 장치가 있을 때만 미디어 스트림을 가져옴
          const stream = await navigator.mediaDevices.getUserMedia({ video: true })
          setMediaStream(stream)
          videoRef.current.srcObject = stream
        } else {
          console.error('No video devices found.')
        }
      } catch (error) {
        console.error('Error accessing webcam:', error)
      } finally {
        setLoadingVideo(false) // Set loading state to false when the process is completed
      }
    }

    if (currentPage === 2 && videoRef.current) {
      getMediaDevices()
    } else {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop())
        setMediaStream(null)
      }
    }
  }, [currentPage])

  return (
    <Layout>
      <div
        className="mx-auto max-w-2xl rounded-2xl bg-white p-4 p-8 shadow-lg dark:bg-gray-800"
        style={{ zIndex: 1 }}
      >
        <div className="mb-8 text-center">
          <h2 className="mb-[50px] text-xl font-bold">녹화 설정</h2>
        </div>

        {currentPage === 1 && (
          <div>
            <div
              className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200"
              style={{ lineHeight: '1.5' }}
            >
              <p>
                - 면접 시작 전, 사용하시는 장치의 화면 및 소리가 정상적으로 연결되어 있는지 확인해
                주세요.
              </p>
              <br />
              <p>
                - 헤드셋이나 이어폰을 사용하시면 더욱 명료한 소리로 면접에 참여하실 수 있습니다.
              </p>
              <br />
              <p>
                - 화면이나 소리에 문제가 있을 경우, 잠시 면접을 중단하시고 문제를 해결한 뒤 이어나가
                주세요.
              </p>
              <br />
              <p>
                - 기타 기술적인 문제나 화면 공유 문제가 있으시면, 채팅창이나 연락처를 통해
                알려주시길 바랍니다.
              </p>
              <br />
            </div>
            <div className="flex flex-col gap-4  px-[50px]">
              <button
                onClick={() => handleStorageOption('서버에 저장')}
                className={`mb-2 rounded-[20px] py-4 text-center text-base font-semibold ${
                  storageOption === '서버에 저장'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-indigo-700'
                } text-indigo-600 shadow-md transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 lg:mb-0`}
              >
                서버에 저장
              </button>
              <button
                onClick={() => handleStorageOption('로컬에 저장')}
                className={`mb-2 rounded-[20px] py-4 text-center text-base font-semibold ${
                  storageOption === '로컬에 저장'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-indigo-700'
                } text-indigo-600 shadow-md transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 lg:mb-0`}
              >
                로컬에 저장
              </button>
              <button
                onClick={() => handleStorageOption('저장하지 않음')}
                className={`rounded-[20px] py-4 text-center text-base font-semibold ${
                  storageOption === '저장하지 않음'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-indigo-700'
                } text-indigo-600 shadow-md transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200`}
              >
                저장하지 않음
              </button>
            </div>
            <button
              onClick={handleNextPage}
              className="ml-auto mt-4 rounded-[10px] bg-indigo-600 px-4 py-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
            >
              다음
            </button>
          </div>
        )}
        {currentPage === 2 && (
          <div>
            <h2 className="mb-4 text-xl font-bold">웹캠 테스트</h2>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="mb-4 h-auto w-full"
              style={{ transform: 'scaleX(-1)' }}
            />
            {loadingVideo && <p className="mt-4 text-indigo-600">로딩 중입니다...</p>}
            <button
              onClick={navigateToInterview}
              className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
