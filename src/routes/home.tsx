import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title={
          <>
            <span style={{ lineHeight: '1.5', display: 'block' }}>로그인 없는</span>
            <span style={{ lineHeight: '1.5', display: 'block' }}>새로운 면접 서비스</span>
            <span style={{ lineHeight: '1.5', display: 'block' }}>AI - Mock Interview</span>
          </>
        }
        content={
          // '자소서를 기반으로한 저희의 면접서비스를 만나보세요. \n' +
          // '아래에 자신의 자기소개서 파일을 등록하시면 AI를 통해 ' +
          // '자동으로 분석 후 최적의 면접서비스를 제공합니다.'
          <>
            <span style={{ lineHeight: '1.5', display: 'block' }}>
              자소서를 기반으로한 저희의 면접서비스를 만나보세요.
            </span>
            <span style={{ lineHeight: '1.5', display: 'block' }}>
              아래에 자신의 자기소개서 파일을 등록하시면 AI를 통해
            </span>
            <span style={{ lineHeight: '1.5', display: 'block' }}>
              자동으로 분석 후 최적의 면접서비스를 제공합니다.
            </span>
          </>
        }
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
