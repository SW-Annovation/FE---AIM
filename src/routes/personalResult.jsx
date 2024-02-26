import React from 'react'
import { Layout } from '@/components/layout'
import styled from 'styled-components'
import './person.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import img from './1.png'

const Wrapper = styled.div`
  background-color: #effeff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const FirstBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
`
const Score = styled.div`
  font-size: 100px;
  margin-top: -30px;
`
const PersonalResultPage = () => {
  const [emotionalAnalysisResult, setEmotionalAnalysisResult] = useState(null)
  const [videoFeedback, setVideoFeedback] = useState(null)
  const [videoResponse, setVideoResponse] = useState(null)
  const [reponse, setReponse] = useState(null)
  const [final, setFinal] = useState(null)
  useEffect(() => {
    const fetchEmotionalAnalysisResult = async () => {
      try {
        const response = await axios.get('http://13.124.138.144:8080/emotion-analysis')
        setEmotionalAnalysisResult(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching emotional analysis result:', error)
      }
    }

    const fetchVideoFeedback = async () => {
      try {
        const response = await axios.get('http://13.124.138.144:8080/get-feedback-video')
        setVideoFeedback(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching video feedback:', error)
      }
    }

    const fetchVideoResponse = async () => {
      try {
        const response = await axios.get('http://13.124.138.144:8080/get-feedback-response-time')
        setVideoResponse(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching video response:', error)
      }
    }
    const fetchresponse = async () => {
      try {
        const response = await axios.get('http://13.124.138.144:8080/get-feedback-text')
        setReponse(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching video response:', error)
      }
    }
    const fetchfinal = async () => {
      try {
        const response = await axios.get('http://13.124.138.144:8080/get-feedback-numeric')
        const finalData = JSON.parse(response.data)
        setFinal(finalData)
        console.log(finalData)
      } catch (error) {
        console.error('Error fetching video response:', error)
      }
    }
    fetchEmotionalAnalysisResult()
    fetchVideoFeedback()
    fetchVideoResponse()
    fetchresponse()
    fetchfinal()
  }, [])

  return (
    <Layout>
      <Wrapper>
        <h1 className="prose prose-xl m-auto mb-[50px] mt-[50px] font-bold text-black">
          Hi, 결과 페이지입니다 👋
        </h1>
        <FirstBox>
          <div className="task-progress">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white ">
                  🤩감정분석 결과
                </p>
                {emotionalAnalysisResult ? (
                  <>
                    {Object.entries(emotionalAnalysisResult).map(([emotion, percentage]) => (
                      <div
                        key={emotion}
                        className="mt-2 flex items-center justify-between text-sm text-gray-400"
                      >
                        <p>{emotion}</p>
                        <p>{percentage}%</p>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Loading emotional analysis result...</p>
                )}
                <img src={img} className="mt-[50px]"></img>
              </div>
            </a>
          </div>
          <div className="task-progress1">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  📝영상 분석 피드백
                </p>
                {videoFeedback ? (
                  <div>
                    <p
                      dangerouslySetInnerHTML={{ __html: videoFeedback.replace(/\n/g, '<br />') }}
                    ></p>
                  </div>
                ) : (
                  <p>Loading video feedback...</p>
                )}
              </div>
            </a>
          </div>
          <div className="task-progress3">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">⌚1번 점수</p>
              </div>
              <Score>{final ? final[1] : 'Loading'}</Score>
            </a>
          </div>
          <div className="task-progress3">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">⌚2번 점수</p>
              </div>
              <Score>{final ? final[2] : 'Loading'}</Score>
            </a>
          </div>
          <div className="task-progress3">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">⌚3번 점수</p>
              </div>
              <Score>{final ? final[3] : 'Loading'}</Score>
            </a>
          </div>
          <div className="task-progress3">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">⌚4번 점수</p>
              </div>
              <Score>{final ? final[4] : 'Loading'}</Score>
            </a>
          </div>
          <div className="task-progress3">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">⌚5번 점수</p>
              </div>
              <Score>{final ? final[5] : 'Loading'}</Score>
            </a>
          </div>
          <div className="task-progress2">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-8 text-2xl font-light text-gray-700 dark:text-white">
                  ⌚질문 별 시간 분석
                </p>

                {videoResponse ? (
                  <>
                    {Object.entries(videoResponse).map(([questionNumber, timeDescription]) => (
                      <div
                        key={questionNumber}
                        className="mt-2 flex items-center justify-between text-sm text-gray-400"
                      >
                        <p>{questionNumber}번</p>
                        <p>{timeDescription}</p>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Loading video response data...</p>
                )}
              </div>
            </a>
          </div>
          <div className="task-progress1">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  ⌚질문 분석 결과
                </p>
                {reponse ? (
                  <>
                    {Object.entries(reponse).map(([questionNumber, timeDescription]) => (
                      <div
                        key={questionNumber}
                        className="text-m mt-2 flex items-center justify-between text-gray-600"
                      >
                        <p style={{ flex: 1, marginLeft: '30px' }}>{questionNumber}번</p>
                        <p style={{ flex: 5 }}>{timeDescription}</p>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Loading video response data...</p>
                )}
              </div>
            </a>
          </div>
        </FirstBox>
      </Wrapper>
    </Layout>
  )
}

export default PersonalResultPage
