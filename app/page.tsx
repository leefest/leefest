import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Awards from '@/components/Awards'
import Press from '@/components/Press'
import Posters from '@/components/Posters'
import Artists from '@/components/Artists'
import PhotoGallery from '@/components/PhotoGallery'
import AndroidCampaign from '@/components/AndroidCampaign'
import Legacy from '@/components/Legacy'
import Footer from '@/components/Footer'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FadeInSection>
        <Story />
      </FadeInSection>
      <FadeInSection>
        <Awards />
      </FadeInSection>
      <FadeInSection>
        <Press />
      </FadeInSection>
      <FadeInSection>
        <Posters />
      </FadeInSection>
      <FadeInSection>
        <Artists />
      </FadeInSection>
      <FadeInSection>
        <PhotoGallery />
      </FadeInSection>
      <FadeInSection>
        <AndroidCampaign />
      </FadeInSection>
      <FadeInSection>
        <Legacy />
      </FadeInSection>
      <Footer />
    </main>
  )
}
