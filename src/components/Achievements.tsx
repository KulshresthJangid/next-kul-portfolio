import { achievements } from "../lib/data";

export default function Achievements() {
  return (
    <section className="bg-[#0f0f11] text-white px-8 sm:px-20 py-16 border-t border-gray-800">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
        Education & Achievements
      </h2>

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1d] border border-gray-700 hover:border-yellow-400 transition p-6 rounded-xl"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-yellow-300">{item.year}</span>
            </div>
            <p className="text-gray-400 mb-2">{item.institution}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {item.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
