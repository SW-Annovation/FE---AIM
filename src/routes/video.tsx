import React from 'react'
import { Layout } from '@/components/layout'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import video1 from './videos/1.mp4'
import video2 from './videos/2.mp4'
import video3 from './videos/3.mp4'
import video4 from './videos/4.mp4'
const VideoCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`

const VideoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const Video = () => {
  const videos = [
    {
      id: 1,
      url: video1,
      description: (
        <>
          질문
          <br />
          1번: 자기소개를 해주세요
          <br />
          2번: 이 직무에 지원한 이유는 무엇인가요?
        </>
      ),
      autoplay: false,
    },
    {
      id: 2,
      url: video2,
      description: (
        <>
          질문
          <br />
          1번: 본인은 개발자란 무엇이라고 생각하나요?
          <br />
          2번: 이 직무에 지원한 이유는 무엇인가요?
        </>
      ),
      autoplay: false,
    },
    {
      id: 3,
      url: video3,
      description: (
        <>
          질문
          <br />
          1번: 객체지향에 대해 설명해주세요.
          <br />
          2번: 대용량 트래픽 최적화에 가장 <br />
          효율적인 방법은 무엇일까요?
        </>
      ),
      autoplay: false,
    },
    {
      id: 4,
      url: video4,
      description: (
        <>
          질문
          <br />
          1번: 저를 당황시켜주세요!
          <br />
          2번: 당신은 저를 사랑하십니까?
        </>
      ),
      autoplay: false,
    },
    {
      url: video1,
      description: (
        <>
          질문
          <br />
          1번: 자기소개를 해주세요
          <br />
          2번: 이 직무에 지원한 이유는 무엇인가요?
        </>
      ),
      autoplay: false,
    },
    {
      url: video1,
      description: (
        <>
          질문
          <br />
          1번: 자기소개를 해주세요
          <br />
          2번: 이 직무에 지원한 이유는 무엇인가요?
        </>
      ),
      autoplay: false,
    },
    // Add more videos as needed
  ]
  return (
    <Layout>
      <VideoSection>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={`Video ${video.id}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
          </VideoCard>
        ))}
      </VideoSection>
    </Layout>
  )
}

export default Video
