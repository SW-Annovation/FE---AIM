import React from 'react'
import { Layout } from '@/components/layout'
import styled from 'styled-components'
import './person.css'
const Wrapper = styled.div`
  background-color: #f6f5f5;
  width: 100%;
  height: 800px;
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

const PersonalResultPage = () => {
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
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  🤩감정분석 결과
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>무표정</p>
                  <p>80%</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-black">
                  <div className="bg-green-400 h-full w-1/3 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>행복함</p>
                  <p>2%</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-indigo-100">
                  <div className="h-full w-2/3 rounded-full bg-indigo-400 text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>당황함</p>
                  <p>5%</p>
                </div>
                <div className="bg-blue-100 mb-4 h-2 w-full rounded-full">
                  <div className="bg-blue-400 h-full w-1/4 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>즐거움</p>
                  <p>13%</p>
                </div>
                <div className="bg-pink-100 h-2 w-full rounded-full">
                  <div className="bg-pink-400 h-full w-full rounded-full text-center text-xs text-white"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="task-progress">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  📝질문 답변 결과
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Design</p>
                  <p>3/8</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-black">
                  <div className="bg-green-400 h-full w-1/3 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Development</p>
                  <p>6/10</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-indigo-100">
                  <div className="h-full w-2/3 rounded-full bg-indigo-400 text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>DevOps</p>
                  <p>2/8</p>
                </div>
                <div className="bg-blue-100 mb-4 h-2 w-full rounded-full">
                  <div className="bg-blue-400 h-full w-1/4 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Marketing</p>
                  <p>8/8</p>
                </div>
                <div className="bg-pink-100 h-2 w-full rounded-full">
                  <div className="bg-pink-400 h-full w-full rounded-full text-center text-xs text-white"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="task-progress">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  🧑‍🦱시선 분석 결과
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Design</p>
                  <p>3/8</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-black">
                  <div className="bg-green-400 h-full w-1/3 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Development</p>
                  <p>6/10</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-indigo-100">
                  <div className="h-full w-2/3 rounded-full bg-indigo-400 text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>DevOps</p>
                  <p>2/8</p>
                </div>
                <div className="bg-blue-100 mb-4 h-2 w-full rounded-full">
                  <div className="bg-blue-400 h-full w-1/4 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Marketing</p>
                  <p>8/8</p>
                </div>
                <div className="bg-pink-100 h-2 w-full rounded-full">
                  <div className="bg-pink-400 h-full w-full rounded-full text-center text-xs text-white"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="task-progress">
            <a href="#" className="block h-full w-full">
              <div className="w-full">
                <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                  ⌚시간분석 결과
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Design</p>
                  <p>3/8</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-black">
                  <div className="bg-green-400 h-full w-1/3 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Development</p>
                  <p>6/10</p>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-indigo-100">
                  <div className="h-full w-2/3 rounded-full bg-indigo-400 text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>DevOps</p>
                  <p>2/8</p>
                </div>
                <div className="bg-blue-100 mb-4 h-2 w-full rounded-full">
                  <div className="bg-blue-400 h-full w-1/4 rounded-full text-center text-xs text-white"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p>Marketing</p>
                  <p>8/8</p>
                </div>
                <div className="bg-pink-100 h-2 w-full rounded-full">
                  <div className="bg-pink-400 h-full w-full rounded-full text-center text-xs text-white"></div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="task-progress1"></div> */}
        </FirstBox>
      </Wrapper>
    </Layout>
  )
}

export default PersonalResultPage
