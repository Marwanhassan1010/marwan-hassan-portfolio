import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { projects, type Project } from './projects'
import './styles.css'

const github = 'https://github.com/Marwanhassan1010'
const linkedin = 'https://www.linkedin.com/in/marwan-hassan-a20a9b1a9'
const email = 'marwanramadan1608@gmail.com'
const path = location.pathname.replace(/\/$/, '')
const project = projects.find(item => path === '/projects/' + item.slug)
const missing = Boolean(path && !project)

function ThemeToggle() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme ?? 'dark')
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch {}
  }
  return <button className="theme" type="button" onClick={toggle}>
    <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
    <span className="sr-only">Use {theme === 'dark' ? 'light' : 'dark'} theme</span>
  </button>
}

function Header() {
  return <header className="shell header">
    <a className="skip" href="#main">Skip to content</a>
    <a className="brand" href="/" aria-label="Marwan Hassan, home">MH<span>.</span></a>
    <nav aria-label="Primary navigation">
      <a href="/#projects">Projects</a><a href="/#about">About</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a>
    </nav>
    <ThemeToggle />
  </header>
}

function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

function Illustration({ item }: { item: Project }) {
  return <div className={'illustration ' + item.slug} aria-hidden="true">
    <div className="diagram">{item.diagram.map(label => <span key={label}>{label}</span>)}</div>
  </div>
}

function ProjectCard({ item }: { item: Project }) {
  return <article className="card">
    <Illustration item={item} />
    <div className="card-body">
      <p className="eyebrow">{item.category}</p>
      <h3>{item.title}</h3><p>{item.summary}</p>
      <Tags items={item.technologies.slice(0, 4)} />
      <div className="card-links"><a className="text-link" href={'/projects/' + item.slug}>Read case study <span aria-hidden="true">↗</span><span className="sr-only"> for {item.title}</span></a>{item.repository && <a className="text-link" href={item.repository}>Source <span className="sr-only">for {item.title}</span></a>}</div>
    </div>
  </article>
}

function ContactLinks() {
  return <div className="flex flex-wrap gap-4">
    <a className="button primary" href={'mailto:' + email}>Email me <span aria-hidden="true">↗</span></a>
    <a className="button" href={linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
    <a className="button" href={github}>GitHub <span aria-hidden="true">↗</span></a>
  </div>
}

function Home() {
  useEffect(() => {
    const section = document.getElementById(location.hash.slice(1))
    section?.scrollIntoView({ behavior: 'instant' })
  }, [])
  return <main id="main" tabIndex={-1} className="shell">
    <section className="hero">
      <p className="eyebrow location">Alexandria, Egypt</p>
      <h1>Marwan Hassan<span>.</span></h1>
      <p className="role">Software Engineer <span>·</span> React &amp; TypeScript <span>·</span> Full-Stack Development</p>
      <p className="intro">I build web and mobile software with a focus on clear interfaces and reliable connections between the UI and the systems behind it.</p>
      <div className="flex flex-wrap gap-3"><a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a className="button" href="#contact">Get in touch</a></div>
    </section>
    <section id="projects" className="section">
      <p className="eyebrow">Portfolio</p><h2>Selected projects</h2>
      <div className="project-grid">{projects.map(item => <ProjectCard key={item.slug} item={item} />)}</div>
    </section>
    <section id="about" className="section profile">
      <div><p className="eyebrow">Background</p><h2>About me</h2></div>
      <div><p>I earned my BSc in Computer Engineering from the Arab Academy for Science, Technology and Maritime Transport in June 2025. My experience includes a client logistics website, independent mobile development and a graduation project with an interdisciplinary team.</p><p>I’m developing my frontend and full-stack skills through projects that connect interface design, application state and backend behavior.</p></div>
    </section>
    <section id="skills" className="section">
      <h2>Technical skills</h2>
      <dl className="skill-grid">
        <div><dt>Frontend</dt><dd>React, TypeScript, JavaScript, HTML, CSS, Flutter</dd></div>
        <div><dt>Backend</dt><dd>Node.js, Express, REST APIs</dd></div>
        <div><dt>Data</dt><dd>Hive, Firebase</dd></div>
        <div><dt>Developer tools</dt><dd>Git, GitHub</dd></div>
        <div><dt>Cybersecurity studies</dt><dd>Networking, security fundamentals, log analysis</dd></div>
      </dl>
    </section>
    <section id="contact" className="section contact"><h2>Get in touch</h2><p>For software engineering opportunities and project inquiries.</p><ContactLinks /></section>
  </main>
}

function CaseStudy({ item }: { item: Project }) {
  return <main id="main" tabIndex={-1} className="shell case">
    <a className="text-link" href="/#projects">← All projects</a>
    <p className="eyebrow">{item.category}</p><h1>{item.title}</h1><p className="intro">{item.summary}</p>
    <Tags items={item.technologies} />
    <figure><Illustration item={item} /><figcaption>{item.diagram.join(' → ')} · {item.slug === 'haf-freight' ? 'Request flow' : 'Project overview illustration'}</figcaption></figure>
    <p className="evidence">{item.evidence}</p>
    <div className="case-sections">{item.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
    {item.repository && <a className="button" href={item.repository}>View repository <span aria-hidden="true">↗</span></a>}
  </main>
}

if (project) {
  document.title = project.title + ' | Marwan Hassan'
  document.querySelector('meta[name="description"]')?.setAttribute('content', project.summary)
}
if (missing) document.title = 'Page not found | Marwan Hassan'

createRoot(document.getElementById('root')!).render(<>
  <Header />
  {project ? <CaseStudy item={project} /> : missing ? <main id="main" tabIndex={-1} className="shell hero"><h1>Page not found</h1><a className="button" href="/">Back to the portfolio</a></main> : <Home />}
  <footer className="shell footer"><span>Marwan Hassan</span><a href={github}>GitHub <span aria-hidden="true">↗</span></a></footer>
</>)
