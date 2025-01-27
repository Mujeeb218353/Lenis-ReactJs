import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function App() {
  const lenis = new Lenis();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    raf();
  }, [lenis]);

  useGSAP(() => {
    document.querySelectorAll('.elem').forEach((elem) => {
      const image = elem.querySelector('img');
      const tl = gsap.timeline();

      const xTransform = gsap.utils.random(-100, 100);

      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
      }, "start")
      .to(image, {
        scale: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      }, "start")
      .to(elem, {
        xPercent: xTransform,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, []); // This runs once on mount

  return (
    <div className='w-full min-h-screen'>
      <h1 className="text-center text-3xl font-bold">Use PC to see the effect</h1>
      <div className="w-full bg-zinc-900">
        <div className="grid grid-cols-8 grid-rows-20 gap-4 p-4">
          <div className="elem aspect-square" style={{ "--r": 1, "--c": 3 }}>
            <img src="https://picsum.photos/400" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 1, "--c": 7 }}>
            <img src="https://picsum.photos/401" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 2, "--c": 2 }}>
            <img src="https://picsum.photos/402" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 2, "--c": 5 }}>
            <img src="https://picsum.photos/403" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 3, "--c": 1 }}>
            <img src="https://picsum.photos/404" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 3, "--c": 8 }}>
            <img src="https://picsum.photos/405" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 4, "--c": 4 }}>
            <img src="https://picsum.photos/406" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 4, "--c": 6 }}>
            <img src="https://picsum.photos/407" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 5, "--c": 2 }}>
            <img src="https://picsum.photos/408" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 5, "--c": 7 }}>
            <img src="https://picsum.photos/409" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 6, "--c": 3 }}>
            <img src="https://picsum.photos/410" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 6, "--c": 5 }}>
            <img src="https://picsum.photos/411" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 7, "--c": 1 }}>
            <img src="https://picsum.photos/412" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 7, "--c": 8 }}>
            <img src="https://picsum.photos/413" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 8, "--c": 4 }}>
            <img src="https://picsum.photos/414" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 8, "--c": 6 }}>
            <img src="https://picsum.photos/415" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 9, "--c": 2 }}>
            <img src="https://picsum.photos/416" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 9, "--c": 7 }}>
            <img src="https://picsum.photos/417" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 10, "--c": 3 }}>
            <img src="https://picsum.photos/418" alt="Random image" className="w-full h-full object-cover" />
          </div>
          <div className="elem aspect-square" style={{ "--r": 10, "--c": 5 }}>
            <img src="https://picsum.photos/419" alt="Random image" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="fixed inset-0 font-['Helvetica_Now_Display'] flex items-center justify-center">
          <div className="text-center text-white flex flex-col gap-8">
            <h1 className="text-8xl">THOMAS VANCE<sup>®</sup></h1>
            <h2 className="text-7xl">自分を信じて</h2>
          </div>
        </div>
        <div className="w-full min-h-screen bg-[#d1d1d1] flex items-center justify-center mx-auto py-96 relative z-[999] text-center">
          <p className="w-3/4 text-5xl text-black font-regular leading-[4.2rem] text-left">
            Thomas Vance is a clothing brand dedicated to providing high-quality products that inspire confidence and self-belief. Our mission is to empower individuals to trust in themselves and achieve their goals<sup>®</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
