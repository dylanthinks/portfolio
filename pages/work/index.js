import Layout from "../../components/layout";
import Image from "next/image";
import profile from "/public/profile.jpg";

export default function Work() {
  return (
    <Layout work>
      <section>
        <h1>Work</h1>
        {/* Grid starts here */}
        <div>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40'>
            {/* Single card */}
            <a href='/' className='w-full block shadow-2xl'>
              <div className='relative'>
                <Image
                  src={profile}
                  alt='Profile'
                  priority={true}
                  className=''
                  width={250}
                  height={375}
                />
                <h1 className=''>InSign</h1>
                <h1>01</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
