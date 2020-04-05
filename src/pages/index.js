import React from "react"

import SEO from "../components/seo"

const links = [
  {
    t: 'Goofball',
    h: 'https://goofball.fun',
    d: 'I made a mobile game. There’s not much to it yet, but it’s really fun to play with.',
  },
  {
    t: 'Pico-8 Carts',
    h: 'https://www.lexaloffle.com/bbs/?uid=12911',
    d: 'Little code experiments. You can view them in the browser. You can view the source code.',
  },
  {
    t: 'The Marvelous N-headed Beast',
    h: 'https://beast.ethanmuller.com',
    d: 'Let’s try to write a story together. Everybody sees the same words live. You can only say one word at a time.',
  },
  {
    t: 'bandcamp',
    h: 'https://emuuu.bandcamp.com/releases',
  },
  {
    t: 'twitter',
    h: 'https://twitter.com/ethanmuller',
  },
  {
    t: 'instagram',
    h: 'https://instagram.com/emuuuuuuuu',
  },
]

const Hyperlink = (props) => {
  return (
    <>
      <a href={props.item.h}>{props.item.t}</a>
      {props.item.d &&
        <small>{props.item.d}</small>
      }
    </>
  );
}

const Hyperlinks = (props) => {
  return (
    <ul>
      {links.map(item => (
        <li>
          <Hyperlink item={item} />
        </li>
      ))}
    </ul>
  )
}


const IndexPage = () => (
  <>
    <SEO title="Ethan Muller's Website" />

    <div className="o-layout">
      
      <h1 className="h1">Hi I'm Ethan Muller</h1>
      <header className="a">
        <div style={{maxWidth: '19em'}}>
          <p>Welcome to my web page.</p>
          <p>I’m a designer/developer.</p>
          <p>I’m interested in the space between design and development.</p>
          <p>I want to build fun and/or meaningful things.</p>
        </div>
      </header>
      
      <h2 className="b">Hyper<wbr />links</h2>
      <div className="c">
        <Hyperlinks />
      </div>

      <footer>Bye I'm Ethan Muller</footer>
    </div>
  </>
)

export default IndexPage
