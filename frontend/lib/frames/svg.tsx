import { join } from "path";
import fs from "fs";
import satori from "satori";

let londrinaSolidLight = fs.readFileSync(
  join(process.cwd(), "public/fonts", "LondrinaSolid-Light.ttf")
);
let londrinaSolidBlack = fs.readFileSync(
  join(process.cwd(), "public/fonts", "LondrinaSolid-Black.ttf")
);

let londrinaSolidThin = fs.readFileSync(
  join(process.cwd(), "public/fonts", "LondrinaSolid-Thin.ttf")
);

let londrinaSolidRegular = fs.readFileSync(
  join(process.cwd(), "public/fonts", "LondrinaSolid-Regular.ttf")
);

let SenVariableFont = fs.readFileSync(
  join(process.cwd(), "public/fonts", "Sen-VariableFont_wght.ttf")
);

export const generateFrameImage = async (
  data: { label: string; value: string }[]
) => {
  return await satori(
    <div
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: "3.5rem",
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      {data.map((d, index) => (
        <p key={index} style={{ fontSize: "2rem", color: "#000000" }}>
          {d.label !== "title" ? `${d.label}: ${d.value}` : `${d.value}`}
        </p>
      ))}
    </div>,
    {
      width: 955,
      height: 500,
      fonts: [
        {
          data: londrinaSolidLight,
          name: "Londrina Solid",
          style: "normal",
          weight: 300,
        },
        {
          data: londrinaSolidBlack,
          name: "Londrina Solid",
          style: "normal",
          weight: 900,
        },
        {
          data: londrinaSolidRegular,
          name: "Londrina Solid",
          style: "normal",
          weight: 400,
        },
        {
          data: londrinaSolidThin,
          name: "Londrina Solid",
          style: "normal",
          weight: 100,
        },
        {
          data: SenVariableFont,
          name: "Sen",
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
};
