import Layout from "../components/Layout";

export default function ComingSoon() {
  return (
    <Layout className='bg-white dark:bg-gray-800'>
      <div className='max-w-4xl mx-auto h-48 bg-white dark:bg-gray-800w'>
        <h1 className='text-5xl md:text-8xl font-bold text-color-blue py-20 text-center md:text-left'>
          Coming <br />
          Soon
        </h1>
      </div>
    </Layout>
  );
}
