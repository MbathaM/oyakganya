import { ImageResponse } from "next/og";

// Required metadata for Next.js to identify icon size and type
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Export default function returning an ImageResponse
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          //   background: "white", // optional background for better visibility
        }}
      >
        OCH
      </div>
    ),
    {
      ...size,
    }
  );
}
