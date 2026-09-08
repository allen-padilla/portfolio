import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { Figure } from "@/components/mdx/Figure";
import { Gallery } from "@/components/mdx/Gallery";
import { Label } from "@/components/mdx/Label";
import { Stack } from "@/components/mdx/Stack";
import { Stats } from "@/components/mdx/Stats";
import { Video } from "@/components/mdx/Video";

const components = {
  Callout,
  Figure,
  Gallery,
  Label,
  Stack,
  Stats,
  Video,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
