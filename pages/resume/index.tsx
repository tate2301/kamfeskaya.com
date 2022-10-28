import EcosystemLayout from 'components/layouts/MarketingPageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function InteractiveResume() {
  return (
    <EcosystemLayout name={'Resume'}>
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={'/profile-pic.png'}
          alt={"Tatenda's profile picture"}
          width={64}
          height={64}
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-medium text-slate-900">
            Tatenda Christopher Chinyamakobvu
          </h4>
          <p>Product Designer + Fullstack Developer</p>
        </div>
      </div>
      <div className="pt-12">
        <h1 className="mb-4 text-2xl font-medium text-slate-700">
          Work Experience
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">
              August 2022<span className="mx-2">-</span>now
            </div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-medium text-slate-700">
                    IndieHacker at Pacebar
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">
              Mar 2022<span className="mx-2">-</span>now
            </div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-medium text-slate-700">
                    Lead Engineer at TreatDAO
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">
              July 2021<span className="mx-2">-</span>now
            </div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-medium text-slate-700">
                    Freelance Engineer at Forge
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-4 md:gap-8">
            <div className="w-full flex-noshrink md:w-1/4">
              {' '}
              Oct 2019<span className="mx-2">-</span>Sept 2021
            </div>
            <div className="flex-1">
              <Link href={'/engineering/pacebar'}>
                <a>
                  <h5 className="mb-2 font-medium text-slate-700">
                    Product Designer at Techzim
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-24">
        <h2 className="text-2xl font-medium text-slate-900">
          Retainer Subscriptions
        </h2>
        <p>Choose a plan that is right for you.</p>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-1 border border-gray-200 rounded-xl">
            <div className="p-8">
              <h4 className="text-xl text-slate-900">$8000/mo</h4>
              <p className="mb-4 text-sm">Paid Monthly</p>
              <p className="text-lg">
                *Utilizing any of the services we provide
              </p>
            </div>
            <div className="p-4 py-8 border-t">
              <h4 className="mb-2 text-slate-900">Whats included:</h4>
              <ul>
                <li>Unlimited requests</li>
                <li>Unlimited team members</li>
                <li>Unlimited projects</li>
                <li>Up to 2 concurrent projects</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <p className="mt-4">
                <Link
                  className="mt-4"
                  href={
                    'mailto:tatendachris@gmail.com?subject=Project inquiry!'
                  }
                >
                  <a className="mt-4 font-medium text-orange-600">
                    Get started now
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-1 border border-gray-200 rounded-xl">
            <div className="px-8 py-8">
              <h4 className="text-xl text-slate-900">$12000/mo</h4>
              <p className="mb-4 text-sm">Paid Monthly</p>
              <p className="text-lg">
                *Utilizing any of the services we provide
              </p>
            </div>
            <div className="px-8 py-8 border-t">
              <h4 className="mb-2 text-slate-900">Whats included:</h4>
              <ul>
                <li>Unlimited requests</li>
                <li>Unlimited team members</li>
                <li>Unlimited projects</li>
                <li>Unlimited stock footage</li>
                <li>Unlimited brands</li>
                <li>Unlimited brand assets</li>
                <li>Up to 5 concurrent projects</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <p className="mt-4">
                <Link
                  className="mt-4"
                  href={
                    'mailto:tatendachris@gmail.com?subject=Project inquiry!'
                  }
                >
                  <a className="mt-4 font-medium text-orange-600">
                    Get started now
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-1 px-4 py-8">
            <h4 className="text-xl text-slate-900">
              Lets discuss your project
            </h4>
            <p className="mb-4">
              To make sure we are a perfect fit, lets jump onto a 10-minute call
              to make sure we are a best fit.
            </p>
            <Link
              href={'mailto:tatendachris@gmail.com?subject=Project inquiry!'}
            >
              <a className="font-medium text-orange-600">Book a call</a>
            </Link>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
