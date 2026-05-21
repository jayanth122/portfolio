"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { Boxes, FileJson, KanbanSquare, Network, Workflow } from "lucide-react";

type IconSource = {
  source: string;
  alt: string;
  title: string;
};

const DEVICON_MAP: Record<string, IconSource> = {
  "JavaScript (ES6+)": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "The logo icon for JavaScript",
    title: "JavaScript (ES6+)",
  },
  TypeScript: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "The logo icon for TypeScript",
    title: "TypeScript",
  },
  Python: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "The logo icon for Python",
    title: "Python",
  },
  Java: {
    source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "The logo icon for Java",
    title: "Java",
  },
  SQL: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    alt: "The logo icon for SQL",
    title: "SQL",
  },
  HTML5: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    alt: "The logo icon for HTML5",
    title: "HTML5",
  },
  CSS3: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    alt: "The logo icon for CSS3",
    title: "CSS3",
  },
  Bash: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    alt: "The logo icon for Bash",
    title: "Bash",
  },
  React: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "The logo icon for React",
    title: "React",
  },
  Angular: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    alt: "The logo icon for Angular",
    title: "Angular",
  },
  "Next.js": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "The logo icon for Next.js",
    title: "Next.js",
  },
  "Tailwind CSS": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    alt: "The logo icon for Tailwind CSS",
    title: "Tailwind CSS",
  },
  NgRx: {
    source: "https://cdn.simpleicons.org/ngrx",
    alt: "The logo icon for NgRx",
    title: "NgRx",
  },
  "Express.js": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "The logo icon for Express.js",
    title: "Express.js",
  },
  "Spring Boot": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    alt: "The logo icon for Spring Boot",
    title: "Spring Boot",
  },
  JUnit: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original-wordmark.svg",
    alt: "The logo icon for JUnit",
    title: "JUnit",
  },
  Jasmine: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original-wordmark.svg",
    alt: "The logo icon for Jasmine",
    title: "Jasmine",
  },
  Karma: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg",
    alt: "The logo icon for Karma",
    title: "Karma",
  },
  Pandas: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
    alt: "The logo icon for Pandas",
    title: "Pandas",
  },
  NumPy: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
    alt: "The logo icon for NumPy",
    title: "NumPy",
  },
  "Scikit-Learn": {
    source: "https://cdn.simpleicons.org/scikitlearn",
    alt: "The logo icon for Scikit-Learn",
    title: "Scikit-Learn",
  },
  Lombok: {
    source: "https://cdn.simpleicons.org/coffeescript",
    alt: "The logo icon for Lombok",
    title: "Lombok",
  },
  Git: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    alt: "The logo icon for Git",
    title: "Git",
  },
  Jenkins: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    alt: "The logo icon for Jenkins",
    title: "Jenkins",
  },
  Jira: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
    alt: "The logo icon for Jira",
    title: "Jira",
  },
  Confluence: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg",
    alt: "The logo icon for Confluence",
    title: "Confluence",
  },
  Postman: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    alt: "The logo icon for Postman",
    title: "Postman",
  },
  PyCharm: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    alt: "The logo icon for PyCharm",
    title: "PyCharm",
  },
  IntelliJ: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    alt: "The logo icon for IntelliJ",
    title: "IntelliJ",
  },
  Eclipse: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
    alt: "The logo icon for Eclipse",
    title: "Eclipse",
  },
  MongoDB: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "The logo icon for MongoDB",
    title: "MongoDB",
  },
  ANT: {
    source: "https://cdn.simpleicons.org/apacheant",
    alt: "The logo icon for Apache ANT",
    title: "ANT",
  },
  "Microsoft Azure": {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg",
    alt: "The logo icon for Microsoft Azure",
    title: "Microsoft Azure",
  },
  AWS: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "The logo icon for AWS",
    title: "AWS",
  },
  GCP: {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg",
    alt: "The logo icon for Google Cloud Platform",
    title: "GCP",
  },
};

const FALLBACK_ICON_MAP = {
  JSON: FileJson,
  "Microservices": Boxes,
  "REST APIs": Network,
  "CI/CD": Workflow,
  Kanban: KanbanSquare,
} as const;

export function TechStack() {
  // Duplicate the items to create a seamless infinite scroll
  const items = [...portfolio.techStack, ...portfolio.techStack];

  return (
    <section className="py-16 overflow-hidden border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Technologies I work with
        </motion.p>
      </div>

      {/* Scrolling strip */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-scroll flex gap-8 whitespace-nowrap">
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  const icon = DEVICON_MAP[name];
  const FallbackIcon = FALLBACK_ICON_MAP[name as keyof typeof FALLBACK_ICON_MAP];

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background shadow-sm transition-colors shrink-0"
      title={name}
    >
      {icon ? (
        <img
          src={icon.source}
          alt={icon.alt}
          title={icon.title}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      ) : FallbackIcon ? (
        <FallbackIcon className="h-5 w-5 text-foreground/80" aria-hidden="true" />
      ) : (
        <TechDot />
      )}
    </div>
  );
}

function TechDot() {
  return (
    <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
  );
}
