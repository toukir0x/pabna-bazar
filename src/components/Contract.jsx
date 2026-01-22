

import { MapPin, Phone, User } from "lucide-react";


const Contract=() =>{
  const contacts = [
    { name: "Md Masud", phone: "01721935453" },
    { name: "Md Ashraful", phone: "01611274893" },
    { name: "Md Shihab", phone: "01316201001" },
    { name: "Md Tawhid", phone: "01701056372" },
  ];

  return (
    <>
      <section className="py-16 bg-zinc-200 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for any inquiries about our organic
              products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Address Card */}
            <div className=" border-gray-300  shadow-2xl hover:shadow-white transition-shadow">
              <div className="flex items-start gap-4 pt-6 p-2">
                <div className="h-9 w-9 rounded-full shrink-0 bg-orange-400/50 flex items-center justify-center ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-xl leading-relaxed">
                    Pallibiddut, Khathali, Bhaluka
                    <br />
                    Mymensingh, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Numbers Card */}
            <div className=" border-gray-300  shadow-2xl hover:shadow-white transition-shadow">
              <div className="flex p-6 items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Contact Numbers
                  </h3>
                  <div className="space-y-3">
                    {contacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <User className="h-6 w-6 text-gray-600" />
                        <div className="flex-1">
                          <p className="font-medium text-xl">
                            {contact.name}
                          </p>
                          <a
                            href={`tel:+88${contact.phone}`}
                            className="text-md  hover:underline!"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            {contacts.map((contact, index) => (
              <div key={index} className="hover:shadow-md transition-shadow">
                <div className="pt-4 pb-4 text-center">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <User className="h-8 w-8 text-neutral-600 " />
                  </div>
                  <p className="font-medium text-xl text-foreground mb-1">
                    {contact.name}
                  </p>
                  <a
                    href={`tel:+88${contact.phone}`}
                    className="text-lg text-blue-700! font-medium! hover:underline!"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Contract
