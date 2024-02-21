import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Accordion from "react-bootstrap/Accordion";
import detblevingencd from "../img/detblevingencd.webp";
import hsts from "../img/hsts.png";
import cloudflarehsts from "../img/cloudflarehsts.png";
import cloudflaretls from "../img/cloudflaretls.png";

function DetBlevIngenCD() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <motion.div
      style={{
        overflowX: "hidden",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "2%",
        marginBottom: "2%",
      }}
      className="ContactContainer"
      initial={{ y: "+840px", opacity: 0 }}
      animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
      nonce="xVAsYVe6p2NlPv6L"
    >
      <Helmet>
        <title>Det Blev Ingen CD | Stenstromen.se</title>
        <meta property="og:image" content={detblevingencd} />
        <meta property="og:image:width" content="228" />
        <meta property="og:image:height" content="221" />
      </Helmet>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>
              1.&nbsp;
              <u>
                Lokaltidningsbesvikelse:n <i>Det Blev Ingen CD</i>
              </u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <b>Lokalnyheter?</b>
            <br />
            <p>Tidningsnotis, troligtvis från 2001, i Avesta Tidning.</p>
            <p>
              “En av de första Svenska virala fenomenen” (enligt Sveriges Radio)
            </p>
            <p>
              Väldigt liten och obetydlig samt “extremt lokal” nyhet blir
              välkänd
            </p>
            <p>Ikonisk bild tagen av samma lokalreporter, Thomas Ahlin</p>
            <br />
            <b>Vad är nyheten?</b>
            <br />
            <p>
              <b>En grå marsdag i Avesta i början av 2000-talet:</b> Några
              ungdomar har varit ute för att kolla på CD-skivor på lunchrasten,
              men det var stängt
            </p>
            <p>...</p>
            <p>Thats It</p>
            <img src={detblevingencd} alt="Det Blev Ingen CD" />
            <br />
            <br />
            <b>Utfall</b>
            <br />
            <p>2004, Webbsida det-blev-ingen-cd.com lanseras</p>
            <p>
              2018, Genomgick en refaktorering och vart Open Source
              <sup>
                <a href="#footnote1" id="ref1">
                  *
                </a>
              </sup>
            </p>
            <p>
              2019, En dokumentärfilm om nyheten släpps under hösten samma år
            </p>
            <p>2023, ;-)</p>
            <p id="footnote1">
              <sup>
                <a href="#ref1">*</a>
              </sup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/bombsimon/det-blev-ingen-cd.com"
              >
                github.com/bombsimon/det-blev-ingen-cd.com
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>
              2.&nbsp;
              <u>Cloudflare Pages</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <b>Cloudflare Pages</b>
            <br />
            <p>
              <i>Static Site Hosting</i>
            </p>
            <p>
              Stöd för de flesta Front-End ramverken (React, Vite, Svelte etc)
            </p>
            <p>Hanterar SSL/TLS (HTTPS) med tillhörande certifikat</p>
            <p>
              Andra alternativ: &#123;Cloudflare, GitHub, GitLab&#125; Pages,
              Netlify, Vercel etc
            </p>
            <br />
            <b>Cloudflare Pages, forts</b>
            <br />
            <p>
              Gömmer merparten av webbserver konfigurationen bakom ett fint
              gränssnitt
            </p>
            <p>
              Möjlighet att ändra inställningar kring SSL/TLS, Omdirigering,
              Rate limiting etc
            </p>
            <p>Custom domains</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>
              3.&nbsp;<u>Webbsäkerhet, vad och varför?</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <b>Webbsäkerhet, vad och varför?</b>
            <br />
            <p>HTTP Strict Transport Security (HSTS)</p>
            <p>Content Security Policy (CSP)</p>
            <p>Subresource Integrity (SRI)</p>
            <br />
            <b>HSTS</b>
            <br />
            <p>HTTP Header som tvingar browser anslutning över HTTPS</p>
            <p>Attribut som max-age, includeSubDomains och preload</p>
            <p>
              <i>
                Browser: Tillåt inget annat än https för domänen, kom ihåg det
                så här länge, applicera det också för alla mina subdomäner samt
                tillåt inläsning av detta i förväg.
              </i>
            </p>
            <p>Förinläst HSTS databas, hstspreload.org</p>
            <br />
            <img width={"100%"} src={hsts} alt="HSTS" />
            <br />
            <br />
            <b>CSP</b>
            <br />
            <p>HTTP Header som begränsar tillgången till webresurser</p>
            <p>
              Attribut som <i>&#123;style, script, img, connect&#125;-src</i>
            </p>
            <p>
              Browser:{" "}
              <i>
                Begränsa inläsningen av webresurserna enligt headern
                content-security-policy
              </i>
            </p>
            <p>
              Eventuella fel som browsern upptäcker kan rapporteras med
              report-to headern
            </p>
            <br />
            <code>
              default-src &apos;self&apos;; <br />
              connect-src &apos;self&apos; https://*.google-analytics.com;{" "}
              <br />
              script-src &apos;self&apos; https://www.googletagmanager.com
              &apos;sha256-MIxUxP1eI71+iIPFXEcZzdvb/Whmq+vPhAWxUfjTzOY=&apos;
              &apos;sha256-bUf9tVceFEfgLN9S61nbHttCZLlXubeFiaARwPWmgLo=&apos;;{" "}
              <br />
              style-src &apos;self&apos;
              &apos;sha256-XOyHuWE0UOp5Z40lP6GhS+bertK9G9ZvTLNyfBds1/I=&apos;
              https://cdnjs.cloudflare.com; <br />
              img-src &apos;self&apos;; <br />
              object-src &apos;none&apos;; <br />
              form-action &apos;self&apos;; <br />
              frame-ancestors &apos;none&apos;; <br />
              base-uri &apos;self&apos;; <br />
              font-src &apos;self&apos;; <br />
              media-src &apos;self&apos;; <br />
              frame-src &apos;self&apos;; <br />
              upgrade-insecure-requests; <br />
            </code>
            <br />
            <b>CSP, forts</b>
            <br />
            <p>
              Inline resurser, ex script och style, kan verifieras med hash
              eller nonce
            </p>
            <p>
              SHA&#123;256, 384, 512&#125; hash av innehållet i inline style
              eller script tag, ex
              &apos;sha256-MIxUxP1eI71+iIPFXEcZzdvb/Whmq+vPhAWxUfjTzOY=&apos;
            </p>
            <p>
              Nonce, Number Used Once, ett slumptal i CSP attributet som matchar
              slumptal i inline style eller script tag.
            </p>
            <p>
              Content-Security-Policy: script-src &apos;nonce-2726c7f26c&apos;;
            </p>
            <code>
              &lt;script nonce=&quot;2726c7f26c&quot;&gt;
              <br />
              const inline = 1; <br />
              … <br />
            </code>
            <br />
            <b>SRI</b>
            <br />
            <p>
              Validering av externa script och stylesheet (&lt;script&gt; ||
              &lt;link&gt;)
            </p>
            <p>
              Använder SHA hash precis som &#123;script, style&#125;-src i CSP
            </p>
            <p>Läggs till som Integrity attribut i taggen</p>
            <code>
              &lt;script
              <br />
              src=&quot;https://example.com/example-framework.js&quot; <br />
              integrity=&quot;sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7H…{" "}
              <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <strong>
              4.&nbsp;<u>Det Blev Ingen CD?</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <br />
            <p>Finns nu, med vettig domän, det-blev-ingen-cd.SE</p>
            <p>Hostad hos Cloudflare Pages</p>
            <p>Alla (nästan) tidigare nämnda säkerhetsfunktioner aktiverade</p>
            <p>
              Skriven i <i>Ren</i> HTML, CSS och Javascript
            </p>
            <br />
            <img width={"70%"} src={cloudflarehsts} alt="Cloudflare HSTS" />
            <br />
            <img width={"70%"} src={cloudflaretls} alt="Cloudflare TLS" />
            <br />
            <br />
            <b>./_headers</b>
            <br />
            <code>
              /&#x2A;
              <br />
              Content-Security-Policy: default-src &apos;self&apos;; <br />
              connect-src &apos;self&apos; https://*.google-analytics.com;{" "}
              <br />
              script-src &apos;self&apos; https://www.googletagmanager.com
              &apos;sha256-MIxUxP1eI71+iIPFXEcZzdvb/Whmq+vPhAWxUfjTzOY=&apos;
              &apos;sha256-bUf9tVceFEfgLN9S61nbHttCZLlXubeFiaARwPWmgLo=&apos;;{" "}
              <br />
              style-src &apos;self&apos;
              &apos;sha256-XOyHuWE0UOp5Z40lP6GhS+bertK9G9ZvTLNyfBds1/I=&apos;
              https://cdnjs.cloudflare.com; <br />
              img-src &apos;self&apos;; <br />
              object-src &apos;none&apos;; <br />
              form-action &apos;self&apos;; <br />
              frame-ancestors &apos;none&apos;; <br />
              base-uri &apos;self&apos;; <br />
              font-src &apos;self&apos;; <br />
              media-src &apos;self&apos;; <br />
              frame-src &apos;self&apos;; <br />
              upgrade-insecure-requests; <br />
              X-Frame-Options: DENY
              <br />
              X-XSS-Protection: 0<br />
              Referrer-Policy: no-referrer
              <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </motion.div>
  );
}

export default DetBlevIngenCD;
