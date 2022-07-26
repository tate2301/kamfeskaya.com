import EcosystemLayout from 'components/layouts/MarketingPageLayout';

export default function Contribute() {
  return (
    <EcosystemLayout name={'Contribute'}>
      <div className="px-3 py-8">
        <h2 className="max-w-3xl text-2xl font-medium lg:text-5xl text-slate-900">
          Contribute to Engineering Kit.
        </h2>
      </div>
      <div className="flex px-3 py-6">
        <iframe
          src="https://tally.so/embed/waQvk2?alignLeft=1&hideTitle=1&transparentBackground=1"
          width="100%"
          height="460"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contribute to Engineering Kit"
        />
      </div>
    </EcosystemLayout>
  );
}
