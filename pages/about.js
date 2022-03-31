import Layout from "../components/layout";

export default function About() {
  return (
    <Layout about>
      <main className="container">
        <p>About page</p>
        <div>
          <h3 className="font-bold">Worked with</h3>
          <ul>
            <li>Abused Deaf Women's Advocacy Services</li>
            <li>CDK Global</li>
            <li>Gallaudet University</li>
            <li>SignVote, Communication Services for the Deaf</li>
            <li>Colorado Association of the Deaf</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
