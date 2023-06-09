import {
  Button,
  Card,
  Divider,
  Grid,
  Link,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  EFFECT_ICON_MAP,
  EFFECT_LARGE_ICON_MAP,
  EFFECT_MINI_ICON_MAP,
} from "./effect";
import {
  GameCard,
  BonusCard,
  DECK,
  n1,
  n2,
  n3,
  n1advanced,
  n2advanced,
  AdvancedBonusCard,
  n3spring,
  n3halloween,
  n3summer,
  n3winter,
} from "./cards";
import { useLocation, useNavigate } from "react-router";
import {
  defaultTheme,
  halloweenTheme,
  springTheme,
  summerTheme,
  winterTheme,
} from "../util/theme";

export default function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const screenLargerThanSM = useMediaQuery(theme.breakpoints.up("md"));
  const [index, setIndex] = useState(0);
  const [stackOne, setStackOne] = useState<GameCard[]>();
  const [stackTwo, setStackTwo] = useState<GameCard[]>();
  const [stackThree, setStackThree] = useState<GameCard[]>();
  const [bonusOne, setBonusOne] = useState<BonusCard | AdvancedBonusCard>();
  const [bonusTwo, setBonusTwo] = useState<BonusCard | AdvancedBonusCard>();
  const [bonusThree, setBonusThree] = useState<BonusCard | AdvancedBonusCard>();
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

  useEffect(() => {
    const themeMap = new Map();
    themeMap.set("base", defaultTheme);
    themeMap.set("spring", springTheme);
    themeMap.set("summer", summerTheme);
    themeMap.set("halloween", halloweenTheme);
    themeMap.set("winter", winterTheme);
    if (themeMap.has(location.state?.version))
      setSelectedTheme(themeMap.get(location.state.version));

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
    let n1s: (AdvancedBonusCard | BonusCard)[] = n1;
    let n2s: (AdvancedBonusCard | BonusCard)[] = n2;
    let n3s: (AdvancedBonusCard | BonusCard)[] = n3;

    if (location.state?.useAdvancedCityPlans) {
      n1s = n1s.concat(n1advanced);
      n2s = n2s.concat(n2advanced);
    }

    if (location.state?.versionOnlyCityPlans) {
      const bonusCardsMap = new Map();
      bonusCardsMap.set("spring", n3spring);
      bonusCardsMap.set("summer", n3summer);
      bonusCardsMap.set("halloween", n3halloween);
      bonusCardsMap.set("winter", n3winter);
      if (bonusCardsMap.has(location.state.version))
        n3s = bonusCardsMap.get(location.state.version);
    }

    setBonusOne(n1s[Math.floor(Math.random() * n1s.length)]);
    setBonusTwo(n2s[Math.floor(Math.random() * n2s.length)]);
    setBonusThree(n3s[Math.floor(Math.random() * n3s.length)]);
  };

  const displayCards = (stack: GameCard[]) => {
    const [ICON_MAP, MAX_WID] = screenLargerThanSM
      ? [EFFECT_LARGE_ICON_MAP, "21rem"]
      : [EFFECT_ICON_MAP, "14rem"];
    return (
      <Grid item xs={4}>
        <Box>
          <Card
            sx={{
              m: "0 auto",
              maxWidth: MAX_WID,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {ICON_MAP.get(stack[index].effect)}
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant={screenLargerThanSM ? "h1" : "h2"}>
                {stack[index + 1].number}
              </Typography>
              {EFFECT_MINI_ICON_MAP.get(stack[index + 1].effect)}
            </Box>
          </Card>
        </Box>
      </Grid>
    );
  };

  const DIVIDER_SPACING = screenLargerThanSM ? "3rem" : "0.1rem";

  return (
    <ThemeProvider theme={selectedTheme}>
      <Box sx={{ overflowX: "hidden", height: "100%" }} bgcolor="bg.main">
        <Grid container marginTop="0.5rem">
          <Grid
            item
            xs={12}
            sx={{ textAlign: "left", py: "0.25rem", px: "0.75rem" }}
          >
            <Link
              sx={{ cursor: "pointer" }}
              onClick={() => {
                if (window.confirm("Are you sure you want to leave?"))
                  navigate("/");
              }}
            >
              {"< Back"}
            </Link>
          </Grid>
          {bonusOne && <Bonus bonus={bonusOne} bonusName="n1" />}
          {bonusTwo && <Bonus bonus={bonusTwo} bonusName="n2" />}
          {bonusThree && <Bonus bonus={bonusThree} bonusName="n3" />}
          <Grid item xs={12}>
            <Divider sx={{ m: DIVIDER_SPACING, visibility: "hidden" }} />
          </Grid>
          {stackOne && displayCards(stackOne)}
          {stackTwo && displayCards(stackTwo)}
          {stackThree && displayCards(stackThree)}
          <Grid item xs={12}>
            <Divider sx={{ m: DIVIDER_SPACING, visibility: "hidden" }} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
            <Typography
              sx={{ width: "8rem", textAlign: "center", color: "#666670" }}
            >
              {(index + 1).toString() + " of 26"}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                width: "5rem",
                fontSize: "1.3rem",
                pt: 0,
                pb: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
              disabled={index <= 0}
              onClick={() => setIndex(index - 1)}
            >
              {"<"}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                width: "5rem",
                fontSize: "1.3rem",
                pt: 0,
                pb: 0,
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
              disabled={index >= 25}
              onClick={() => setIndex(index + 1)}
            >
              {">"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

const Bonus = ({
  bonus,
  bonusName,
}: {
  bonus: BonusCard | AdvancedBonusCard;
  bonusName: string;
}) => {
  const [complete, setComplete] = useState(false);
  const theme = useTheme();
  const screenLargerThanSM = useMediaQuery(theme.breakpoints.up("md"));
  const DISP_WID = screenLargerThanSM ? "18rem" : "14rem";
  const BONUS_ICON_WID = screenLargerThanSM ? "6rem" : "2rem";
  const Icon = "icon" in bonus && bonus.icon ? bonus.icon : "svg";

  const displayBonusBoxes = (requirement: number, number: number) => {
    const arr = [];
    for (const x of Array(number)) {
      arr.push(x);
    }
    const BOX_SIZE = screenLargerThanSM ? "2rem" : "1rem";
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant={screenLargerThanSM ? "h4" : "body1"}
          sx={{ textAlign: "center", mr: "0.25rem" }}
        >
          {requirement + " = "}
        </Typography>
        {arr.map((_, i) => (
          <Box
            key={i}
            sx={{
              mt: "0.25rem",
              border: "1px solid",
              borderColor: "primary.text",
              width: BOX_SIZE,
              height: BOX_SIZE,
            }}
          />
        ))}
        <Typography
          variant={screenLargerThanSM ? "h4" : "body1"}
          sx={{ textAlign: "center" }}
        >
          {"'s"}
        </Typography>
      </Box>
    );
  };

  const displayAdvancedBonus = ({ requirement }: AdvancedBonusCard) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          alignItems: "center",
        }}
      >
        {requirement}
      </Box>
    );
  };

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          m: "0 auto",
          maxWidth: DISP_WID,
          textAlign: "center",
          px: "1px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant={screenLargerThanSM ? "h3" : "body1"}>
            {bonusName}
          </Typography>
          {"icon" in bonus && (
            <Box sx={{ width: BONUS_ICON_WID, height: BONUS_ICON_WID }}>
              <SvgIcon component={Icon} />
            </Box>
          )}
        </Box>
        <Divider />
        {"requirements" in bonus &&
          bonus.requirements.map((req, i) => (
            <Box key={i}>
              {req["6"] && displayBonusBoxes(req["6"], 6)}
              {req["5"] && displayBonusBoxes(req["5"], 5)}
              {req["4"] && displayBonusBoxes(req["4"], 4)}
              {req["3"] && displayBonusBoxes(req["3"], 3)}
              {req["2"] && displayBonusBoxes(req["2"], 2)}
              {req["1"] && displayBonusBoxes(req["1"], 1)}
            </Box>
          ))}
        {"requirement" in bonus && displayAdvancedBonus(bonus)}
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {complete ? (
            <Typography
              variant={screenLargerThanSM ? "h3" : "h6"}
              sx={{ textDecoration: "line-through", color: "#a0a0a070" }}
            >
              {bonus?.first_points}
            </Typography>
          ) : (
            <Typography variant={screenLargerThanSM ? "h3" : "h6"}>
              {bonus?.first_points}
            </Typography>
          )}
          <Typography variant={screenLargerThanSM ? "h5" : "caption"}>
            {" | "}
          </Typography>
          <Typography variant={screenLargerThanSM ? "h3" : "h6"}>
            {bonus?.other_points}
          </Typography>
        </Box>
        <Button
          disabled={complete}
          onClick={() => {
            setComplete(true);
          }}
          color="secondary"
          variant="contained"
          sx={{ mb: 1, py: ".125rem" }}
        >
          Complete
        </Button>
      </Card>
    </Grid>
  );
};
