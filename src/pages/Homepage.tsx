import { useEffect, useRef } from "react";
import PROFILE from "../assets/profile.jpeg";
import HERO_FOOD from "../assets/hero-food.jpg";

const TestimonialCard = ({
  pos,
  name,
  feedback,
  image,
  animation = false,
}: {
  pos: string;
  name: string;
  feedback: string;
  image?: string;
  animation?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card || !animation) return;

    const cardDetails = card.getBoundingClientRect();

    const breakpointX = cardDetails.x + cardDetails.width / 2;
    const breakpointY = cardDetails.y + cardDetails.height / 2;

    const mouseMoveController = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (x > breakpointX && y < breakpointY) {
        console.log("top right");
        card.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(-15deg)";
      } else if (x > breakpointX && y > breakpointY) {
        console.log("down right");
        card.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(-15deg)";
      } else if (x < breakpointX && y < breakpointY) {
        console.log("top left");
        card.style.transform =
          "perspective(1000px) rotateX(-15deg) rotateY(15deg)";
      } else if (x < breakpointX && y > breakpointY) {
        console.log("down left");
        card.style.transform =
          "perspective(1000px) rotateX(15deg) rotateY(15deg)";
      }
    };

    const mouseLeaveController = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", mouseMoveController);
    card.addEventListener("mouseleave", mouseLeaveController);

    return () => {
      card.removeEventListener("mousemove", mouseMoveController);
      card.removeEventListener("mouseleave", mouseLeaveController);
    };
  }, []);

  return (
    <div ref={cardRef} className={`${pos} transition-transform duration-300`}>
      <div className="bg-white w-72 px-5 py-3 shadow-lg  rounded-md">
        <div className="flex items-center">
          <img
            src={PROFILE}
            alt="profile image"
            className="w-9 rounded-full border-2 border-blue-500"
          />
          <p className="ml-3 text-sm font-bold">@{name}</p>
        </div>
        <div className="py-3">
          <p className="text-xs font-light leading-5">{feedback}</p>

          {image && <img src={image} alt="food image" className="mt-3" />}
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="w-full h-screen fixed top-0 left-0 bg-hero -z-30"></div>

      {/* Hero section */}
      <div className="relative w-full h-screen flex justify-center">
        <TestimonialCard
          pos={"absolute top-10 left-16"}
          name="Rachel L"
          feedback="The shopping experience was seamless, and my order arrived faster than expected! 🛍️💯"
          animation={true}
        />
        <TestimonialCard
          pos={"absolute bottom-20 right-10"}
          name="Jake Paul"
          feedback="This app has completely changed my fitness routine! The workouts are easy to follow, and I love the personalized plans. Feeling stronger every day! 💪🔥"
          animation={true}
        />
        <TestimonialCard
          pos={"absolute bottom-20 left-[300px]"}
          name="Ankita Mathur"
          feedback="The courses are well-structured and easy to understand. I've gained so much knowledge in such a short time. Highly recommended for anyone wanting to upskill! 🎓✨"
          animation={true}
        />
        <TestimonialCard
          pos={"absolute bottom-5 left-5"}
          name="Sam Peter"
          feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
          image={HERO_FOOD}
          animation={true}
        />
        <TestimonialCard
          pos={"absolute top-16 right-16"}
          name="Melissa K."
          feedback="This tool has significantly boosted my productivity. Easy to use, intuitive features, and excellent customer support. 📈💼"
          animation={true}
        />

        <div className="mt-56 w-8/12 text-center">
          <h1 className="text-5xl">
            Create, customize, and embed testimonial sections in just a few
            clicks
          </h1>

          <button className="bg-blue-700 text-white px-7 py-3 mt-8 text-sm transition-transform hover:scale-110 rounded-md">
            Let's start
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-1 items-center w-full my-32 h-96 px-16">
        <div className="flex flex-[0.4] flex-col justify-center items-center">
          <h1 className="text-4xl">
            Get testimonials from customers in your site or via link
          </h1>
        </div>

        <div className="flex flex-[0.6] flex-col justify-center">
          <div className="relative">
            <TestimonialCard
              pos={"absolute left-16"}
              name="Rachel L"
              feedback="The shopping experience was seamless, and my order arrived faster than expected! 🛍️💯"
              animation={true}
            />
          </div>
        </div>
      </div>

      {/* Third section */}
      <div>
        <div className="w-full flex justify-center">
          <h1 className="text-4xl">Give feedback through videos</h1>
        </div>
        <div className="w-full my-20 relative">
          <div className="w-full flex items-center overflow-hidden space-x-10  before:content-[' '] before:absolute before:top-0 before:left-0 before:w-32 before:h-full before:backdrop-blur-sm before:backdrop-opacity-80 after:content-[' '] after:absolute after:top-0 after:right-0 after:w-32 after:h-full after:backdrop-blur-sm after:backdrop-opacity-80">
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
            <TestimonialCard
              pos={""}
              name="Sam Peter"
              feedback="Fresh, delicious meals delivered right to my door. The variety is amazing, and everything is always on time. 5-star service! 🍽️⭐"
              image={HERO_FOOD}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
