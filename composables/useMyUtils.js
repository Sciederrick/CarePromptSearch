import { filename } from 'pathe/utils';

export const useMyUtils = () => {
    const useCapitalize = (input) => {
        let output = '';
        const inputArray = input.split(' ')
        inputArray.forEach((word, index) => {
            if (index == 0) output = ''
            output += word.charAt(0).toUpperCase().concat(word.substring(1))
            if (inputArray.length != index + 1) output += " "
        })
        return output
    }

    const useDynamicImages = () => {       
        // Work around for dynamic images with Vite because require() doesn't work
        const glob = import.meta.glob('~/assets/images/*.webp', { eager: true });
        return Object.fromEntries(
                Object
                .entries(glob)
                .map(([key, value]) => [filename(key), value.default]));
    }

    return {
        useCapitalize,
        useDynamicImages
    }
}