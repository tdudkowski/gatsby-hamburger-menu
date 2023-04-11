import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {

    return (<Layout>

<p>The simplest hamburger menu for Gatsby. Minimal (and described) presentation code, no distractions.</p>

<p>This is a demonstration site for a blog entry <a href="https://dygresje.info/blog/gatsby-menu/">"Gatsby cz. 8 - menu RWD z Hamburgerem"</a> in  <a href="https://dygresje.info/blog/gatsby/">Hello, Gatsby!</a> on my homesite.</p>

<h2>1. Requirements</h2>

<ul>
    <li>git</li>
    <li>npm</li>
    <li>gatsby-cli</li>
</ul>

<h2>2. TODO</h2>

<p>As usual `git clone` or manually in main app folder:</p>

<code>
<pre>
npm init -y<br />
git init<br />
npm i gatsby react react-dom<br />
npm i gatsby-plugin-styled-components styled-components babel-plugin-styled-components<br />
</pre>
</code>

<p>All files are in /src and main folder.</p>

<p>Contact by form on my homepage <a href="https://dygresje.info/kontakt/">dygresje,info / contact</a></p>

    </Layout>)

}

export default IndexPage