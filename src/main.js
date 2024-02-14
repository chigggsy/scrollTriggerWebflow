import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

const imageWrapperList = gsap.utils.toArray('.image_wrapper')
imageWrapperList.forEach((imageWrapper) => {
  const imageReveal_tl = gsap.timeline({
    scrollTrigger: {
      trigger: imageWrapper,
      start: 'top 90%',
      toggleActions: 'play none none none',
      markers: true,
    },
    defaults: {
      ease: 'power4.inOut',
    },
  })

  const image = imageWrapper.querySelector('img')

  imageReveal_tl
    .from(imageWrapper, {}, 0)
    .from(image, { duration: 2, scale: 2, transformOrigin: '50% 50%' }, 0)
})
