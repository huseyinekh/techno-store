import React, { useEffect } from "react";
import ProductItem from "../../components/product/productItem";
import style from "./Home.css";
import Slider from "../../components/slider/Slider";
import CategoryMenu from "../../components/menu/categoryMenu/menu";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      myFunction(document.documentElement.scrollTop);
    });
    var header = document.getElementById("catMenu");
    var sticky = header.offsetTop;

    function myFunction(scrollTop) {

      let productCount = document.body.offsetHeight - 800;
  
      if ((scrollTop > 500) & (scrollTop < productCount))
        header.style.marginTop = `${scrollTop - 400}px`;
    }
  });

  return (
    <section id="home">
      <div className="slider_container">
        <div className="box_side side_reclame side_1">
          <h1>Google reclames</h1>
        </div>
        <div className="slider_c_inner">
          <Slider onSlideChange={(event) => console.log(event.slideIndex)} />
        </div>
        <div className="box_side side_reclame side_2">
          <h1>Google reclames </h1>
        </div>
      </div>

      <div className="products_container">
        <div id="catMenu" className="box_side cat_menu_container">
          <CategoryMenu />
        </div>
        <div className="products">
          <div className="most_popular product">
            <h1 className="product_sale_title">Önə çıxanlar</h1>
            <ProductItem
              id={1}
              price="35$"
              detail="Lorem inpsun lorem sitea"
              src="hp.png"
            />
            <ProductItem
              id={2}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp2.png"
            />
            <ProductItem
              id={3}
              price="35$"
              isBestSeller
              detail="Lorem inpsun lorem sitea"
              src="hp3.png"
            />
            <ProductItem
              id={4}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp4.png"
            />
          </div>

          <div className="most_popular product">
            <h1 className="product_sale_title">Trend mallar</h1>
            <ProductItem
              id={11}
              price="35$"
              detail="Lorem inpsun lorem sitea"
              src="hp.png"
            />
            <ProductItem
              id={12}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp2.png"
            />
            <ProductItem
              id={13}
              price="35$"
              isBestSeller
              detail="Lorem inpsun lorem sitea"
              src="hp3.png"
            />
            <ProductItem
              id={14}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp4.png"
            />
            <ProductItem
              id={15}
              price="35$"
              detail="Lorem inpsun lorem sitea"
              src="hp.png"
            />
            <ProductItem
             id={16}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp2.png"
            />
            <ProductItem
              id={24}
              price="35$"
              isBestSeller
              detail="Lorem inpsun lorem sitea"
              src="hp3.png"
            />
            <ProductItem
              id={53}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp4.png"
            />
            <ProductItem
              id={44}
              price="35$"
              detail="Lorem inpsun lorem sitea"
              src="hp.png"
            />
            <ProductItem
              id={3}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp2.png"
            />
            <ProductItem
              id={26}
              price="35$"
              isBestSeller
              detail="Lorem inpsun lorem sitea"
              src="hp3.png"
            />
            <ProductItem
              id={1}
              price="35$"
              isNew
              detail="Lorem inpsun lorem sitea"
              src="hp4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
