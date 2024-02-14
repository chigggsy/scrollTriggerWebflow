// Importing plugins
import gsap from 'gsap'
import { CustomEase } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SplitType from 'split-type'
import './styles/style.css'

// Registering plugins
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

// Functions
const imageRevealOnScroll = () => {
  const imageWrapperList = gsap.utils.toArray('.image_wrapper')

  imageWrapperList.forEach((imageWrapper) => {
    // const image = imageWrapper.querySelector('img')
    const imageReveal_tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top bottom',
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })
    imageReveal_tl.fromTo(imageWrapper, { opacity: 0 }, { opacity: 100 }, 0)
  })
}

/*
const textRevealOnScroll = () => {
  CustomEase.create('ease_pz', 'M0,0 C0,0.24 0.08,1 1,1 ')
  const characterDescriptionList = gsap.utils.toArray('.character_description')

  characterDescriptionList.forEach((characterDescription) => {
    const heading = characterDescription.querySelector('h1')
    const para = characterDescription.querySelector('p')
    const tag = characterDescription.querySelectorAll('.tag')

    const st_heading = new SplitType(heading, {
      types: 'chars',
    })
    const st_para = new SplitType(para, { types: 'lines' })

    const st_resplitPara = () => {
      st_para.split()
    }
    window.addEventListener('resize', st_resplitPara)

    const textReveal_tl = gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
        opacity: 0,
      },
      scrollTrigger: {
        trigger: characterDescription,
        toggleActions: 'play none none none',
        start: 'top 50%',
        markers: true,
      },
    })

    textReveal_tl
      .from(
        tag,
        { duration: 1, y: 15, stagger: { each: 0.1, from: 'start' } },
        0
      )
      .from(st_heading.chars, { duration: 1, y: 30, stagger: 0.02 }, 0.2)
      .from(st_para.lines, { duration: 1.5, y: 30, stagger: 0.03 }, 0.3)
  })
}

*/
// Calling functions
imageRevealOnScroll()
// textRevealOnScroll()
