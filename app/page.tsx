import Hero             from '@/components/home/Hero'
import OpeningStatement from '@/components/home/OpeningStatement'
import SignatureDishes  from '@/components/home/SignatureDishes'
import Story            from '@/components/home/Story'
import Reservations     from '@/components/home/Reservations'
import VisitUs          from '@/components/home/VisitUs'
import Footer           from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OpeningStatement />
      <SignatureDishes />
      <Story />
      <Reservations />
      <VisitUs />
      <Footer />
    </>
  )
}
