import gsap from 'gsap'
import './styles/style.css'

const imageReveal_tl = gsap.timeline({
  defaults: {
    ease: 'power4.inOut',
  },
})

imageReveal_tl
  .from('.image_wrapper', { duration: 2, height: 0, y: 312.5 }, 0)
  .from('img', { duration: 2.5, scale: 3, transformOrigin: '50% 0%' }, 0)
