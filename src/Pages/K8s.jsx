import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Accordion from "react-bootstrap/Accordion";
import k8s_social from "../img/k8s_social.png";

function K8s() {
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
    >
      <Helmet>
        <title>K8s | Stenstromen.se</title>
        <meta property="og:image" content={k8s_social} />
        <meta property="og:image:width" content="228" />
        <meta property="og:image:height" content="221" />
      </Helmet>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>
              1.&nbsp;
              <u>Mastering Kubectl [kjub-cuttle]</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <em>Useful Shorthands and Timesavers</em>
            <br />
            <code>
              alias k=’kubectl’ <br />
              alias kga=’k get pods -A’ <br />
              alias ktopmem=’k top pods --sort-by memory’ <br />
              alias ktopcpu=’k top pods --sort-by cpu’ <br />
            </code>
            <br />
            <em>Fetch YAML</em>
            <br />
            <code>
              ~$ k get deployments.apps flowerapi -o yaml <br />
              <br />
              # To file <br />
              ~$ k get deployments.apps nchat -o yaml &gt; deployment.yaml{" "}
              <br />
            </code>
            <br />
            <em>Generate YAML</em>
            <br />
            <code>
              ~$ k create deployment frontend --image=nginx --dry-run=client
              --output=yaml <br />
              <br />
              # To file <br />
              ~$ k create deployment backend --image=mariadb --dry-run=client
              --output=yaml &gt; backend.yaml <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>
              2.&nbsp;
              <u>KubeContext</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <em>Context Switching - The Hard Way</em>
            <br />
            <code>
              ~$ k config get-contexts <br />
              … <br />
              ~$ k config use-context CONTEXT <br />
            </code>
            <br />
            <em>KubeCTX by ahmetb</em>
            <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/ahmetb/kubectx"
            >
              github.com/ahmetb/kubectx
            </a>
            <br />
            <code>
              ~$ brew install kubectx <br />
              <br />
              # Set default namespace for context <br />
              ~$ kubens miniomatic <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>
              3.&nbsp;<u>Kubecolor</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <em>KubeColor by hidetatz</em>
            <br />
            Kubectl in <span style={{ color: "black" }}>c</span>
            <span style={{ color: "blue" }}>o</span>
            <span style={{ color: "red" }}>l</span>
            <span style={{ color: "green" }}>o</span>
            <span style={{ color: "grey" }}>r</span> <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/hidetatz/kubecolor"
            >
              github.com/hidetatz/kubecolor
            </a>
            <br />
            <code>
              ~$ brew install hidetatz/tap/kubecolor <br />
              ~$ alias kubectl=’kubecolor’ <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <strong>
              4.&nbsp;<u>Kube Logs</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <em>Kubetail by johanhaleby</em>
            <br />
            <code>tail -f *.log</code> for Kubernetes
            <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/johanhaleby/kubetail"
            >
              github.com/johanhaleby/kubetail
            </a>
            <br />
            <code>~$ brew install johanhaleby/tap/kubetail</code>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <strong>
              5.&nbsp;<u>Krew Kubectl Plugins</u>
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <em>Neat</em>
            <br />
            <code>~$ kubectl krew install neat</code>
            <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/itaysk/kubectl-neat"
            >
              github.com/itaysk/kubectl-neat
            </a>
            <br />
            Remove clutter from Kubernetes manifests to make them more readable.
            <br />
            <br />
            <em>Ktop</em>
            <br />
            <code>~$ kubectl krew install ktop</code>
            <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/vladimirvivien/ktop"
            >
              github.com/vladimirvivien/ktop
            </a>
            <br />
            Displays useful metrics information about nodes, pods, and other
            workload resources running in a Kubernetes cluster.
            <br />
            <br />
            <em>Kopilot</em>
            <br />
            <code>~$ kubectl krew install kopilot</code>
            <br />
            <a
              target="_blank"
              rel="norefferer noreferrer"
              href="https://github.com/knight42/kopilot"
            >
              github.com/knight42/kopilot
            </a>
            <br />
            Your AI Kubernetes Expert <br />
            Uses GPT-3.5-turbo from OpenAI
            <br />
            <br />
            <em>Custom shorthand, “desc”</em>
            <br />
            <code>/usr/local/bin/kubectl-desc</code>
            <br />
            Shorthand for “describe”
            <br />
            Simple shell script
            <br />
            Only append “kubectl-” to custom script
            <br />
            <code>
              <br />
              #!/bin/sh
              <br />
              exec kubectl describe $@
              <br />
            </code>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </motion.div>
  );
}

export default K8s;
