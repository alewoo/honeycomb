import localFont from 'next/font/local'
import { Plus_Jakarta_Sans, Crimson_Text } from 'next/font/google'

export const crimson_regular = Crimson_Text({
    weight: '400',  // Thin
    subsets: ['latin'],
    display: 'swap',
});

export const crimson_regular_italic = Crimson_Text({
    weight: '400',  // Thin
    style: 'italic',
    subsets: ['latin'],
    display: 'swap',
});

export const crimson_semibold = Crimson_Text({
    weight: '600',  // Thin
    subsets: ['latin'],
    display: 'swap',
});

export const crimson_bold = Crimson_Text({
    weight: '700',  // Thin
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_thin = Plus_Jakarta_Sans({
    weight: '200',  // Thin
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_regular = Plus_Jakarta_Sans({
    weight: '400',  // Regular
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_medium = Plus_Jakarta_Sans({
    weight: '500',  // Medium
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_semibold = Plus_Jakarta_Sans({
    weight: '600',  // Semibold
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_bold = Plus_Jakarta_Sans({
    weight: '700',  // Bold
    subsets: ['latin'],
    display: 'swap',
});

export const plus_jakarta_sans_extrabold = Plus_Jakarta_Sans({
    weight: '800',  // Extra Bold
    subsets: ['latin'],
    display: 'swap',
});

export const druk_wide = localFont({
    src: "../../public/fonts/Druk-Wide-Bold.ttf",
    display: "swap",
});

export const messina_light = localFont({
    src: "../../public/fonts/MessinaSansMono-Light.ttf",
    display: "swap",
});

export const messina_book = localFont({
  src: "../../public/fonts/MessinaSansMono-Book.ttf",
  display: "swap",
});

export const messina_semibold = localFont({
  src: "../../public/fonts/MessinaSansMono-SemiBold.ttf",
  display: "swap",
});

export const messina_bold = localFont({
    src: "../../public/fonts/MessinaSansMono-Bold.ttf",
    display: "swap",
});