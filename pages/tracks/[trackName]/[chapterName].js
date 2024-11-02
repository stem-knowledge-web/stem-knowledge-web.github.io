// pages/tracks/[trackName]/[chapterName].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const tracksDir = path.join(process.cwd(), 'content', 'tracks');
  const trackDirs = fs.readdirSync(tracksDir);
  const paths = [];

  for (const trackDir of trackDirs) {
    const chaptersDir = path.join(tracksDir, trackDir);
    const chapterFiles = fs.readdirSync(chaptersDir).filter(file => file.endsWith('.md'));

    chapterFiles.forEach(file => {
      const chapterName = file.replace('.md', '');
      paths.push({ params: { trackName: trackDir, chapterName } });
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { trackName, chapterName } = params;
  const filePath = path.join(process.cwd(), 'content', 'tracks', trackName, `${chapterName}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return {
    props: {
      trackName,
      chapterName,
      content,
      frontmatter: data,
    },
  };
}

export default function ChapterPage({ trackName, chapterName, content, frontmatter }) {
  return (
    <Layout>
      <h1>{frontmatter.title || chapterName}</h1>
      <div>
        <p>{content}</p> {/* Display the content of the chapter */}
      </div>
    </Layout>
  );
}
