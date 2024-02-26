import { ScrollToTop } from '@/components/scroll-to-top'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/faqs'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InterviewPage from '@/routes/intervuew'
import ResultPage from '@/routes/result'
import ErrorPage from '@/routes/error'
import PersonalResultPage from '@/routes/personalResult'
import VideoPage from '@/routes/video'
export default function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="peresult" element={<PersonalResultPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
