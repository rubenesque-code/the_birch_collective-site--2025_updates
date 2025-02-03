import type { Picture } from '^types';

export * from './picture';

export type SvelteSubmitEvent = SubmitEvent & {
  currentTarget: EventTarget & HTMLFormElement;
};

export type GaConsent = 'granted' | 'denied' | 'no-response'

export type PopupVisibility = 'show' | 'hide'


export type Project = {
  id: string;
  image: Picture;
  descriptionShort: string;
  descriptionLong?: string;
  alt?: string;
};

export type FAQ = {
  id: string;
  question: string
  answer: string
}

export type Review = {
  id: string;
  first_name: string
  second_name?: string
  text: string
}

export type WhyUsItem = {
  id: string
  title: string
  text: string[]
}