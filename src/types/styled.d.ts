import "styled-components";
import { AppTheme } from "@/styles/theme";

// Augment styled-components' DefaultTheme with our app theme shape,
// so `styled.div` callbacks get typed `theme` access automatically.
// `interface … extends` is required here — module augmentation can't
// replace the existing interface with a type alias.
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
