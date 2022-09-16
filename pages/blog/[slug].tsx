/* eslint-disable jsx-a11y/alt-text */
import EcosystemLayout from 'components/layouts/reblur';
import { request } from 'lib/datocms';
import { formatDate } from 'lib/formatDate';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import { StructuredText, Image } from 'react-datocms';

export default function BlogPage({ subscription }: any) {
  const {
    data: { site, article },
  } = useQuerySubscription(subscription);

  const metaTags = article.seo.concat(site.favicon);

  return (
    <EcosystemLayout name="blog">
      <Head>{renderMetaTags(metaTags)}</Head>

      <div className="px-4 py-12">
        <p className="pb-2 font-medium text-orange-600">
          {formatDate(new Date().toDateString())}
        </p>
        <h1 className="max-w-2xl text-3xl font-bold lg:text-5xl text-radix-slate-slate12">
          {article.title}
        </h1>
        <div className="w-full h-auto py-8">
          <Image
            className="w-full h-auto"
            data={article.thumbnail.responsiveImage}
          />
        </div>
        <div className="prose prose-lg prose-blue">
          <StructuredText
            data={article.content}
            renderBlock={({ record }) => {
              if (record.__typename === 'ImageBlockRecord') {
                return <Image data={(record as any).image.responsiveImage} />;
              }

              return (
                <>
                  <p>Don&39;t know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
            }}
          />
        </div>
      </div>
    </EcosystemLayout>
  );
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allArticles { slug } }` } as any);

  return {
    paths: data.allArticles.map((article: any) => `/blog/${article.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: any;
  preview: boolean;
}) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          }
        }
        article(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
          title
          slug
          description
          content {
            value
            blocks
            }
        thumbnail {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, sat: -10}) {
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
        }

        morePosts: allArticles( first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          description
        }
      }

    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest as any),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest as any),
          },
      preview,
    },
  };
}
