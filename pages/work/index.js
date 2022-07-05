import Layout from "../../components/Layout";
import Image from "next/image";
import profile from "/public/profile.jpg";

export default function Work() {
  return (
    <Layout work>
      <section className='bg-pink-300'>
        <h1 className='h1'>Work</h1>
        {/* Grid starts here */}
        <div className='bg-blue-200'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40'>
            {/* Single card */}
            <a href='/' className='w-full block shadow-2xl'>
              <div className='relative'>
                <Image
                  src={profile}
                  alt='Profile'
                  priority={true}
                  className='rounded-3xl hero-pattern shadow-md'
                  width={250}
                  height={375}
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  InSign
                </h1>
                <h1 className=' text-gray-50 font-bold text-xl'>01</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
