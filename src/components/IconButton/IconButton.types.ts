/**
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#type-narrowing-based-on-props}
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

/**
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#type-narrowing-based-on-props}
 */
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

/**
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#type-narrowing-based-on-props}
 */
export type IconButtonType = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};
