import Image from "next/image";
import React from "react";

type MessageItems = {
  title: string;
  body: string;
  icon: React.ReactElement;
};

interface Props {
  caption: string;
  title: string;
  body: string;
  image: string;
  messages: MessageItems[];
}

export default function ShowcasePanel({
  caption,
  title,
  body,
  image,
  messages,
}: Props) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* Text */}
              <p className="text-base font-semibold leading-7 text-red-600">
                {caption}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{body}</p>

              {/* Information Items Container*/}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {/* Information Item */}
                {messages.map((message, index) => (
                  <div className="relative pl-9" key={index}>
                    <dt className="inline font-semibold text-gray-900">
                      {message.icon}
                      {message.title}.
                    </dt>
                    <dd className="inline">{message.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Main image to showcase */}
          <Image
            src={image}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
