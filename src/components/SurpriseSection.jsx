import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import SurpriseButton from './SurpriseButton'
import OneMoreReminder from './OneMoreReminder'

export default function SurpriseSection() {
  return (
    <section aria-labelledby="surprise-title" className="relative px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading
        id="surprise-title"
        eyebrow="just for you"
        title="Psst… one more thing"
        description="Kalau hari ini terasa berat, tekan tombol ini. Ada sesuatu yang kecil buat kamu."
      />

      <SurpriseButton />

      <Divider className="my-14" />

      <OneMoreReminder />
    </section>
  )
}
