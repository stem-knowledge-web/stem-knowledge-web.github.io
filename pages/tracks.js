import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const tracksDir = path.join(process.cwd(), 'content', 'tracks');
  const trackDirs = fs.readdirSync(tracksDir);

  const tracks = trackDirs.map((trackDir, index) => {
    const chaptersDir = path.join(tracksDir, trackDir);
    const chapters = fs.readdirSync(chaptersDir).filter(file => file.endsWith('.md'));

    return {
      serialNumber: index + 1,
      trackName: trackDir,
      numberOfChapters: chapters.length,
    };
  });

  return {
    props: {
      tracks,
    },
  };
}

export default function Tracks({ tracks }) {
  return (
    <Layout>
      <h1>Learning Tracks</h1>
      <p>Explore various learning tracks below:</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Track Name</th>
            <th>Number of Chapters</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(({ serialNumber, trackName, numberOfChapters }) => (
            <tr key={trackName}>
              <td>{serialNumber}</td>
              <td>
                <Link href={`/tracks/${trackName}`}>
                  {trackName}
                </Link>
              </td>
              <td>{numberOfChapters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '0.5rem',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
  },
};