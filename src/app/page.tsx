import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";
import Image from "next/image";

export default function Home() {
  const events: EventModel[] = [
    {
      id: "1",
      name: "Show do Queen",
      organization: "Shows Inc.",
      date: "2022-01-01T00:00:00",
      price: 100,
      rating: "Livre",
      image_url: "",
      location: "São Paulo, SP",
    },
    {
      id: "2",
      name: "Show dos Barões da Pisadinha",
      organization: "Shows Inc.",
      date: "2022-01-01T00:00:00",
      price: 100,
      rating: "Livre",
      image_url: "",
      location: "São Paulo, SP",
    },
  ];

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
