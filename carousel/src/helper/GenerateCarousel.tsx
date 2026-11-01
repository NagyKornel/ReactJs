import Carousel from "react-bootstrap/Carousel";
import type { ReactNode } from "react";

export const GenerateCarousel = (c: string[]): ReactNode => {
  return (
    <Carousel interval={null}>
      {c.map((e) => {
        return (
          <Carousel.Item style={{ height: "300px", backgroundColor: "gray" }}>
            <img
              src={e}
              style={{
                objectFit: "contain",
                height: "100%",
                transform: "translateX(50%)",
              }}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
