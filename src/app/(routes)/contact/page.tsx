import Navbar from '@/components/layout/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact | Moperclub",

}

function ContactPage() {
 const servicesItems = ["Entertainment", "Clothing Style", "Accessories", "Partying"]
  return (
    <div>
      <Navbar />
        <main className="flex py-16">
            <div className="flex-1 hidden lg:block">
                <img alt="background" src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec" className="w-full h-screen object-cover rounded-e-2xl" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen ">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </h3>
                        <p className="mt-3">
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                    <form
                        // onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>AR</option>
                                        <option>CO</option>
                                        <option>US</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+54 911 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Services
                            </label>
                            <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                                {
                                    servicesItems.map((item, idx) => (
                                        <li key={idx} className="flex gap-x-3 text-sm">
                                            <div>
                                                <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />
                                                <label
                                                    htmlFor={`service-${idx}`}
                                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-orange-600 rounded-md border ring-offset-2 ring-orange-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                                >
                                                </label>
                                            </div>
                                            <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </div>
  );
}

export default ContactPage