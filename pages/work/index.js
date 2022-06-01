import Layout from "../../components/Layout";

export default function Work() {
  return (
    <Layout work>
      <section className=''>
        <div className='max-w-4xl mx-auto h-48'>
          <h1 className='text-5xl md:text-8xl font-bold text-color-blue py-10 text-center md:text-left'>
            Work
          </h1>
        </div>
        {/* Grid starts here */}
        <div className=''>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40'>
            {/* Single card */}
            <a href='/' className='w-full block shadow-2xl'>
              <div className='relative overflow-hidden'>
                <img
                  src='../public/images/cad.JPG'
                  alt='portfolio'
                  className='transform hover:scale-125 transition duration-2000 ease-out'
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  InSign
                </h1>
                <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
                  01
                </h1>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
