import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const lat = "46.5547";
    const lon = "15.6467";
    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const res = await fetch(dailyUrl, {
      next: {
        revalidate: 900,
      },
    });

    const dailyData = await res.json();

    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error in getting daily data ");
    return new Response("Error in getting daily data", { status: 500 });
  }
}
