import { Button, Card, CardMedia, Divider, Grid, SvgIconProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import FenceIcon from '@mui/icons-material/Fence';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import ParkIcon from '@mui/icons-material/Park';
import PoolIcon from '@mui/icons-material/Pool';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from "@mui/system";

interface GameCard {
  "number": number
  "effect": Effect
}

interface BonusCard {
	"requirements": Requirement[]
	"first_points": number
	"other_points": number
	"completed": boolean
}

interface Requirement {
	[size: string]: number
}

enum Effect {
  Landscaper,
  Surveyor,
  Real_Estate_Agent,
  Pool_Manufacturer,
  Temp_Agency,
  Bis,
}

const EFFECT_ICON_MAP = new Map<Effect, React.ReactElement<SvgIconProps>>([
	[Effect.Landscaper, <ParkIcon sx={{ color: "#178735", fontSize: "6rem" }}/>],
	[Effect.Surveyor, <FenceIcon sx={{ color: "#d0d0d0", fontSize: "6rem" }}/>],
	[Effect.Real_Estate_Agent, <TrendingUpIcon sx={{ color: "#c23fd1", fontSize: "6rem" }}/>],
	[Effect.Pool_Manufacturer, <PoolIcon sx={{ color: "#2f9ac4", fontSize: "6rem" }}/>],
	[Effect.Temp_Agency, <ConstructionIcon sx={{ color: "#eb7734", fontSize: "6rem" }}/>],
	[Effect.Bis, <MarkunreadMailboxIcon sx={{ color: "#e03838", fontSize: "6rem" }}/>]
]);

const EFFECT_MINI_ICON_MAP = new Map<Effect, React.ReactElement<SvgIconProps>>([
	[Effect.Landscaper, <ParkIcon sx={{ color: "#178735" }}/>],
	[Effect.Surveyor, <FenceIcon sx={{ color: "#d0d0d0" }}/>],
	[Effect.Real_Estate_Agent, <TrendingUpIcon sx={{ color: "#c23fd1" }}/>],
	[Effect.Pool_Manufacturer, <PoolIcon sx={{ color: "#2f9ac4" }}/>],
	[Effect.Temp_Agency, <ConstructionIcon sx={{ color: "#eb7734" }}/>],
	[Effect.Bis, <MarkunreadMailboxIcon sx={{ color: "#e03838" }}/>]
]);

const DECK: GameCard[] = [
  {"number": 7, "effect": Effect.Real_Estate_Agent},
  {"number": 10, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Temp_Agency},
  {"number": 5, "effect": Effect.Surveyor},
  {"number": 1, "effect": Effect.Surveyor},
  {"number": 12, "effect": Effect.Landscaper},
  {"number": 13, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Surveyor},
  {"number": 1, "effect": Effect.Real_Estate_Agent},
  {"number": 9, "effect": Effect.Surveyor},
  {"number": 5, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Landscaper},
  {"number": 3, "effect": Effect.Bis},
  {"number": 7, "effect": Effect.Surveyor},
  {"number": 11, "effect": Effect.Landscaper},
  {"number": 2, "effect": Effect.Landscaper},
  {"number": 8, "effect": Effect.Temp_Agency},
  {"number": 5, "effect": Effect.Real_Estate_Agent},
  {"number": 5, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Temp_Agency},
  {"number": 13, "effect": Effect.Pool_Manufacturer},
  {"number": 7, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Surveyor},
  {"number": 7, "effect": Effect.Landscaper},
  {"number": 11, "effect": Effect.Surveyor},
  {"number": 9, "effect": Effect.Temp_Agency},
  {"number": 4, "effect": Effect.Real_Estate_Agent},
  {"number": 4, "effect": Effect.Bis},
  {"number": 6, "effect": Effect.Bis},
  {"number": 13, "effect": Effect.Bis},
  {"number": 4, "effect": Effect.Landscaper},
  {"number": 8, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Bis},
  {"number": 6, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Pool_Manufacturer},
  {"number": 9, "effect": Effect.Real_Estate_Agent},
  {"number": 2, "effect": Effect.Real_Estate_Agent},
  {"number": 15, "effect": Effect.Real_Estate_Agent},
  {"number": 7, "effect": Effect.Landscaper},
  {"number": 3, "effect": Effect.Surveyor},
  {"number": 8, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Bis},
  {"number": 11, "effect": Effect.Landscaper},
  {"number": 6, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Surveyor},
  {"number": 8, "effect": Effect.Bis},
  {"number": 15, "effect": Effect.Landscaper},
  {"number": 7, "effect": Effect.Bis},
  {"number": 10, "effect": Effect.Surveyor},
  {"number": 4, "effect": Effect.Pool_Manufacturer},
  {"number": 15, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Landscaper},
  {"number": 5, "effect": Effect.Real_Estate_Agent},
  {"number": 7, "effect": Effect.Real_Estate_Agent},
  {"number": 2, "effect": Effect.Surveyor},
  {"number": 7, "effect": Effect.Temp_Agency},
  {"number": 9, "effect": Effect.Real_Estate_Agent},
  {"number": 1, "effect": Effect.Landscaper},
  {"number": 12, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Landscaper},
  {"number": 13, "effect": Effect.Surveyor},
  {"number": 9, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Surveyor},
  {"number": 3, "effect": Effect.Pool_Manufacturer},
  {"number": 11, "effect": Effect.Real_Estate_Agent},
  {"number": 8, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Pool_Manufacturer},
  {"number": 11, "effect": Effect.Real_Estate_Agent},
  {"number": 3, "effect": Effect.Temp_Agency},
  {"number": 4, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Real_Estate_Agent},
  {"number": 11, "effect": Effect.Surveyor},
  {"number": 5, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Real_Estate_Agent},
  {"number": 8, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Bis},
  {"number": 10, "effect": Effect.Real_Estate_Agent},
  {"number": 10, "effect": Effect.Surveyor},
];

const n1: BonusCard[] = [
  {"requirements": [{"1": 6}], "first_points": 8, "other_points": 4, "completed": false},
  {"requirements": [{"4": 2}], "first_points": 6, "other_points": 3, "completed": false},
  {"requirements": [{"3": 3}], "first_points": 8, "other_points": 4, "completed": false},
  {"requirements": [{"5": 2}], "first_points": 8, "other_points": 4, "completed": false},
  {"requirements": [{"2": 4}], "first_points": 8, "other_points": 4, "completed": false},
  {"requirements": [{"6": 2}], "first_points": 10, "other_points": 6, "completed": false},
];

const n2: BonusCard[] = [
  {"requirements": [{"1": 3}, {"6": 1}], "first_points": 11, "other_points": 6, "completed": false},
  {"requirements": [{"4": 1}, {"1": 3}], "first_points": 9, "other_points": 5, "completed": false},
  {"requirements": [{"3": 1}, {"6": 1}], "first_points": 8, "other_points": 4, "completed": false},
  {"requirements": [{"4": 1}, {"5": 1}], "first_points": 9, "other_points": 5, "completed": false},
  {"requirements": [{"3": 2}, {"4": 1}], "first_points": 12, "other_points": 7, "completed": false},
  {"requirements": [{"5": 1}, {"2": 2}], "first_points": 10, "other_points": 6, "completed": false},
];

const n3: BonusCard[] = [
  {"requirements": [{"2": 1}, {"3": 1}, {"5": 1}], "first_points": 13, "other_points": 7, "completed": false},
  {"requirements": [{"1": 1}, {"2": 2}, {"3": 1}], "first_points": 11, "other_points": 6, "completed": false},
  {"requirements": [{"1": 1}, {"4": 1}, {"5": 1}], "first_points": 13, "other_points": 7, "completed": false},
  {"requirements": [{"3": 1}, {"4": 1}], "first_points": 7, "other_points": 3, "completed": false},
  {"requirements": [{"1": 1}, {"2": 1}, {"6": 1}], "first_points": 12, "other_points": 7, "completed": false},
  {"requirements": [{"2": 1}, {"5": 1}], "first_points": 7, "other_points": 3, "completed": false},
];

const Game = () => {
  const [index, setIndex] = useState(0);
  const [stackOne, setStackOne] = useState<GameCard[]>();
  const [stackTwo, setStackTwo] = useState<GameCard[]>();
  const [stackThree, setStackThree] = useState<GameCard[]>();
  const [bonusOne, setBonusOne] = useState<BonusCard>();
  const [bonusTwo, setBonusTwo] = useState<BonusCard>();
  const [bonusThree, setBonusThree] = useState<BonusCard>();

  useEffect(() => {
    shuffleCards(DECK);
		selectRandomBonusCards();
  }, []);

  const shuffleCards = (deck: GameCard[]) => {
    let last_index = deck.length;
    let temp: GameCard;
    let random: number;
  
    while (last_index > 0) {
      random = Math.floor(Math.random() * last_index--);
  
      temp = deck[last_index];
      deck[last_index] = deck[random];
      deck[random] = temp;
    }
  
    setStackOne(deck.slice(0, 27));
    setStackTwo(deck.slice(27, 54));
    setStackThree(deck.slice(54, 81));
  };

	const selectRandomBonusCards = () => {
		setBonusOne(n1[Math.floor(Math.random() * 6)]);
		setBonusTwo(n2[Math.floor(Math.random() * 6)]);
		setBonusThree(n3[Math.floor(Math.random() * 6)]);
	};

	const displayCards = (stack: GameCard[]) => {
		return (
			<Grid item xs={4}>
				<Box>
					<Card sx={{ m: "0 auto", maxWidth: "13rem" }}>
						<CardMedia sx={{ display: "flex", height: "6.2rem", justifyContent: "space-around", alignItems: "center" }}>
							{EFFECT_ICON_MAP.get(stack[index].effect)}
						</CardMedia>
						<Divider />
						<Box sx={{ ml: "1.2rem", display: "flex", justifyContent: "center" }}>
							<Typography variant="h2">{stack[index+1].number}</Typography>
							{EFFECT_MINI_ICON_MAP.get(stack[index+1].effect)}
						</Box>
					</Card>
				</Box>
			</Grid>
		);
	};

	const displayBonus = (bonus: BonusCard, bonusName: string) => {
		return (
			<Grid item xs={4}>
				<Card sx={{ m: "0 auto", maxWidth: "8rem" }} onClick={() => {bonus.completed = true}}>
					<Typography sx={{ textAlign: "center" }}>{bonusName}</Typography>
					<Divider />
					{bonus.requirements.map((req, i) => (
						<Box key={i}>
							<Typography sx={{ textAlign: "center" }}>{req["6"] && req["6"] + " size 6's"}</Typography>
							<Typography sx={{ textAlign: "center" }}>{req["5"] && req["5"] + " size 5's"}</Typography>
							<Typography sx={{ textAlign: "center" }}>{req["4"] && req["4"] + " size 4's"}</Typography>
							<Typography sx={{ textAlign: "center" }}>{req["3"] && req["3"] + " size 3's"}</Typography>
							<Typography sx={{ textAlign: "center" }}>{req["2"] && req["2"] + " size 2's"}</Typography>
							<Typography sx={{ textAlign: "center" }}>{req["1"] && req["1"] + " size 1's"}</Typography>
						</Box>
					))}
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
						{bonus?.completed ? <Typography variant="h6">X</Typography> : <Typography variant="h6">{bonus?.first_points}</Typography>}
						<Typography variant="caption">{" | "}</Typography>
						<Typography variant="h6">{bonus?.other_points}</Typography>
					</Box>
				</Card>
			</Grid>
		);
	};

  return (
    <Grid container marginTop="0.5rem">
			{stackOne && displayCards(stackOne)}
			{stackTwo && displayCards(stackTwo)}
			{stackThree && displayCards(stackThree)}
			<Grid item xs={12}>
				<Divider sx={{ m: "0.1rem", visibility: "hidden" }} />
			</Grid>
			{bonusOne && displayBonus(bonusOne, "n1")}
			{bonusTwo && displayBonus(bonusTwo, "n2")}
			{bonusThree && displayBonus(bonusThree, "n3")}
			<Grid item xs={12}>
				<Divider sx={{ m: "0.1rem", visibility: "hidden" }} />
			</Grid>
			<Grid item xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ width: "10rem" }}
					onClick={() => {
						setIndex(0);
						shuffleCards(DECK);
					}}
				>
					Reshuffle
				</Button>
				<Typography sx={{ width: "8rem", textAlign: "center", color: "#666670" }}>{(index+1).toString() + " of 26"}</Typography>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ width: "10rem" }}
					disabled={index >= 25}
					onClick={() => setIndex(index+1)}
				>
					Flip
				</Button>
			</Grid>
		</Grid>
  );
};

export default Game;

	