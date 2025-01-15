import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to our blog! We are a team of passionate writers and
            creators dedicated to sharing insightful content with our readers.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/blog.png"
            alt="Our Team"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="text-center text-gray-600">
            Our team is composed of experienced professionals who are committed
            to delivering high-quality articles and resources.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Our mission is to provide valuable and engaging content that
            inspires and educates our readers.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            <li>Integrity</li>
            <li>Creativity</li>
            <li>Community</li>
            <li>Excellence</li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/website.png"
                alt="Team Member 1"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 text-gray-900 font-semibold">John Doe</p>
              <p className="text-gray-600">Editor-in-Chief</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/website.png"
                alt="Team Member 2"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 text-gray-900 font-semibold">Jane Smith</p>
              <p className="text-gray-600">Senior Writer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/website.png"
                alt="Team Member 3"
                width={150}
                height={150}
                className="rounded-full"
              />
              <p className="mt-2 text-gray-900 font-semibold">Alice Johnson</p>
              <p className="text-gray-600">Content Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
