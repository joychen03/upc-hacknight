import mockAboutUs from "@/mock/about-us";

export default function AboutUsPage() {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-x-20 gap-y-4 m-10">
      {mockAboutUs.map((persona) => {
        return (
          <div key={persona.id}>
            <div className="flex-col border-4 border-teal-700 p-8 rounded-br-lg ${persona.isGay ? bg-teal-600 : bg-pink-500}">
              <div className="m-3 flex justify-center">
                <img src={persona.image} alt="foto de perfil" />
              </div>

              <div className="text-center ">
                <h2 className="px-4 py-2 text-lg text-white mb-4 drop-shadow-2xl font-bold">
                  {persona.name}
                </h2>
                <hr></hr>
                <h3 className="text-white">{persona.description}</h3>
                <hr></hr>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
