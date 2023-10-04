import { LookAndFeelModel } from "./core/models/lookAndFeel.model";

export interface IMappedTheme {
  [key: string]: string | null;
}

export const applyTheme = (theme: LookAndFeelModel): void => {
  if (!theme) return;

  theme = extend(theme);
  const themeObject: IMappedTheme = mapTheme(theme);
  if (!themeObject) return;

  const root = document.documentElement;
  Object.keys(themeObject).forEach((property) => {
    if (property === "name" || property === null) {
      return;
    }
    root.style.setProperty(property, themeObject[property]);
  });
};


export const mapTheme = (variables: LookAndFeelModel): IMappedTheme => {
  return {
    "--ngx-valepro-color-primary": variables.PrimaryColor,
    "--ngx-valepro-color-secondary": variables.SecondaryColor,
    "--ngx-valepro-color-tertiary": variables.TertiaryColor,
    "--imagen-background-login": `url(${variables.ImageBackgroundLogin})`,
  };
};


export const extend = (newTheme: LookAndFeelModel): LookAndFeelModel => {
  return { ...newTheme };
};
