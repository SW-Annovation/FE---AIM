import { exec } from 'child_process'

// WebM을 MP4로 인코딩하는 함수
export const EncodingWebmToMp4 = (webmBlob, filename) => {
  return new Promise((resolve, reject) => {
    // 입력 WebM 블롭에 대한 임시 URL 생성
    const inputUrl = URL.createObjectURL(webmBlob)

    // FFmpeg 명령어 실행
    const command = `ffmpeg -i ${inputUrl} -c:v libx264 -c:a aac -strict experimental -b:a 192k -movflags faststart ${filename}.mp4`

    exec(command, (error, stdout, stderr) => {
      // 에러 확인
      if (error) {
        console.error('동영상 인코딩 중 오류 발생:', error)
        reject(error)
      } else {
        // 출력 MP4 파일로부터 블롭 생성
        const mp4Blob = new Blob([stdout], { type: 'video/mp4' })

        // 인코딩된 MP4 블롭으로 Promise 완료
        resolve(mp4Blob)
      }

      // 임시 입력 URL 해제
      URL.revokeObjectURL(inputUrl)
    })
  })
}
