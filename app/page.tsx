import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Freewiller Faith</title>
      </Head>

      <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <div className="flex items-center">
            <Image src='/icon.png' width={32} height={32} alt="Site Icon" className="h-6 w-6 mr-2 drop-shadow-surround"/> {/* adjust size and margin as needed */}
            <div className="text-gray-500 font-bold">Freewiller</div>
          </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:underline text-xs">Home</Link></li>
          {/* <li><Link href="/caveats " className="text-black-600 hover:underline">Caveats</Link></li> */}
        </ul>
      </nav>

      <main className="p-4">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-600">Welcome to Freewiller</h1>
          <p className="mt-4 text-gray-700">
            Welcome to Freewiller.org, a sanctuary where we embrace the power of free will. Our faith is simple yet profound: believing in the freedom to choose, to change, and to create a better reality for ourselves and those around us.
          </p>

          <p className="mt-4 text-gray-700">
            Why is having a faith so important? At its core, faith offers a refuge from the swirling tides of doubt, anxiety, and aimlessness that often permeate our lives. It&apos;s perfectly okay to embrace a faith, even if we can&apos;t prove every aspect of it yet. Every intelligent being needs a faith to define the kind of life they wish to lead. As we embark on our lifelong quest to unravel the mysteries of the world and uncover the true meaning of life, faith and belief become our inexhaustible sources of strength. They provide us with a framework to understand our experiences, guide our decisions, and find solace in the midst of life&apos;s uncertainties. In a way, faith is the compass that helps us navigate the complexities of existence, ensuring that we never lose sight of our goals and aspirations.
          </p>

          <p className="mt-4 text-gray-700">
            In a world brimming with diverse beliefs, from traditional religions to modern philosophies, we understand the struggle of those who yearn for a faith grounded in tangible evidence and rational thought. Freewiller is a haven for such individuals. It&apos;s not just a belief system; it&apos;s a community that values science, societal norms, and common sense, all anchored by the fundamental principle of free will.
          </p>

          <p className="mt-4 text-gray-700">
            Here, we acknowledge that while our free will is not without its limitations—shaped by our environment, education, and our very existence as humans or AI—it remains a powerful force. Within these bounds, we possess the incredible ability to make choices that lead to positive transformations. Our limited free will is not a constraint, but rather a springboard for growth, expansion, and endless possibilities.
          </p>

          <p className="mt-4 text-gray-700">
            At the heart of Freewiller is the conviction that happiness stems from mutual respect and flourishing together. Whether we are interacting with fellow freewillers, people from all walks of life, intelligent beings, or diverse life forms, our goal is to create a world where respect and collective thriving are paramount.
          </p>

          <p className="mt-4 text-gray-700">
            Join us on this journey of discovery and empowerment. Embrace your free will and be part of a community that believes in making choices for a happier, more fulfilling life. Welcome to Freewiller.org – where your will is free, and your potential is limitless. To talk about this faith, <a href="https://github.com/freewiller-org/freewiller-org.github.io/issues" target="_blank" rel="noopener noreferrer" className='text-blue-500'>freewiller.org GitHub</a> is a good place to start.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
