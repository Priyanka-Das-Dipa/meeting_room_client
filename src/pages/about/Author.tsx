import author from "../../../public/author.jpeg";

const Author = () => {
  return (
    <div className="bg-[#f5f5f5]">

    <div className="container mx-auto py-16 h-[80vh] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <h1 className="text-primary text-3xl font-extrabold">About Our Founder</h1>
          <p className="mt-2 text-xl text-slate-400 font-semibold">Mister Bean</p>
          <p className="mt-4 font-medium">
            Mister Bean is the visionary founder and CEO of ElevateSpaces, a
            global hospitality company redefining how people meet, work, and
            gather. With a passion for blending innovation, design, and human
            connection, Mister Bean has been at the forefront of transforming
            traditional spaces into extraordinary experiences.
          </p>
          <p className="mt-4 font-medium">
            Under his leadership, ElevateSpaces has expanded to multiple
            locations globally, including its recent entry into Bangladesh,
            providing premium meeting, event, and flexible office solutions.
            This growth reflects his dedication to creating world-class
            environments that foster collaboration, creativity, and community.
          </p>
        </div>
        <img
          src={author}
          alt="Mister Bean"
          className="flex-1 h-[280px] w-[150px] bg-contain"
        />
      </div>
    </div>
    </div>
  );
};

export default Author;
