import HorizontalScroller from "@/components/HorizontalScroller";
import InstagramFeed from "@/components/InstagramFeed";
import Philosophy from "@/components/Philosophy";
import {
  HeroSlide,
  StorySlide,
  FounderSlide,
  CollectionSlide,
  SpacesSlide,
} from "@/components/Slides";
import Testimonials from "@/components/Testimonials";
import ThreeDoors from "@/components/ThreeDoors";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <HorizontalScroller>
        <HeroSlide />
        <StorySlide />
        <FounderSlide />
        <CollectionSlide />
        <SpacesSlide />
      </HorizontalScroller>
      <WhatWeDo/>
      <ThreeDoors/>
      <Philosophy/>
      <Testimonials/>
      <InstagramFeed/>
    </main>
  );
}
