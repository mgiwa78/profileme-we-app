import React from "react";
import { CategoriesContainer, Category } from "./categories-section.styles";
import cat1 from "../../assets/cat1.jpeg";
import cat2 from "../../assets/cat2.jpeg";
import cat3 from "../../assets/cat3.jpeg";
import cat4 from "../../assets/cat4.jpeg";
import cat5 from "../../assets/cat5.jpeg";
import cat6 from "../../assets/cat6.jpeg";
import cat7 from "../../assets/cat7.jpeg";
import cat8 from "../../assets/cat8.jpeg";
import Button from "../button/button.component";

const CategoriesSection = () => {
  const categoriesData = [
    { id: 1, title: "Graphic&Design", imgUrl: cat2 },
    { id: 2, title: "Cartoon Animation", imgUrl: cat3 },
    { id: 3, title: "Logo Design", imgUrl: cat1 },
    { id: 4, title: "Social graphics", imgUrl: cat4 },
    { id: 5, title: "Illustration", imgUrl: cat5 },
    { id: 6, title: "Article writing", imgUrl: cat6 },
    { id: 7, title: "Flyers & Vouchers", imgUrl: cat7 },
    { id: 8, title: "Video Editing", imgUrl: cat8 },
  ];
  return (
    <CategoriesContainer>
      <div className="section-heading">
        Choose Different <span className="styled">Category</span>{" "}
      </div>
      <div className="categories">
        {categoriesData.map((cat) => (
          <Category key={cat.id} bgUrl={cat.imgUrl}>
            <div className="title">{cat.title}</div>
          </Category>
        ))}
      </div>
      <Button name="More Categories" />
    </CategoriesContainer>
  );
};

export default CategoriesSection;
