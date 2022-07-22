import { Banner, Bio, BlogPreview, PodcastPreview } from 'components';
import Footer from 'components/nav/Footer';
import Navbar from 'components/nav/Navbar';
import ProjectsPreview from 'components/projects/Preview';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl px-4 mx-auto">
        <Banner />
        <Bio />
        <ProjectsPreview />
        <BlogPreview />
        <PodcastPreview />
      </div>
      <Footer />
    </div>
  );
}
