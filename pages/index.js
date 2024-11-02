import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontmatter: data,
    },
  };
}

export default function Home({ mdxSource, frontmatter }) {
  return (
    <Layout>
      <title>{frontmatter.title}</title>
      <MDXRemote {...mdxSource} />
    </Layout>
  );
}
