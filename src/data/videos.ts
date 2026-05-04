import vibeconemergentbts from "@/assets/videos/vibeconemergentbts.jpg";
import eros_now_collab from "@/assets/videos/eros_now_collab.jpg";
import basefirstdollar from "@/assets/videos/basefirstdollar.jpg";
import suncryptopromo from "@/assets/videos/suncryptopromo.jpg";
import stellarhackerhouse from "@/assets/videos/stellarhackerhouse.jpg";
import denovahackbts from "@/assets/videos/denovahackbts.jpg";
import scribble_bts from "@/assets/videos/scribble_bts.jpg";
import scribbleintro from "@/assets/videos/scribbleintro.jpg";
import ibw_demo2ndday from "@/assets/videos/ibw_demo2ndday.jpg";
import scribble_demo from "@/assets/videos/scribble_demo.jpg";
import aptoshackdemo from "@/assets/videos/aptoshackdemo.jpg";

export type VideoCategory = "events" | "editing" | "motion" | "experience";
export type VideoOrientation = "landscape" | "portrait";

export type VideoItem = {
  id: string;
  title: string;
  caption: string;
  category: VideoCategory;
  year: string;
  durationSec: number;
  poster: string;
  orientation: VideoOrientation;
  src: string;
};

const v = (
  id: string,
  title: string,
  caption: string,
  category: VideoCategory,
  year: string,
  durationSec: number,
  poster: string,
  orientation: VideoOrientation = "landscape",
): VideoItem => ({
  id,
  title,
  caption,
  category,
  year,
  durationSec,
  poster,
  orientation,
  src: `/api/video/${id}`,
});

export const videos: VideoItem[] = [
  // EVENTS — on-ground shoots & live event coverage
  v("1qRasEQXQeXnEqsiZ_mSqKhCIsFk8fOWX", "VibeCon · Emergent BTS", "Behind the scenes from the VibeCon × Emergent stage.", "events", "2025", 12, vibeconemergentbts),
  v("1vRnaIohzItNYJA_Ld2bXpbMuLXy2LEYd", "EROS Now Collab — Booth BTS", "On-floor capture of the EROS Now activation booth.", "events", "2025", 12, eros_now_collab),
  v("1BFUylWvG353-g3wQuP0r990uZt0hIcct", "Stellar Hacker House", "A hacker house weekend cut down to its loudest moments.", "events", "2025", 21, stellarhackerhouse),
  v("1tMjc4dvoJVfjAbyg2I6MRApenT1Mm3f5", "Denova Hack — BTS", "Builders, late nights and the rooms in between.", "events", "2025", 14, denovahackbts),
  v("1IaKFVAgN2iO8wMpB0jKMtoYl-EiIHroV", "Scribble — BTS", "Crew, cameras and the quiet seconds before a take.", "events", "2024", 12, scribble_bts),

  // EDITING — cinematic edits & promos
  v("1KMWEyeNC8mk8ec_rTZtGUs28poDNh_a3", "Base · First Dollar", "A short edit celebrating Base's first-dollar moment.", "editing", "2025", 36, basefirstdollar),
  v("1Wg116mqF1VhAasqHMOz09HaNyL8PijUx", "Sun Crypto · Brand Promo", "Promo edit, color-graded for a confident product story.", "editing", "2025", 35, suncryptopromo),
  v("1Ow_MgWrwK9wHlBN17gsy7sTkgNNVaB82", "Scribble · Intro", "A 16:9 intro cut framing the Scribble narrative.", "editing", "2024", 11, scribbleintro),

  // MOTION — vertical product / demo cuts with motion graphics
  v("1ZlX2FfZC0vCfJ1kjtCRVUeMUcbCxisqx", "Aptos Hack — Demo Reel", "Vertical demo with kinetic captions and motion overlays.", "motion", "2025", 24, aptoshackdemo, "portrait"),
  v("19StTNnS07SXnOq45D-DAn7oc9xATKrBE", "IBW · Demo · Day 02", "Live demo cut for India Blockchain Week, day two.", "motion", "2025", 14, ibw_demo2ndday, "portrait"),
  v("1FCZFlqOpsgalDvNBtHkT6gB3EH21d2na", "Scribble · Product Demo", "Portrait product walk-through, paced for social.", "motion", "2024", 15, scribble_demo, "portrait"),
];

export const byCategory = (c: VideoCategory) => videos.filter((x) => x.category === c);