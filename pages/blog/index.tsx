// @ts-nocheck
import LatestPost from 'components/blog/LatestPost';
import BlogNavbar from 'components/nav/BlogNavbar';
import { request } from 'lib/datocms';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allArticles(first: $limit) {
    id
    title
    subtitle
    thumbnail {
      responsiveImage(imgixParams: { fit: crop, w: 1280, h: 700, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    _status
    _firstPublishedAt
  }

  _allArticlesMeta {
    count
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default function Blog({
  data,
}: {
  data: {
    allArticles: Array<{
      title: string;
      subtitle: string;
      thumbnail: {
        responsiveImage: any;
      };
    }>;
  };
}) {
  return (
    <div className="w-screen h-min-screen">
      <BlogNavbar />
      <div className="container py-12 mx-auto">
        <div className={data.allArticles.length > 0 ? 'pb-12' : ''}>
          <LatestPost {...data.allArticles[0]} />
        </div>
      </div>
      <div className="container pb-12 mx-auto">
        <h2 className="text-5xl font-medium text-gray-800 dark:text-gray-100">
          From The Reblur Kit
        </h2>
      </div>
    </div>
  );
}
