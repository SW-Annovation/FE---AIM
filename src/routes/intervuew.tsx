import { Layout } from '@/components/layout'
import React, { useState, useRef, useEffect } from 'react'
import Chatbot from '../components/Chatbot/Chatbot'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getSpeech } from '@/components/Chatbot/useSpeechToText'
import axios from 'axios'
const Container = styled.div`
  height: 100vh;
  z-index: 10;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const VideoContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.isRecording ? 'red' : 'lime')};
  border-radius: 50%;
  margin-right: 20px;
`
function InterviewPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [buttonText, setButtonText] = useState('녹화 시작하기') // 버튼 텍스트 상태 추가
  const [loadingVideo, setLoadingVideo] = useState(false)
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [buttonText2, setButtonText2] = useState('질문듣기')
  const [buttonText3, setButtonText3] = useState('꼬리질문 듣기 1번')
  const [followUpQuestionIndex, setFollowUpQuestionIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('mainQuestion')
  const [mainQuestion, setMainQuestion] = useState('질문 듣기 버튼을 눌러주세요!') // Placeholder for main question content
  const [followUpQuestion, setFollowUpQuestion] = useState('꼬리질문 듣기 버튼을 눌러주세요!') // Placeholder for follow-up question content
  useEffect(() => {
    setJobTitle(localStorage.getItem('jobTitle'))
    const startVideo = async () => {
      try {
        setLoadingVideo(true)
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        videoRef.current.srcObject = stream
        setIsVideoPlaying(true)
      } catch (error) {
        console.error('Error accessing webcam:', error)
      } finally {
        setLoadingVideo(false) // Set loading state to false when the process is completed
      }
    }

    startVideo()
  }, []) // Empty dependency array ensures it only runs once on mount
  useEffect(() => {
    if (isRecording) {
      setStartTime(Date.now())

      const intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime)
      }, 1000)

      return () => clearInterval(intervalId)
    } else {
      // Reset elapsed time when recording stops
      setElapsedTime(0)
    }
  }, [isRecording, startTime])
  const startRecording = () => {
    const stageOption = localStorage.getItem('stageOption')
    if (isVideoPlaying) {
      const stream = videoRef.current.srcObject
      mediaRecorderRef.current = new MediaRecorder(stream)
      const chunks = []

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/mp4' })
        const url = URL.createObjectURL(blob)
        const formData = new FormData()
        formData.append('video', blob, 'recorded.mp4')
        try {
          const response = await axios.post('http://3.142.40.252:8080/video-test', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })

          // 서버 응답에 따른 처리
          console.log('서버 응답:', response.data)
        } catch (error) {
          console.error('서버 전송 에러:', error)
        }
        if (stageOption === '2') {
          const a = document.createElement('a')
          document.body.appendChild(a)
          a.style = 'display: none'
          a.href = url
          a.download = 'recorded.mp4'
          a.click()
          window.URL.revokeObjectURL(url)
          setButtonText('녹화 시작하기') // 녹화가 끝날 때 버튼 텍스트 업데이트
        } else {
          // "stageoption"이 2가 아닐 때 다운로드하지 않음
          setButtonText('녹화 시작하기') // 녹화가 끝날 때 버튼 텍스트 업데이트
        }
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setButtonText('녹화 중지하기') // 녹화가 시작되면 버튼 텍스트 업데이트
    } else {
      // Handle case where video is not playing
      console.error('Video is not playing. Start the video first.')
    }
  }
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setElapsedTime(9000)
    }
  }
  function ExitButton() {
    navigate('/')
  }
  function ResultButton() {
    navigate('/result')
  }
  const readMessage = async () => {
    try {
      const response = await axios.get('http://13.124.138.144:8080/main-question')

      if (response.data) {
        // Use the getSpeech function to read the question
        getSpeech(response.data)
        console.log(response.data)
        setMainQuestion(response.data)
        setButtonText2('다음질문듣기')
      } else {
        console.log('No question available in the response.')
        // If the response is null, set a default message
        getSpeech('준비된 질문을 모두 답변하였습니다.')
      }
    } catch (error) {
      console.error('Error fetching question:', error)
      // Handle the error and set a default message
      getSpeech('준비된 질문을 모두 답변하였습니다.')
    }
  }
  const readFollowUpQuestion = async () => {
    try {
      const response = await axios.get(
        `http://13.124.138.144:8080/follow-up-question/${followUpQuestionIndex}`,
      )

      if (response.data) {
        getSpeech(`꼬리 질문 ${followUpQuestionIndex + 1}번째 입니다.`)
        setFollowUpQuestion(response.data)
        getSpeech(response.data)
        console.log(response.data)

        // Update button text and increment the follow-up question index
        if (followUpQuestionIndex < 4) {
          setButtonText3(`다음 꼬리질문 듣기 (${followUpQuestionIndex + 2}번)`)
          setFollowUpQuestionIndex((prevIndex) => prevIndex + 1)
        } else {
          setButtonText3('꼬리질문이 없습니다.')
        }
      } else {
        console.log('No follow-up question available in the response.')
        // If the response is null, set a default message
        getSpeech('꼬리질문이 없습니다.')
      }
    } catch (error) {
      console.error('Error fetching follow-up question:', error)
      // Handle the error and set a default message
      getSpeech('꼬리질문이 없습니다.')
    }
  }

  return (
    <Container>
      <VideoContainer>
        <Head>
          <p className="text-bold text-2xl font-semibold text-white">
            <p className="text-bold flex items-center text-2xl font-semibold text-white">
              <Circle isRecording={isRecording} /> {isRecording ? '녹화 중' : '녹화 준비'}
            </p>
          </p>
          <p className="text-bold text-2xl font-semibold text-white">
            {jobTitle && `${jobTitle} 최종 면접에 들어온 면접자`}
          </p>
          <p className="text-bold text-2xl font-semibold text-white">
            Time: {formatTime(elapsedTime)}
          </p>
        </Head>

        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: '100%', height: '80vh', transform: 'scaleX(-1)' }}
        />
        {loadingVideo && <p className="mt-4 text-indigo-600">로딩 중입니다...</p>}
        <div className="mt-4 text-center font-[25px] text-white">
          <p>메인 질문: {mainQuestion}</p>
          <p>꼬리 질문: {followUpQuestion}</p>
        </div>
      </VideoContainer>
      <Box>
        <button
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          onClick={ExitButton}
        >
          나가기
        </button>
        <button
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          onClick={isRecording ? stopRecording : startRecording}
          disabled={!isVideoPlaying}
        >
          {buttonText}
        </button>
        <button
          onClick={() => readMessage()}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
        >
          {buttonText2}
        </button>
        <button
          onClick={() => readFollowUpQuestion()}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
        >
          {buttonText3}
        </button>
        <button
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          onClick={ResultButton}
        >
          결과보기
        </button>
      </Box>
    </Container>
  )
}

export default InterviewPage
