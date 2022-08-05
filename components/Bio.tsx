import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';
import ForzikReactImage from '../public/img/forzik-github.png';

export default function Bio() {
  useEffect(() => {
    const anonHeading = annotate(document?.querySelector('#name')!, {
      type: 'underline',
      color: 'orange',
    });
    anonHeading.show();
    annotate(document?.querySelector('#head')!, {
      type: 'underline',
      color: 'orange',
    }).show();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 mb-12 lg:py-12 lg:mb-12">
      <div className="col-span-4">
        <div className="mb-8">
          <Link href="https://github.com/Pagka/forzik">
            <a target="_blank">
              <Image
                src={ForzikReactImage}
                alt={"Forzik's profile picture"}
                className="rounded-xl"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-span-4"></div>
      <div className="col-span-4">
        <p className="mb-4 lg:mt-2">
          <span id="head">
            Since you are here, let me tell you what a little something!
          </span>
        </p>
        <p className="py-2">
          🇿🇼 Zimabwean startups have been facing a really big problem with
          processing local payments online. I personally believe that{' '}
          <Link href={'https://paynow.co.zw'}>
            <a className="font-bold">Paynow</a>
          </Link>{' '}
          <span className="font-medium">
            is at the core of the it, for every single one of all Zimbabwean
            Founders 🕵🏽‍♀️ 👨🏻‍⚕️ 👨🏾‍💻 👩🏾‍💻 🧑🏾‍🔧 🧑🏾‍🎓
          </span>{' '}
        </p>
        <p className="py-2">
          I know you are saying, &#39;Come on! Paynow? You&#39;re just gonna
          throw them under the bus like that?&#39;. Actually, you&#39;re most
          probably asking, &#39;Who is Paynow even?&#39;. Well, let me get you
          up to speed!{' '}
          <span className="itallic">
            Paynow is a Zimabwean based Digital Payments Processor, supporting
            VISA, MASTERCARD, EcoCash, OneMoney, ZIMSWITCH and Telecash(If its
            still a thing lol).
          </span>
          Truth is they are the only viable payment gateway for any startup that
          wants to support local payments on their platform.
        </p>
        <p className="py-2">
          Since they are the only service provider in this niche, they do not
          have incentive to innovate, or maybe they just do not want to.
          Whichever the case, the result is a 3-quarter backed platform with{' '}
          <span className="font-bold text-red-600">
            absolutely no regard for the Developer Experience.
          </span>
        </p>
        <p className="py-2">
          I have teamed up with a group of very intelligent individuals, from
          Zimbabwe and abroad, to address this problem.{' '}
          <span className="font-bold text-orange-500">Enter Forzik!</span> We
          are building Digital Payments Infrastructure that won&#39;t leave you
          questioning your purpose in life.{' '}
          <span className="font-bold text-orange-500">
            I am inviting you to join us in providing young Startups with the
            tools they need to thrive.
          </span>
        </p>
        <p className="pt-4">
          The Developer platform for Developers, by Developers! 🎉 🎉 🎉
        </p>
        <div className="py-4 mt-4">
          <p className="py-4 font-semibold text-gray-500 dark:text-gray-100">
            Tatenda Christopher Chinyamakobvu
            <br />
            <span id="name" className="font-medium">
              Halfstack Developer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
