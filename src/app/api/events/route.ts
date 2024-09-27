import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiRes = await fetch("https://api.lu.ma/public/v1/calendar/list-events", {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-luma-api-key": process.env.LUMA_API_KEY as string,
      },
    });
    if (!apiRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await apiRes.json();
    const now = new Date();
    const filteredEvents = data.entries.filter((entry: any) => new Date(entry.event.start_at) > now);

    return NextResponse.json(filteredEvents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}