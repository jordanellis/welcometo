import { SvgIconProps } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import FenceIcon from "@mui/icons-material/Fence";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import ParkIcon from "@mui/icons-material/Park";
import PoolIcon from "@mui/icons-material/Pool";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export enum Effect {
  Landscaper,
  Surveyor,
  Real_Estate_Agent,
  Pool_Manufacturer,
  Temp_Agency,
  Bis,
}

export const EFFECT_ICON_MAP = new Map<
  Effect,
  React.ReactElement<SvgIconProps>
>([
  [
    Effect.Landscaper,
    <ParkIcon sx={{ color: "#178735", fontSize: "5.5rem" }} />,
  ],
  [
    Effect.Surveyor,
    <FenceIcon sx={{ color: "#b0b0b0", fontSize: "5.5rem" }} />,
  ],
  [
    Effect.Real_Estate_Agent,
    <TrendingUpIcon sx={{ color: "#c23fd1", fontSize: "5.5rem" }} />,
  ],
  [
    Effect.Pool_Manufacturer,
    <PoolIcon sx={{ color: "#2f9ac4", fontSize: "5.5rem" }} />,
  ],
  [
    Effect.Temp_Agency,
    <ConstructionIcon sx={{ color: "#eb7734", fontSize: "5.5rem" }} />,
  ],
  [
    Effect.Bis,
    <MarkunreadMailboxIcon sx={{ color: "#e03838", fontSize: "5.5rem" }} />,
  ],
]);

export const EFFECT_LARGE_ICON_MAP = new Map<
  Effect,
  React.ReactElement<SvgIconProps>
>([
  [
    Effect.Landscaper,
    <ParkIcon sx={{ color: "#178735", fontSize: "10rem" }} />,
  ],
  [Effect.Surveyor, <FenceIcon sx={{ color: "#b0b0b0", fontSize: "10rem" }} />],
  [
    Effect.Real_Estate_Agent,
    <TrendingUpIcon sx={{ color: "#c23fd1", fontSize: "10rem" }} />,
  ],
  [
    Effect.Pool_Manufacturer,
    <PoolIcon sx={{ color: "#2f9ac4", fontSize: "10rem" }} />,
  ],
  [
    Effect.Temp_Agency,
    <ConstructionIcon sx={{ color: "#eb7734", fontSize: "10rem" }} />,
  ],
  [
    Effect.Bis,
    <MarkunreadMailboxIcon sx={{ color: "#e03838", fontSize: "10rem" }} />,
  ],
]);

export const EFFECT_MINI_ICON_MAP = new Map<
  Effect,
  React.ReactElement<SvgIconProps>
>([
  [Effect.Landscaper, <ParkIcon sx={{ color: "#178735" }} />],
  [Effect.Surveyor, <FenceIcon sx={{ color: "#b0b0b0" }} />],
  [Effect.Real_Estate_Agent, <TrendingUpIcon sx={{ color: "#c23fd1" }} />],
  [Effect.Pool_Manufacturer, <PoolIcon sx={{ color: "#2f9ac4" }} />],
  [Effect.Temp_Agency, <ConstructionIcon sx={{ color: "#eb7734" }} />],
  [Effect.Bis, <MarkunreadMailboxIcon sx={{ color: "#e03838" }} />],
]);
