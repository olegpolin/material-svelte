export type TocEntry = {
  title: string;
  url: string;
  depth: number;
};

export type Toc = {
  entries: TocEntry[];
  headingIds: string[];
};

// Single regex matches either a code-fence line (group 1) or a heading line
// (groups 2 + 3) at line starts. Non-heading/non-fence lines are skipped by
// the regex engine, so we never allocate per-line substrings.
const HEADING_OR_FENCE_RE = /^(?:(\s*(?:```|~~~))|(#{1,6})\s+(.+?)(?:\s+#+)?)\r?$/gm;

function sanitizeTitle(raw: string): string {
  return raw
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_]{1,3}(.*?)[*_]{1,3}/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+\{#[^}]+\}\s*$/, '')
    .trim();
}

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

function stripFrontmatter(markdown: string): string {
  if (!/^---\r?\n/.test(markdown)) return markdown;
  const close = markdown.indexOf('\n---', 4);
  if (close === -1) return markdown;
  let end = close + 4;
  if (markdown[end] === '\r') end++;
  if (markdown[end] === '\n') end++;
  return markdown.slice(end);
}

export function generateToc(markdown: string): Toc {
  const body = stripFrontmatter(markdown);
  const counts = new Map<string, number>();
  const entries: TocEntry[] = [];
  const headingIds: string[] = [];
  const depthStack: number[] = [];
  let inFence = false;

  HEADING_OR_FENCE_RE.lastIndex = 0;
  for (let m: RegExpExecArray | null; (m = HEADING_OR_FENCE_RE.exec(body)) !== null; ) {
    if (m[1] !== undefined) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const headingDepth = m[2].length;
    const title = sanitizeTitle(m[3]);
    const baseSlug = slugifyTitle(title);
    if (!baseSlug) continue;

    const count = counts.get(baseSlug) ?? 0;
    counts.set(baseSlug, count + 1);
    const id = count === 0 ? baseSlug : `${baseSlug}-${count}`;
    headingIds.push(id);

    while (depthStack.length > 0 && depthStack[depthStack.length - 1] >= headingDepth) {
      depthStack.pop();
    }
    entries.push({ title, url: `#${id}`, depth: depthStack.length });
    depthStack.push(headingDepth);
  }

  return { entries, headingIds };
}
