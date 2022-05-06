import '../styles/globals.css'

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName, linkResolver } from '../prismicio'
import Link from 'next/link'

//Passing Custom RichTextComponents to the PrismicProvider to use them across the App
//Below are some examples
const richTextComponents = {
  //Customizing unordered lists
  list: ({ children, key }) => (
    <ul className="list-inside list-disc" key={key}>
      {children}
    </ul>
  ),
  //Adding a footnote label, which will add an anchor containing the selected text
  label: ({node, children, text, key}) => {
    if (node.data.label === "footnote") {
      return (
        <a href={"#"+text} key={key} className={node.data.label}>
          <sup>
            {text}
          </sup>
        </a>);
    }
  },
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}