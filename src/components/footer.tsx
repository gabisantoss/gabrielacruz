import GithubIcon from "@/components/icons/Github"
import LinkedinIcon from "@/components/icons/Linkedin"
import XIcon from "@/components/icons/X"

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex text-neutral-600 justify-center sm:justify-start flex-row space-x-4 space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/gcruzdev/"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/gabisantoss"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/gcruzdev/"
          >
            <XIcon />
          </a>
        </li>
      </ul>
    </footer>
  )
}
