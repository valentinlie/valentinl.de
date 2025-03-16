import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { putAge } from "./utils/age";
import { loadImage } from "./utils/images";

library.add(faGithub, faLinkedin);

dom.watch();

putAge();

loadImage("wallpaper", "wallpaper");
loadImage("pictureImage", "picture");
