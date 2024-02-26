import { Layout } from '@/components/layout'
import React, { useState, useRef, useEffect } from 'react'
import Chatbot from '../components/Chatbot/Chatbot'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
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
    if (isVideoPlaying) {
      const stream = videoRef.current.srcObject
      mediaRecorderRef.current = new MediaRecorder(stream)
      const chunks = []

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.style = 'display: none'
        a.href = url
        a.download = 'recorded.mp4'
        a.click()
        window.URL.revokeObjectURL(url)
        setButtonText('녹화 시작하기') // 녹화가 끝나면 버튼 텍스트 업데이트
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
        <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">
          질문보기
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