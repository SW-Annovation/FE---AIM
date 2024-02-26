import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const ModalBlock = styled.div`
  position: fixed; // position을 fixed로 변경
  top: 50%;
  left: 50%;
  transform: translate(-55%, -80%); // 화면 정중앙으로 이동
  border-radius: 10px;
  padding: 1.5rem;
  background-color: #e2edfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 20rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  width: 200px;
  height: 50px;
  background-color: #7f85ff;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalFrame = ({ _handleModal, children, ...rest }) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/your-target-route')
  }
  return (
    <Container>
      <Background onClick={_handleModal} />
      <ModalBlock {...rest}>
        <Contents>
          {children}
          <button onClick={handleButtonClick}></button>
        </Contents>
        <CloseButton onClick={_handleModal}>확인하기</CloseButton>
      </ModalBlock>
    </Container>
  )
}

export default ModalFrame
