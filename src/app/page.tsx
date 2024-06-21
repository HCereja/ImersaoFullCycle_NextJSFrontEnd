import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";
import Image from "next/image";

export async function getEvents(): Promise<EventModel[]> {
  const res = await fetch("http://localhost:8080/events", {
    cache: "no-store",
  });

  return (await res.json()).events;
}

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
