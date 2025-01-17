
import ContactFrom from "./ContactFrom";

const Contact = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto py-16 px-5 lg:px-0">
        <h1 className="uppercase text-5xl mb-10">Contact</h1>
        <div className="flex justify-between flex-col md:flex-row items-start gap-16">
          <div className="space-y-5 ">
            <h1 className="text-2xl font-medium text-primary">
              ElevateSpaces Contact Information
            </h1>
            <hr className="border-t w-[280px] md:w-[320px] pb-2 border-primary h-2 dark:border-gray-700 my-4" />
            <h1 className="text-base">
              ElevateSpaces Meeting Room, <br />
              123 Innovation Avenue,
              <br /> Sylhet, Bangladesh.
            </h1>
            <h1 className="text-2xl text-primary">Email </h1>
            <hr className="border-t w-[60px] pb-2 border-primary h-2 dark:border-gray-700 my-4" />
            <p>contact@elevatespaces.com</p>
            <p className="text-2xl text-primary">Call Support </p>
            <hr className="border-t w-[130px] pb-2 border-primary h-2 dark:border-gray-700 my-4" />
            <p>+880 1234-567890</p>
            <h1>
              <p className="text-2xl text-primary ">Opening Hours</p>
              <hr className="border-t w-[150px] pb-2 border-primary h-2 dark:border-gray-700 my-4" />

              <p className="text-lg">
                {" "}
                <span className="font-bold">Monday to Friday : </span> 9:00 AM -
                6:00 PM
              </p>
              <p className="text-lg">
                Sunday:
                <span className="text-base text-red-500 font-bold">
                  {" "}
                  Closed
                </span>
              </p>
            </h1>
          </div>
          <div className="flex-1">
            <ContactFrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
