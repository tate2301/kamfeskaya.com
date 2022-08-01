import EcosystemLayout from 'components/layouts/ecosystem';

export default function Shot() {
  return (
    <EcosystemLayout name="snip">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h2 className="max-w-2xl py-8 mx-auto text-4xl font-semibold text-gray-800 md:text-6xl">
          Beautiful code snippets for everyone.
        </h2>
        <p className="max-w-xl pb-4 text-xl font-medium text-gray-600">
          Take amazing screenshots of your code snippets to and flex on your
          developer friends.
        </p>
        <div className="flex items-center justify-center w-full gap-4 py-8">
          <div className="max-w-md mx-auto">
            <button className="w-full px-8 py-3 text-lg font-semibold bg-gray-800 border-2 rounded-full text-zinc-50 ">
              Launch app
            </button>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
