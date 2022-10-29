import { BsGithub, BsDiscord } from "react-icons/bs";

/**
 * TODO: Document this.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-600 bg-neutral-700 text-sm">
      <div className="flex h-full flex-col-reverse items-center gap-6 py-6 md:flex-row md:justify-end md:py-4">
        <section className="flex flex-wrap gap-6 px-4 md:mx-auto md:w-5/6 md:px-0 lg:w-4/6">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/feedback">Feedback</a>
          <a href="/admin">Administration</a>
        </section>
        <section className="flex gap-6 md:absolute md:px-8">
          <div className="flex gap-2">
            <BsDiscord size={24} />
          </div>
          <div className="flex gap-2">
            <BsGithub size={24} />
          </div>
        </section>
      </div>
    </footer>
  );
};
