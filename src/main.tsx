import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Anchor, Badge, Button, Group, MantineProvider, Text, Title } from '@mantine/core';
import { theme, clipzyCssVariables } from './theme';
import '@mantine/core/styles.css';
import './styles.css';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
  </svg>;
}

function ClipIllustration() {
  return <div className="illustration" aria-hidden="true">
    <div className="diagram-label">A MOMENT. WORTH KEEPING.</div>
    <svg className="clip-diagram" viewBox="0 0 520 450" fill="none">
      <defs>
        <linearGradient id="frame-fill" x1="80" y1="80" x2="440" y2="330" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--clipzy-primary-light)" stopOpacity=".95" /><stop offset="1" stopColor="var(--clipzy-surface)" stopOpacity=".85" />
        </linearGradient>
        <pattern id="small-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" stroke="var(--clipzy-primary)" strokeOpacity=".12" />
        </pattern>
      </defs>
      <path d="M0 100H520M0 340H520M95 0V450M425 0V450" stroke="var(--clipzy-border)" strokeDasharray="3 6" />
      <path d="m115 83 310 48v206l-310-48z" fill="var(--clipzy-surface)" stroke="var(--clipzy-border-strong)" />
      <path d="m94 106 310 36v206L94 312z" fill="var(--clipzy-elevated)" stroke="var(--clipzy-primary-hover)" />
      <path d="M72 130h310v206H72z" fill="url(#frame-fill)" stroke="var(--clipzy-primary)" strokeWidth="1.5" />
      <path d="M72 130h310v206H72z" fill="url(#small-grid)" />
      <path d="M72 160h310M72 306h310" stroke="var(--clipzy-primary)" strokeOpacity=".5" />
      <circle cx="87" cy="145" r="2.5" fill="var(--clipzy-primary)" /><circle cx="98" cy="145" r="2.5" fill="var(--clipzy-primary)" fillOpacity=".45" /><circle cx="109" cy="145" r="2.5" fill="var(--clipzy-primary)" fillOpacity=".2" />
      <path d="m214 207 39 25-39 25z" fill="var(--clipzy-primary)" fillOpacity=".12" stroke="var(--clipzy-primary)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M92 179h15m-15 0v15m270-15h-15m15 0v15M92 287h15m-15 0v-15m270 15h-15m15 0v-15" stroke="var(--clipzy-primary)" />
      <path d="M88 321h144" stroke="var(--clipzy-border-strong)" strokeWidth="2" /><path d="M88 321h68" stroke="var(--clipzy-primary)" strokeWidth="2" /><circle cx="156" cy="321" r="3" fill="var(--clipzy-primary)" />
      <rect x="162" y="361" width="297" height="55" rx="2" fill="var(--clipzy-surface)" stroke="var(--clipzy-primary-hover)" />
      {Array.from({ length: 57 }, (_, i) => {
        const height = 6 + (Math.sin(i * 1.7) ** 2 * 18) + (Math.sin(i * .37) ** 2 * 10);
        return <path key={i} d={`M${172 + i * 4.95} ${388 - height / 2}v${height}`} stroke={i > 12 && i < 43 ? 'var(--clipzy-primary)' : 'var(--clipzy-border-strong)'} strokeWidth="1.7" />;
      })}
      <rect x="232" y="361" width="154" height="55" fill="var(--clipzy-primary)" fillOpacity=".06" stroke="var(--clipzy-primary)" />
      <path d="M232 378v20m154-20v20" stroke="var(--clipzy-primary)" strokeWidth="3" />
      <path d="M306 352v73" stroke="var(--clipzy-primary)" /><path d="m302 349 4 5 4-5z" fill="var(--clipzy-primary)" />
    </svg>
    <div className="diagram-caption"><span>CAPTURE THE GOOD PART.</span><span>KEEP THE FLOW. ↗</span></div>
  </div>;
}

function App() {
  return <MantineProvider theme={theme} cssVariablesResolver={clipzyCssVariables} forceColorScheme="dark">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="page-shell">
      <div className="grid-guides" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <header className="header">
        <Anchor href="./" className="brand" underline="never" aria-label="Clipzy home">
          <span className="brand-icon"><img src="./clipzy-logo.svg" width="32" height="32" alt="" /></span>
          <span>clipzy<span className="brand-dot">.</span></span>
        </Anchor>
        <Group gap="xl">
          <span className="header-note">Good things take a little building.</span>
          <Anchor className="header-contact" href="mailto:info@clipzy.tv" underline="never">Let’s talk <Arrow diagonal /></Anchor>
        </Group>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Badge className="status" variant="transparent" leftSection={<span className="status-dot" />}>Currently in development</Badge>
            <Title id="hero-title" order={1}>Great moments.<br /><span>Less friction.</span></Title>
            <Text className="hero-description">We’re building a <strong>high-performance<br className="desktop-break" /> clipping program.</strong> Made to keep up with you.</Text>
            <Text className="hero-subtext">A little more time in the making.<br />A lot more moments worth keeping.</Text>
            <Button component="a" href="mailto:info@clipzy.tv" size="lg" className="contact-button" rightSection={<Arrow />}>Get in touch</Button>
            <Anchor href="mailto:info@clipzy.tv" className="email-link" underline="hover">info@clipzy.tv</Anchor>
          </div>
          <ClipIllustration />
        </section>
        <section className="statement" aria-label="Our focus">
          <div className="section-index"><span className="blue-square" /> THE IDEA IS SIMPLE</div>
          <p>Stay in the moment.<br /><span>We’ll work on the clipping.</span></p>
          <span className="statement-mark" aria-hidden="true">↗</span>
        </section>
      </main>

      <footer className="footer">
        <Text className="copyright">© {new Date().getFullYear()} Clipzy</Text>
        <span className="footer-note">Built around the moments that matter.</span>
        <span className="coming-soon"><span className="status-dot" /> More soon</span>
      </footer>
    </div>
  </MantineProvider>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
