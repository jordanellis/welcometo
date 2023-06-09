import ConstructionIcon from "@mui/icons-material/Construction";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import ParkIcon from "@mui/icons-material/Park";
import PoolIcon from "@mui/icons-material/Pool";
import { Effect } from "./effect";
import CandyCornIcon from "./CandyCornIcon";
import GhostIcon from "./GhostIcon";
import LightsIcon from "./LightsIcon";
import EasterIcon from "./EasterIcon";
import IceCreamIcon from "./IceCreamIcon";

export interface GameCard {
  number: number;
  effect: Effect;
}

export interface BonusCard {
  requirements: Requirement[];
  first_points: number;
  other_points: number;
  completed: boolean;
}

export interface AdvancedBonusCard {
  requirement: string;
  first_points: number;
  other_points: number;
  completed: boolean;
  icon?: React.FC;
}

export interface Requirement {
  [size: string]: number;
}

export const DECK: GameCard[] = [
  { number: 7, effect: Effect.Real_Estate_Agent },
  { number: 10, effect: Effect.Pool_Manufacturer },
  { number: 6, effect: Effect.Temp_Agency },
  { number: 5, effect: Effect.Surveyor },
  { number: 1, effect: Effect.Surveyor },
  { number: 12, effect: Effect.Landscaper },
  { number: 13, effect: Effect.Temp_Agency },
  { number: 8, effect: Effect.Surveyor },
  { number: 1, effect: Effect.Real_Estate_Agent },
  { number: 9, effect: Effect.Surveyor },
  { number: 5, effect: Effect.Landscaper },
  { number: 9, effect: Effect.Landscaper },
  { number: 3, effect: Effect.Bis },
  { number: 7, effect: Effect.Surveyor },
  { number: 11, effect: Effect.Landscaper },
  { number: 2, effect: Effect.Landscaper },
  { number: 8, effect: Effect.Temp_Agency },
  { number: 5, effect: Effect.Real_Estate_Agent },
  { number: 5, effect: Effect.Surveyor },
  { number: 10, effect: Effect.Temp_Agency },
  { number: 13, effect: Effect.Pool_Manufacturer },
  { number: 7, effect: Effect.Pool_Manufacturer },
  { number: 6, effect: Effect.Surveyor },
  { number: 7, effect: Effect.Landscaper },
  { number: 11, effect: Effect.Surveyor },
  { number: 9, effect: Effect.Temp_Agency },
  { number: 4, effect: Effect.Real_Estate_Agent },
  { number: 4, effect: Effect.Bis },
  { number: 6, effect: Effect.Bis },
  { number: 13, effect: Effect.Bis },
  { number: 4, effect: Effect.Landscaper },
  { number: 8, effect: Effect.Landscaper },
  { number: 14, effect: Effect.Landscaper },
  { number: 9, effect: Effect.Landscaper },
  { number: 9, effect: Effect.Bis },
  { number: 6, effect: Effect.Real_Estate_Agent },
  { number: 12, effect: Effect.Pool_Manufacturer },
  { number: 9, effect: Effect.Real_Estate_Agent },
  { number: 2, effect: Effect.Real_Estate_Agent },
  { number: 15, effect: Effect.Real_Estate_Agent },
  { number: 7, effect: Effect.Landscaper },
  { number: 3, effect: Effect.Surveyor },
  { number: 8, effect: Effect.Surveyor },
  { number: 10, effect: Effect.Bis },
  { number: 11, effect: Effect.Landscaper },
  { number: 6, effect: Effect.Landscaper },
  { number: 14, effect: Effect.Surveyor },
  { number: 8, effect: Effect.Bis },
  { number: 15, effect: Effect.Landscaper },
  { number: 7, effect: Effect.Bis },
  { number: 10, effect: Effect.Surveyor },
  { number: 4, effect: Effect.Pool_Manufacturer },
  { number: 15, effect: Effect.Surveyor },
  { number: 10, effect: Effect.Landscaper },
  { number: 5, effect: Effect.Real_Estate_Agent },
  { number: 7, effect: Effect.Real_Estate_Agent },
  { number: 2, effect: Effect.Surveyor },
  { number: 7, effect: Effect.Temp_Agency },
  { number: 9, effect: Effect.Real_Estate_Agent },
  { number: 1, effect: Effect.Landscaper },
  { number: 12, effect: Effect.Temp_Agency },
  { number: 8, effect: Effect.Landscaper },
  { number: 13, effect: Effect.Surveyor },
  { number: 9, effect: Effect.Pool_Manufacturer },
  { number: 6, effect: Effect.Surveyor },
  { number: 3, effect: Effect.Pool_Manufacturer },
  { number: 11, effect: Effect.Real_Estate_Agent },
  { number: 8, effect: Effect.Pool_Manufacturer },
  { number: 6, effect: Effect.Pool_Manufacturer },
  { number: 11, effect: Effect.Real_Estate_Agent },
  { number: 3, effect: Effect.Temp_Agency },
  { number: 4, effect: Effect.Temp_Agency },
  { number: 8, effect: Effect.Real_Estate_Agent },
  { number: 11, effect: Effect.Surveyor },
  { number: 5, effect: Effect.Landscaper },
  { number: 14, effect: Effect.Real_Estate_Agent },
  { number: 12, effect: Effect.Real_Estate_Agent },
  { number: 8, effect: Effect.Real_Estate_Agent },
  { number: 12, effect: Effect.Bis },
  { number: 10, effect: Effect.Real_Estate_Agent },
  { number: 10, effect: Effect.Surveyor },
];

export const n1: BonusCard[] = [
  {
    requirements: [{ "1": 6 }],
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirements: [{ "4": 2 }],
    first_points: 6,
    other_points: 3,
    completed: false,
  },
  {
    requirements: [{ "3": 3 }],
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirements: [{ "5": 2 }],
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirements: [{ "2": 4 }],
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirements: [{ "6": 2 }],
    first_points: 10,
    other_points: 6,
    completed: false,
  },
];

export const n2: BonusCard[] = [
  {
    requirements: [{ "1": 3 }, { "6": 1 }],
    first_points: 11,
    other_points: 6,
    completed: false,
  },
  {
    requirements: [{ "4": 1 }, { "1": 3 }],
    first_points: 9,
    other_points: 5,
    completed: false,
  },
  {
    requirements: [{ "3": 1 }, { "6": 1 }],
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirements: [{ "4": 1 }, { "5": 1 }],
    first_points: 9,
    other_points: 5,
    completed: false,
  },
  {
    requirements: [{ "3": 2 }, { "4": 1 }],
    first_points: 12,
    other_points: 7,
    completed: false,
  },
  {
    requirements: [{ "5": 1 }, { "2": 2 }],
    first_points: 10,
    other_points: 6,
    completed: false,
  },
];

export const n3: BonusCard[] = [
  {
    requirements: [{ "2": 1 }, { "3": 1 }, { "5": 1 }],
    first_points: 13,
    other_points: 7,
    completed: false,
  },
  {
    requirements: [{ "1": 1 }, { "2": 2 }, { "3": 1 }],
    first_points: 11,
    other_points: 6,
    completed: false,
  },
  {
    requirements: [{ "1": 1 }, { "4": 1 }, { "5": 1 }],
    first_points: 13,
    other_points: 7,
    completed: false,
  },
  {
    requirements: [{ "3": 1 }, { "4": 1 }],
    first_points: 7,
    other_points: 3,
    completed: false,
  },
  {
    requirements: [{ "1": 1 }, { "2": 1 }, { "6": 1 }],
    first_points: 12,
    other_points: 7,
    completed: false,
  },
  {
    requirements: [{ "2": 1 }, { "5": 1 }],
    first_points: 7,
    other_points: 3,
    completed: false,
  },
];

export const n1advanced: AdvancedBonusCard[] = [
  {
    requirement: "The first and last house of each street must be built",
    first_points: 7,
    other_points: 4,
    completed: false,
  },
  {
    requirement: "All 10 houses must be built on the 1st street",
    first_points: 6,
    other_points: 3,
    completed: false,
  },
  {
    requirement: "All 12 houses must be built on the 1st street",
    first_points: 8,
    other_points: 4,
    completed: false,
  },
  {
    requirement: "5 «bis» must be built on the same street",
    first_points: 8,
    other_points: 3,
    completed: false,
    icon: MarkunreadMailboxIcon,
  },
  {
    requirement: "7 temps must be used",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: ConstructionIcon,
  },
];

export const n2advanced: AdvancedBonusCard[] = [
  {
    requirement: "All Parks and Pools must be built on the 2nd street",
    first_points: 8,
    other_points: 3,
    completed: false,
    icon: ParkIcon,
  },
  {
    requirement: "Two streets must have all of the Parks built",
    first_points: 7,
    other_points: 4,
    completed: false,
    icon: ParkIcon,
  },
  {
    requirement: "Two streets must have all of the Pools built",
    first_points: 7,
    other_points: 4,
    completed: false,
    icon: PoolIcon,
  },
  {
    requirement: "All Parks and Pools must be built on the 3rd street",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: ParkIcon,
  },
  {
    requirement:
      "One roundabout, all Pools, and all Parks must be built on one street",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: ParkIcon,
  },
];

export const n3spring: AdvancedBonusCard[] = [
  {
    requirement: "Collect all Easter Eggs on the 3rd street",
    first_points: 7,
    other_points: 3,
    completed: false,
    icon: EasterIcon,
  },
  {
    requirement: "Build three 3-house estates with three eggs in them",
    first_points: 8,
    other_points: 4,
    completed: false,
    icon: EasterIcon,
  },
  {
    requirement:
      "Build one 2-house, 3-house, and 4-house estates with no Easter Eggs in them",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: EasterIcon,
  },
];

export const n3summer: AdvancedBonusCard[] = [
  {
    requirement: "Sell all the ice cream cones in one street",
    first_points: 6,
    other_points: 4,
    completed: false,
    icon: IceCreamIcon,
  },
  {
    requirement:
      "Build three 4-house estates with three ice cream cones sold in it",
    first_points: 8,
    other_points: 4,
    completed: false,
    icon: IceCreamIcon,
  },
  {
    requirement:
      "Build one 3-house, 4-house, and 5-house estates without any ice cream cones sold",
    first_points: 7,
    other_points: 3,
    completed: false,
    icon: IceCreamIcon,
  },
];

export const n3halloween: AdvancedBonusCard[] = [
  {
    requirement: "Collect 7 candies",
    first_points: 7,
    other_points: 3,
    completed: false,
    icon: CandyCornIcon,
  },
  {
    requirement: "Build three 3-house estates with 1 ghost and 1 candy each",
    first_points: 8,
    other_points: 4,
    completed: false,
    icon: CandyCornIcon,
  },
  {
    requirement: "Collect all the ghosts on the 3rd street",
    first_points: 7,
    other_points: 3,
    completed: false,
    icon: GhostIcon,
  },
];

export const n3winter: AdvancedBonusCard[] = [
  {
    requirement: "Must have two 6-house estates with consecutive numbers",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: LightsIcon,
  },
  {
    requirement: "All houses on one street must have consecutive numbers",
    first_points: 14,
    other_points: 7,
    completed: false,
    icon: LightsIcon,
  },
  {
    requirement: "Must have two 3-house estates without any string of lights",
    first_points: 10,
    other_points: 5,
    completed: false,
    icon: LightsIcon,
  },
];
