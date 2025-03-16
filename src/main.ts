import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { putAge } from "./utils/age";
import { loadWallpaper, loadProfilePicture } from "./utils/images";
import austriaImage from "./assets/austria.jpg";
import profilePicture from "./assets/valentin.png";

loadProfilePicture(profilePicture);
loadWallpaper(austriaImage);

putAge();

library.add(faGithub, faLinkedin);
dom.watch();
