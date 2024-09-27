'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    messina_book,
    messina_bold,
} from '../../app/fonts';

type EventData = {
  api_id: string;
  event: {
    api_id: string;
    name: string;
    start_at: string;
    cover_url: string;
    geo_address_json: {
        full_address: string;
    };
    url: string;
  };
};

export const EventList = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data + "hi");
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-12 px-24 pb-12 w-full">
      {events.map(({ event, api_id }) => (
        <div key={api_id} className={`flex md:flex-row flex-col w-full md:space-x-20 md:space-y-0 space-y-12 md:items-center ${plus_jakarta_sans_regular.className}`}>
          <div className="relative md:w-[25%] w-full">
            <Image src={event.cover_url} alt={event.name} width={420} height={300} style={{
              objectFit: 'cover',
            }}/>
          </div>
          <div className="justify-center md:w-[50%] space-y-8 align-center items-center">
            <div className="space-y-2">
              <p className={`text-[32px] ${plus_jakarta_sans_medium.className}`}>
                {event.name}
              </p>
              <p className={`text-[18px] ${messina_bold.className}`}>
                {new Date(event.start_at).toLocaleString(undefined, {
                  month: "long",
                  day: "numeric",
                  timeZone: "America/New_York",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
              <p className={`text-[14px] ${messina_book.className}`}>
                {event.geo_address_json.full_address}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button href={event.url} variant="outline" className={`py-3 z-10 px-5 hover:text-black transition duration-500 ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
                <div className={`${messina_book.className} font-bold`}>
                  LEARN MORE {'>'}
                </div>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
