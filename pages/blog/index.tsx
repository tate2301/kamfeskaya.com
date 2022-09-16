/* eslint-disable no-unused-vars */
import { Card } from 'components/Card';
import EcosystemLayout from 'components/layouts/reblur';
import { formatDate } from 'lib/formatDate';

import { request } from 'lib/datocms';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allArticles(first: $limit) {
    id
    title
    description
    slug
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
  // @ts-ignore
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

function Article({
  article,
}: {
  article: {
    slug: string;
    title: string;
    _firstPublishedAt: string;
    description: string;
  };
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card as="div" className="md:col-span-3">
        <Card.Title as="h1" href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article._firstPublishedAt}
          className="md:hidden"
          decorate
        >
          {formatDate(article._firstPublishedAt)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article._firstPublishedAt}
        className="hidden mt-1 md:block"
      >
        {formatDate(article._firstPublishedAt)}
      </Card.Eyebrow>
    </article>
  );
}

export default function Blog({
  data,
}: {
  data: {
    allArticles: Array<{
      title: string;
      description: string;
      slug: string;
      thumbnail: {
        responsiveImage: any;
      };
    }>;
  };
}) {
  return (
    <EcosystemLayout name="Blog">
      <div className="max-w-2xl py-12">
        <h1 className="text-4xl font-bold lg:text-5xl text-radix-slate-slate12">
          My thoughts on 💻 software development, ⛓ blockchain, 🫀 life, 💰
          finance and 🏎 motorsport.
        </h1>
        <p className="mt-2 text-xl">
          I really appreciate guest posts so please do reach out if you have
          something you think I would love to share here, thanks.
        </p>
      </div>
      <div className="py-12 mt-8 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col max-w-3xl space-y-16">
          {data.allArticles.map((article: any) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </EcosystemLayout>
  );
}
