type Props = {
  /**
   * The contents of the backdrop.
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A fixed, dark backdrop that covers the entire page.
 *
 * @example
 *
 * <Backdrop>
 *   <p>Loading...</p>
 * </Backdrop>
 */
export const Backdrop: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`fixed left-0 top-0 z-40 h-screen w-screen bg-neutral-900/50 ${props.className}`}
    >
      {children}
    </div>
  );
};
