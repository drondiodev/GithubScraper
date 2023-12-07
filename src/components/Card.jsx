import CardDescription from "./card/CardDescription";
import CardTitle from "./card/CardTitle";

const Card = ({ title, description, language }) => {
  const includedFeatures = ["Info 1", "Info 2", "Info 3", "Info 4"];
  const people = [
    {
      name: "Drondiodev",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQG6Iv2lPjObfA/profile-displayphoto-shrink_800_800/0/1699959927154?e=1707350400&v=beta&t=q7W0u3U7Vl9Qy6wxN9o5V-lnPB5g5Qv_2lMoDQJhQ5I",
    },
  ];
  return (
    <div className="w-[80%] max-w-[900px]">
      {/* <div className="mx-auto max-w-2xl rounded-3xl shadow-2xl ring-1 ring-gray-200 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none"> */}
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          Nom du Repo
        </h3>
        {/* <CardTitle title={title} /> */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda.
        </p>
        {/* <CardDescription description={description} /> */}
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            Languages de prédilection :
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-30 w-30 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="mt-10 block w-full rounded-md bg-gray-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Accéder au Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
