import Layout from "../components/layout";

export default function About() {
  return (
    <Layout about>
      <h1>About</h1>
      <section className='about'>
        <div className='contact'>
          <div>
            <h2>Contact</h2>
            <p>
              <a href='mailto:dylanthinks@gmail.com'>Email me</a>
            </p>
          </div>
          <div>
            <h2>Worked with</h2>
            <ul>
              <li>Abused Deaf Women's Advocacy Services</li>
              <li>CDK Global</li>
              <li>Gallaudet University</li>
              <li>SignVote, Communication Services for the Deaf</li>
              <li>Colorado Association of the Deaf</li>
            </ul>
          </div>
        </div>
        <div className='summary'>
          <p>right side</p>
        </div>
      </section>
    </Layout>
  );
}
