import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { Callout } from "@/components/mdx/Callout";
import { assertContentIntegrity, getCaseStudySlugs, getProject } from "@/lib/content";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  assertContentIntegrity();
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.external) return {};
  const description = project.description ?? project.summary;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description, type: "article", url: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.external) notFound();

  const [{ default: Body }, toc] = await Promise.all([
    import(`@/content/projects/${slug}.mdx`),
    extractToc(slug),
  ]);

  return (
    <main>
      <CaseStudyLayout toc={toc} header={<CaseStudyHeader project={project} />}>
        {project.confidential ? (
          <Callout title="Internal system">
            <p>
              This is an internal application. Details are generalized and no organizational data is
              shown.
            </p>
          </Callout>
        ) : null}
        <Body />
      </CaseStudyLayout>
    </main>
  );
}
