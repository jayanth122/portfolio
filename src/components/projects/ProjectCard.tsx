"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import type { Project } from "@/src/config/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasGithub = project.github.trim().length > 0;
  const hasLive = project.live.trim().length > 0;
  const maxVisibleTech = 4;
  const maxTechChars = 34;

  const visibleTech: string[] = [];
  let usedChars = 0;

  for (const tech of project.tech) {
    if (visibleTech.length >= maxVisibleTech) {
      break;
    }

    const nextCost = tech.length + (visibleTech.length > 0 ? 2 : 0);
    if (usedChars + nextCost > maxTechChars && visibleTech.length > 0) {
      break;
    }

    visibleTech.push(tech);
    usedChars += nextCost;
  }

  const hiddenTechCount = project.tech.length - visibleTech.length;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md">
        {/* Project image */}
        <div className="relative aspect-video w-full overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Hide broken images gracefully
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Placeholder gradient when no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/20">
              {project.title[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex flex-1 flex-col gap-3 pt-6">
          {/* Category badge */}
          <Badge variant="secondary" className="w-fit text-xs">
            {project.category}
          </Badge>

          <h3
            className="min-h-[2.75rem] line-clamp-2 text-base font-semibold leading-snug text-foreground"
            title={project.title}
          >
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground">
                +{hiddenTechCount}
              </span>
            )}
          </div>
        </CardContent>

        {/* Footer links */}
        {(hasGithub || hasLive) && (
          <CardFooter className="gap-2 pt-2">
            {hasGithub && project.github && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  Code
                </Link>
              </Button>
            )}
            {hasLive && project.live && (
              <Button asChild size="sm" className="flex-1">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </Link>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
