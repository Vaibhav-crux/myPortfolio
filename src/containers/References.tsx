import { references } from '@/lib/content/references'; // Import the references data
import Image from 'next/image'; // Import Image from next/image

const References = () => {
  return (
    <section id="references" className="max-w-3xl py-32 mx-auto text-center">
      <h2 className="heading-secondary mb-12">References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((reference, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={reference.image}
              alt={reference.name}
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="italic mb-4">"{reference.quote}"</p>
            <h3 className="font-semibold text-lg">{reference.name}</h3>
            <p className="text-gray-500">{reference.profession}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
