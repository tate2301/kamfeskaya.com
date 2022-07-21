import { Banner, Bio, BlogPreview, PodcastPreview } from 'components';

export default function Main() {
  return (
    <div className="container px-4 mx-auto">
      <Banner />
      <Bio />
      <BlogPreview />
      <PodcastPreview />
    </div>
  );
}
