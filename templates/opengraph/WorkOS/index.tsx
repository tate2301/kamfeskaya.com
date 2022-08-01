import Image from 'next/image';
import Kamfeskaya from '../../../public/profile-pic.png';

export default function WorkOS() {
  return (
    <div className="container max-w-5xl p-4 mx-auto rounded-md">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="mb-4"></div>
          <div className="py-4">
            <p className="p-2 text-orange-600 bg-gray-200">Product</p>
            <p className="py-4">
              Getting Started with the WorkOS Multi-Factor Authentication API
            </p>
            <div className="flex">
              <div className="pr-4">
                <Image
                  src={Kamfeskaya}
                  alt="Kamfeskaya"
                  width={92}
                  height={92}
                />
              </div>
              <div>
                <p>Tatenda Chinyamakobvu </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1"
          style={{
            backgroundImage:
              'url(https://cdn.workos.com/www/open-graph/pattern.png)',
          }}
        ></div>
      </div>
    </div>
  );
}
