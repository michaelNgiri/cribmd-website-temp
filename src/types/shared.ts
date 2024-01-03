/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes,
  RefObject,
  BlockquoteHTMLAttributes,
  ImgHTMLAttributes,
  FC,
  InputHTMLAttributes,
  CSSProperties,
  TextareaHTMLAttributes
} from 'react';

export interface AppModalContextValue {
  header?: JSX.Element | null;
  body?: JSX.Element | null;
  footer?: JSX.Element | null;
  displayModal?: boolean;
  centered?: boolean;
  modalClassName?: string;
  handleDisplayModal?: (content: AppModalContextValue) => void;
}

export interface FetchStatus {
  status: 'settled' | 'pending' | 'fulfilled';
  err: boolean;
  statusText: string;
}

export interface FAQDataProps {
  generalInfo: QandAProps[];
  pricingAndPlans: QandAProps[];
  privacyAndSecurity: QandAProps[];
  platformUsage: QandAProps[];
}

export interface QandAProps {
  question: string;
  answer: Partial<{
    paragraphs: string[];
    orderedList1Title: string;
    orderedList2Title: string;
    orderedList1: string[];
    orderedList2: string[];
  }>;
}

export interface ImgProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  isJPG?: boolean;
}

export interface IconProps {
  name?: SVGIconName & string;
  className?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
  crop?: boolean;
  style?: CSSProperties;
  fontSize?: string;
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'tertiary';
  _type?: 'flat-button' | 'icon-button';
  cta?: boolean;
}

export interface AnchorProps
  extends Partial<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> {
  button?: boolean;
  cta?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | 'contained-light';
  color?: 'primary' | 'secondary' | 'tertiary' | 'indigo';
  _type?: 'flat-button' | 'icon-button';
  exact?: boolean;
  routeLink?: boolean;
}

export type InputAttributes = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface InputProps extends InputAttributes {
  variant?: 'filled' | 'outlined' | 'standard';
  color?: 'primary' | 'secondary' | 'tertiary';
  label?: string | JSX.Element;
  helperText?: string | boolean;
  error?: boolean;
  noValidate?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
}

export interface BoxProps
  extends Partial<
    DetailedHTMLProps<
      HTMLAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
    >
  > {
  as?: BoxAs;
  component?: FC<any>;
  _ref?: RefObject<
    HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
  >;
  dynamic?: boolean;
  noFade?: boolean;
  'data-anim'?: TransitionAnimName;
}

export type TransitionAnimName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUpBig'
  | 'fadeInDownBig'
  | 'fadeInLeftBig'
  | 'fadeInRightBig'
  | 'In'
  | 'InUp'
  | 'InDown'
  | 'InLeft'
  | 'InRight'
  | 'InUpBig'
  | 'InDownBig'
  | 'InLeftBig'
  | 'InRightBig'
  | 'scale'
  | 'scaleX'
  | 'scaleY';

export type SVGIconName =
  | 'times'
  | 'star-wallet'
  | 'picture'
  | 'cribmd-logo-text'
  | 'cribmd-logo--blue'
  | 'mail'
  | 'phone'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'youtube'
  | 'tick'
  | 'appstore-button'
  | 'playstore-button'
  | 'caret-filled-down'
  | 'caret-down'
  | 'previous'
  | 'next'
  | 'credit-card-individual'
  | 'credit-card-corporate'
  | 'volume'
  | 'cribmd-logo'
  | 'wave'
  | 'heart'
  | 'blood'
  | 'users'
  | 'girl'
  | 'eye'
  | 'cross'
  | 'smiley'
  | 'double-arrow'
  | 'arrow-top-right'
  | 'home'
  | 'mobile'
  | 'drug-container'
  | 'shield'
  | 'curved-square(blue)'
  | 'wide-rectangle(blue)'
  | 'curved-square(purple)'
  | 'wide-rectangle(purple)'
  | 'doctors-briefcase'
  | 'flower'
  | 'rectangle-slanted-right'
  | 'rectangle-slanted-left'
  | 'wavy-rectangle-sm'
  | 'wavy-rectangle-lg'
  | 'check-circle'
  | 'check(blue)'
  | 'check(grey)'
  | 'activity-green'
  | 'activity-wine'
  | 'activity-beige'
  | 'svgName'
  | 'mobile-phone'
  | 'web'
  | 'download-cloud'
  | 'whatsapp'
  | 'clock';

export type SVGShapeName = 'wave';

export type BoxAs =
  | 'label'
  | 'strong'
  | 'address'
  | 'nav'
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'ul'
  | 'ol'
  | 'li'
  | 'section'
  | 'i'
  | 'small'
  | 'blockquote';
