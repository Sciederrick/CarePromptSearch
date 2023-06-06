import { filename } from "pathe/utils";

export const useMyUtils = () => {
  const useCapitalize = (input: string) => {
    let output = "";
    const inputArray = input.split(" ");
    inputArray.forEach((word, index) => {
      if (index == 0) output = "";
      output += word.charAt(0).toUpperCase().concat(word.substring(1));
      if (inputArray.length != index + 1) output += " ";
    });

    return output;
  };

  const useDynamicImages = () => {
    // Work around for dynamic images with Vite because require() doesn't work
    const glob = import.meta.glob("~/assets/images/*.webp", { eager: true });

    return Object.fromEntries(
      Object.entries(glob).map(([key, value]: any) => [
        filename(key),
        value.default,
      ])
    );
  };

  const useEllipsize = (input: string, size: number) => {
    return input.length > size ? input.slice(0, size).concat("...") : input;
  };

  const copyTextToClipboard = (input: string) => {
    navigator.clipboard.writeText(input);
  };

  return {
    useCapitalize,
    useDynamicImages,
    useEllipsize,
    copyTextToClipboard,
  };
};
