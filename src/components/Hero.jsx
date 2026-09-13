import profile from "../assets/henry.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center">
        <img
          src={profile}
          alt="Nduka Henry Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 object-cover"
        />

        <h1 className="text-5xl font-bold mt-6">
          Nduka <span className="text-cyan-400">Henry</span>
        </h1>

        <h2 className="text-2xl text-gray-300 mt-3">
            Software Engineer
        </h2>
        <p className="max-w-xl text-gray-400 mt-6 mx-auto">
          I create modern web applications, ecommerce platforms,
          business systems and digital solutions using React,
          Tailwind CSS, PHP, MySQL and APIs.
        </p>
      </div>
    </section>
  );
}