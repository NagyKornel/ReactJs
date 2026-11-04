import type { ReactNode } from "react";
import Carousel from "react-bootstrap/Carousel";

export const GenerateCarousel = (p: string[]): ReactNode => {
  return (
    <Carousel interval={null}>
      {p.map((e) => {
        return (
          <Carousel.Item>
            <img
              src={e}
              style={{
                objectFit: "cover",
                height: "200px",
                width: "100%",
              }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
