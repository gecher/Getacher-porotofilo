import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900 text-white">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-wide pb-4" data-aos="zoom-in-up">
        Welcome
      </h1>
      <div className="text-3xl sm:text-4xl text-yellow-400 pb-12" data-aos-delay="500" data-aos="zoom-in">
        <Typewriter
          options={{
            strings: [
              "✋ Hi, I'm Getacher Ashebir",
              "💻 Passionate Full-Stack 🌐 Developer",
              "✈️ Software Developer at Ethiopian Airlines",
              "📬 Let's connect! Reach me via email or LinkedIn 🤝",
            ],
            delay: 100,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
      </div>
      <button className="py-3 px-8 text-lg font-semibold border-2 border-blue-500 rounded-md hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-400 transition">
        <a href="#contact">Contact Me</a>
      </button>
    </section>
  );
}
