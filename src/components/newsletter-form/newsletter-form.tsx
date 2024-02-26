import { cn } from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import ModalFrame from './Modal.jsx'
import axios from 'axios'

function FileUploadForm({
  className,
  onSubmit,
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (file: File) => Promise<any>
  submitText?: string
}) {
  const [file, setFile] = useState<File | null>(null)
  const [success, setSuccess] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [question, setQuestion] = useState<any>(null)
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!file) {
      console.error('No file selected.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('http://3.142.40.252:8080/train-gpt', formData)

      // 서버 응답에 대한 처리 (response.data 등)

      console.log(response.data)
      setQuestion(response.data)
      localStorage.setItem('question', JSON.stringify(response.data))
      setFile(null)
      setIsModalOpen(true)
      setSuccess(true)
    } catch (error) {
      console.error('Error uploading file:', error)
      // setErrorMessage('다시 제출해주세요.')
    } finally {
      setIsModalOpen(true) // Show the modal whether successful or not
    }
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files && event.target.files[0]

    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSuccess(false)
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn('file-upload-form is-revealing flex flex-col gap-2 sm:flex-row', className)}
      >
        <div className="mr-2 flex-shrink flex-grow">
          <label className="hidden" htmlFor="file" aria-hidden="true">
            Choose a file
          </label>
          <input
            required
            id="file"
            name="file"
            type="file"
            onChange={handleChange}
            className="w-full rounded-[10px] border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          />
        </div>

        <div className="control">
          <button
            className="inline-flex cursor-pointer  justify-center whitespace-nowrap rounded-[10px] border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
            type="submit"
          >
            {submitText}
          </button>
        </div>
      </form>
      {isModalOpen && (
        <ModalFrame _handleModal={closeModal}>
          <h2 className=" prose-xl px-4 py-2 font-bold text-black">
            {errorMessage || '파일이 성공적으로 제출되었습니다!'}
          </h2>
        </ModalFrame>
      )}
    </div>
  )
}

export default FileUploadForm
