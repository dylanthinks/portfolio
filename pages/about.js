import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout about>
      <div>
        <h1 className='text-5xl md:text-8xl font-bold py-10 text-center md:text-left'>
          About
        </h1>
      </div>
      <section className='flex'>
        <div className='shrink w-1/3 bg-slate-300'>
          <div>
            <h3>Contact</h3>
            <p>Email me (link)</p>
          </div>
          <h3 className='font-bold'>Worked with</h3>
          <ul>
            <li>Abused Deaf Women's Advocacy Services</li>
            <li>CDK Global</li>
            <li>Gallaudet University</li>
            <li>SignVote, Communication Services for the Deaf</li>
            <li>Colorado Association of the Deaf</li>
          </ul>
        </div>
        <div className='grow w-2/3 bg-pink-300'>
          <p>right side</p>
          <image></image>
        </div>
      </section>
    </Layout>
  );
}
