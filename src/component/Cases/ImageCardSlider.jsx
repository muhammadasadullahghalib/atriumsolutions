import { useEffect, useRef, useState } from "react";
import './ImageSlider.css'
import designbg from "../../assets/design_bg.png"
import marketerbg from "../../assets/marketing_bg.png"
import videobg from "../../assets/video_bg.png"
import webbg from "../../assets/Web_bg.png"
import customerbg from "../../assets/customer_bg.png"
import designP from "../../assets/design_profile.png"
import marketerp from "../../assets/marketing_profile.png"
import webp from "../../assets/web_profile.png"
import videop from "../../assets/video_profile.png"
import customerp from "../../assets/customer_profile.png"
import { Link } from "react-router-dom";
const cardsData = [
  
  {
    id: "Marketers",
    title: "Digital Marketing",
    desc: "Visibility is the key to Business Growth",
    bg: marketerbg,
    thumb: marketerp,
  },
  {
    id: "Designers",
    title: "Graphic Designing",
    desc: "We turn visuals into stories that speak.",
    bg: designbg,
    thumb: designP
  },
  {
    id: "Video",
    title: "Video Editing",
    desc: "If it moves, we edit it key to Business Growth",
    bg: videobg,
    thumb: videop,
  },
  {
    id: "Web",
    title: "Web Development",
    desc: "We transform ideas into fully built platforms.",
    bg: webbg,
    thumb: webp,
  },
  {
    id: "Customer",
    title: "Customer Support",
    desc: "People buy experiences, not just products.",
    bg: customerbg,
    thumb: customerp,
  },

];

export default function ImageCardSlider() {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:767px)").matches
  );

  const startRef = useRef({ x: 0, y: 0 });

  const centerCard = (index) => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const card = track.children[index];
    if (!card) return;

    const axis = isMobile ? "top" : "left";
    const size = isMobile ? "clientHeight" : "clientWidth";
    const start = isMobile ? card.offsetTop : card.offsetLeft;

    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth",
    });
  };

  const activate = (index, scroll = true) => {
    if (index === current) return;
    setCurrent(index);
    if (scroll) centerCard(index);
  };

  const go = (step) => {
    setCurrent((prev) => {
      const next = Math.min(
        Math.max(prev + step, 0),
        cardsData.length - 1
      );
      centerCard(next);
      return next;
    });
  };


  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.matchMedia("(max-width:767px)").matches);
      centerCard(current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]);


  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    centerCard(0);
  }, []);

  return (
    <section>
      <div className="head">
        <div className="controls">
          <button
            className="nav-btn"
            disabled={current === 0}
            onClick={() => go(-1)}
            aria-label="Prev"
          >
            {"<"}
          </button>
          <button
            className="nav-btn"
            disabled={current === cardsData.length - 1}
            onClick={() => go(1)}
            aria-label="Next"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="slider" ref={wrapRef}>
        <div
          className="track"
          ref={trackRef}
          onTouchStart={(e) => {
            startRef.current = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }}
          onTouchEnd={(e) => {
            const dx =
              e.changedTouches[0].clientX - startRef.current.x;
            const dy =
              e.changedTouches[0].clientY - startRef.current.y;

            if (isMobile ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
              go((isMobile ? dy : dx) > 0 ? -1 : 1);
            }
          }}
        >
          {cardsData.map((card, i) => (
            <article
              key={card.title}
              className="project-card mt-5"
              active={i === current ? "" : undefined}
              onClick={() => activate(i, true)}
              onMouseEnter={() =>
                window.matchMedia("(hover:hover)").matches &&
                activate(i, true)
              }
            >
              <img
                className="project-card__bg"
                src={card.bg}
                alt=""
              />

              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src={card.thumb}
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">{card.title}</h3>
                  <p className="project-card__desc">{card.desc}</p>
                 
   <Link
  to={`/more-services/${card.id}`}
  className={`project-card__btn ${i === current ? "active" : ""}`}
  onClick={(e) => e.stopPropagation()}
>
  <span className="arrow-icon">{">"}</span>
</Link>


                
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div className="dots">
          {cardsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => activate(i, true)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

