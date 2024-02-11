import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

const imageReveal_tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.image_gallery',
    start: 'top 90%',
    toggleActions: 'play none none reverse',
    markers: true,
  },
  defaults: {
    ease: 'power4.inOut',
  },
})

imageReveal_tl
  .from('.image_wrapper', { duration: 1.5, height: 0, y: 312.5 }, 0)
  .from('img', { duration: 2, scale: 3, transformOrigin: '50% 0%' }, 0)
