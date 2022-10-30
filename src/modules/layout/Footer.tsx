import { BsGithub, BsDiscord } from "react-icons/bs";
import { IconButton } from "../../components/IconButton";

/**
 * The footer for the default page layout.
 *
 * @example <Footer />
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-600 bg-neutral-700 text-sm">
      <div className="flex h-full flex-col-reverse items-center gap-6 py-6 md:flex-row md:justify-end md:py-4">
        <section className="flex flex-wrap justify-evenly gap-6 px-4 md:mx-auto md:w-5/6 md:justify-start md:px-0 lg:w-4/6">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/feedback">Feedback</a>
          <a href="/admin">Administration</a>
        </section>
        <section className="flex gap-6 md:absolute md:px-8">
          <IconButton className="pt-2.5">
            <BsDiscord size={24} />
          </IconButton>
          <IconButton
            onClick={() => {
              // TODO: This should really be an href instead of a click handler
              // and IconButton should then render as anchor tag.
              window.open(
                "https://github.com/marcelherd/Trekken.pro",
                "_blank"
              );
            }}
          >
            <BsGithub size={24} />
          </IconButton>
        </section>
      </div>
    </footer>
  );
};
