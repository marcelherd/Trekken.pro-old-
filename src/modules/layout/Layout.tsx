import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  /**
   * The contents of the page.
   */
  children?: React.ReactNode;
};

/**
 * TODO: Document this.
 */
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col text-neutral-200">
      <Header />
      <div className="flex-1 bg-[url('/images/background.jpg')] bg-cover bg-left">
        <div className="h-full">
          <main className="mx-auto px-4 py-4 md:w-5/6 md:px-0 lg:w-4/6">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
