import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieType } from "../../Utils/types";
import { HorizontalCard } from "../Cards/HorizontalCard";
import { RailContainer } from "./styled";

export const Rail = ({ movies }: { movies: MovieType[] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <RailContainer>
      <Carousel
        infinite={true}
        ssr={true}
        draggable={false}
        itemClass="carousel-item-padding-0-px"
        responsive={responsive}
      >
        {movies.map((movie) => {
          return <HorizontalCard movie={movie} key={movie.id} />;
        })}
      </Carousel>
    </RailContainer>
  );
};
