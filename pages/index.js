import HeroCarousel from "../components/Hero/HeroCarousel";

export default function () {
  return (
    <HeroCarousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop
      interval={1000}
      autoPlay
    />
  );
}
