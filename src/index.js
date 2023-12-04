import "./assets/styles.css";

import ImageOne from "./assets/imageone.jpg";
import ImageTwo from "./assets/imagetwo.jpg";
import ImageThree from "./assets/imagethree.jpg";

import CreateDropdown from "./components/dropdown/dropdown";
import CreateImageSlider from "./components/imageslider/image-slider";

const header = document.createElement("header");
header.appendChild(CreateDropdown("Shop", "Shoes", "Jackets", "Shirts"));
header.appendChild(CreateDropdown("About", "Contact", "Info"));

document.body.appendChild(header);

document.body.appendChild(CreateImageSlider(ImageOne, ImageTwo, ImageThree));
