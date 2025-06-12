import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInformation() {
  return (
    <main className="font-[Poppins] px-6 py-8 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md w-full max-w-md md:max-w-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Contact Information
      </h2>

      <section className="flex items-start gap-3 mb-4">
        <MapPin className="w-5 h-5 mt-1 text-gray-600 dark:text-gray-300" />
        <p className="text-sm md:text-base leading-relaxed">
          Near Starmall, Putalisadak, Kathmandu, Nepal
        </p>
      </section>

      <section className="flex items-start gap-3 mb-4">
        <Phone className="w-5 h-5 mt-1 text-gray-600 dark:text-gray-300" />
        <a
          href="tel:+9779818085380"
          className="text-sm md:text-base hover:underline"
        >
          +977 981-8085380
        </a>
      </section>

      <section className="flex items-start gap-3">
        <Mail className="w-5 h-5 mt-1 text-gray-600 dark:text-gray-300" />
        <main>
          <a
            href="mailto:info@computerdurbar.com"
            className="text-sm md:text-base hover:underline break-all"
          >
            info@computerdurbar.com
          </a>
        </main>
      </section>
    </main>
  );
}
