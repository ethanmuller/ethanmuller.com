import React from "react"

import SEO from "../components/seo"

import work from "./links"
import Hyperlinks from "./Hyperlinks"
import Squeeze from "./Squeeze"

const socialLinks = [
  {
    title: 'twitter',
    href: 'https://twitter.com/ethanmuller',
  },
  {
    title: 'instagram',
    href: 'https://instagram.com/emuuuuuuuu',
  },
  {
    title: 'bandcamp',
    href: 'https://emuuu.bandcamp.com/releases',
  },
]

const liStyles = {
}

const IndexPage = () => (
  <>
    <SEO title="Ethan Muller's Website" />

    <main className="o-layout">
      
      <h1 className="hi">Hi I'm Ethan Muller</h1>
      <header className="a">
        <Squeeze>
          <p>Welcome to my web page.</p>
          <p>I’m a designer/developer.</p>
          <p>I’m interested in the space between design and development.</p>
          <p>I want to build fun and/or meaningful things.</p>
      </Squeeze>
      </header>
      
      <h2 className="b">Hyper<wbr />links</h2>
      <div className="c">
        <Squeeze>
          <Hyperlinks links={work} />
          <ul>
            {
              socialLinks.map(i => (
                <li style={liStyles}>
                  <a style={{
                     display: 'inline-block',
                     padding: '0.5rem 0.5rem  0.5rem 0',
                     }} href={i.href}>
                    {i.title}
                  </a>
                </li>
              ))
            }
</ul>
</Squeeze>

      </div>

      <h2 className="d">Skills</h2>
      <div className="e">asdf</div>

      <footer className="bye">Bye I'm Ethan Muller</footer>
    </main>
  </>
)

export default IndexPage
