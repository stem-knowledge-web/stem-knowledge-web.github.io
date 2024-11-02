// pages/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false, // Can also be set to true or 'blocking' if there are many pages
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content', slug + '.md'), 'utf-8');
  const { data, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: data,
      mdxSource,
    },
  };
}

export default function PostPage({ frontmatter, mdxSource }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <MDXRemote {...mdxSource} />
    </div>
  );
}
