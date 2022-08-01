export default function EcosystemNavbar({ name }: { name: string }) {
  return (
    <div className="p-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h3 className="text-3xl font-bold text-gray-800">{name}</h3>
        </div>
      </div>
    </div>
  );
}
