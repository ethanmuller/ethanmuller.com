import React from "react"

import SEO from "../components/seo"

import Hyperlinks from "./Hyperlinks"
import SkillList from "./SkillList"

import Squeeze from "../components/Squeeze"
import Opts from "../components/Opts"

const socialLinks = [
  {
    title: 'instagram',
    href: 'https://instagram.com/emuuuuuuuuuuuuuuuuuuuuu',
  },
]

const IndexPage = () => (
  <>
    <SEO title="Ethan Muller's Website" />

    <main className="o-layout">
      
      <h1 className="hi">Hi I'm Ethan Muller</h1>
      <header className="a">
        <Squeeze>
          <p>Welcome to my web page.</p>
          <p>I love to use computers to make stuff. I like creating audiovisual things as well as software.</p>
          <div style={{'margin-top': '3em'}}>
            <Opts />
          </div>
          <p>- [ ] save color selection in localstorage</p>
        </Squeeze>
      </header>
      
      <h2 className="b">Hyper<wbr />links</h2>
      <div className="c">
        <Squeeze>
          <ul>
            {
            socialLinks.map(i => (
                <li>
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

          <h2 className="d skills">Skills</h2>
          
            <div className="e">
<SkillList />
</div>
      

      <footer className="bye">Bye I'm Ethan Muller</footer>
    </main>
  </>
)

export default IndexPage
