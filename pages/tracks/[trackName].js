import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const tracksDir = path.join(process.cwd(), 'content', 'tracks');
  const trackDirs = fs.readdirSync(tracksDir);

  const paths = trackDirs.map(trackDir => ({
    params: { trackName: trackDir },
  }));

  return {
    paths,
    fallback: false, // Can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { trackName } = params;
  const chaptersDir = path.join(process.cwd(), 'content', 'tracks', trackName);
  const chapterFiles = fs.readdirSync(chaptersDir).filter(file => file.endsWith('.md'));

  const chapters = chapterFiles.map(file => {
    const filePath = path.join(chaptersDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title || file.replace('.md', ''),
      content: data,
    };
  });

  return {
    props: {
      trackName,
      chapters,
    },
  };
}

export default function TrackPage({ trackName, chapters }) {
  return (
    <Layout>
      <h1>{trackName}</h1>
      <h2>Chapters:</h2>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter.title}>
            <h3>{chapter.title}</h3>
          </li>
        ))}
      </ul>
    </Layout>
  );
}