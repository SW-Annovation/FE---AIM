import React from 'react'
import { Layout } from '@/components/layout'
import styled from 'styled-components'

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
      url: 'https://www.youtube.com/watch?v=your_video_id_1',
      description: 'This is the first video description.',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=your_video_id_2',
      description: 'This is the second video description.',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=your_video_id_2',
      description: 'This is the second video description.',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=your_video_id_2',
      description: 'This is the second video description.',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=your_video_id_2',
      description: 'This is the second video description.',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/watch?v=your_video_id_2',
      description: 'This is the second video description.',
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
