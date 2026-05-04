import { createFileRoute } from "@tanstack/react-router";

const ALLOWED = new Set([
  "1qRasEQXQeXnEqsiZ_mSqKhCIsFk8fOWX",
  "1vRnaIohzItNYJA_Ld2bXpbMuLXy2LEYd",
  "1KMWEyeNC8mk8ec_rTZtGUs28poDNh_a3",
  "1Wg116mqF1VhAasqHMOz09HaNyL8PijUx",
  "1BFUylWvG353-g3wQuP0r990uZt0hIcct",
  "1tMjc4dvoJVfjAbyg2I6MRApenT1Mm3f5",
  "1IaKFVAgN2iO8wMpB0jKMtoYl-EiIHroV",
  "1Ow_MgWrwK9wHlBN17gsy7sTkgNNVaB82",
  "19StTNnS07SXnOq45D-DAn7oc9xATKrBE",
  "1FCZFlqOpsgalDvNBtHkT6gB3EH21d2na",
  "1ZlX2FfZC0vCfJ1kjtCRVUeMUcbCxisqx",
]);

async function handle({ request, params }: { request: Request; params: { id: string } }) {
  const id = params.id;
  if (!ALLOWED.has(id)) {
    return new Response("Not found", { status: 404 });
  }

  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
  if (!LOVABLE_API_KEY) return new Response("LOVABLE_API_KEY not configured", { status: 500 });
  if (!GOOGLE_DRIVE_API_KEY) return new Response("GOOGLE_DRIVE_API_KEY not configured", { status: 500 });

  const headers: Record<string, string> = {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GOOGLE_DRIVE_API_KEY,
  };
  const range = request.headers.get("range");
  if (range) headers["Range"] = range;

  const upstream = await fetch(
    `https://connector-gateway.lovable.dev/google_drive/drive/v3/files/${id}?alt=media`,
    { method: "GET", headers },
  );

  const respHeaders = new Headers();
  respHeaders.set("Content-Type", upstream.headers.get("content-type") ?? "video/mp4");
  const len = upstream.headers.get("content-length");
  if (len) respHeaders.set("Content-Length", len);
  const cr = upstream.headers.get("content-range");
  if (cr) respHeaders.set("Content-Range", cr);
  respHeaders.set("Accept-Ranges", "bytes");
  respHeaders.set("Cache-Control", "public, max-age=86400");

  return new Response(upstream.body, { status: upstream.status, headers: respHeaders });
}

export const Route = createFileRoute("/api/video/$id")({
  server: {
    handlers: {
      GET: handle,
      HEAD: handle,
    },
  },
});