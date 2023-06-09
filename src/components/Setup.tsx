import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Setup() {
  const navigate = useNavigate();
  const [version, setVersion] = useState("base");
  const [useAdvancedCityPlans, setUseAdvancedCityPlans] = useState(false);
  const [versionOnlyCityPlans, setVersionOnlyCityPlans] = useState(false);

  return (
    <Box sx={{ p: "1.75rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", gap: "4rem", mx: "auto" }}>
          <Box>
            <RadioGroup
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            >
              Version
              <FormControlLabel
                value="base"
                control={<Radio color="secondary" />}
                label="Base"
              />
              <FormControlLabel
                value="spring"
                control={<Radio color="secondary" />}
                label="Spring"
              />
              <FormControlLabel
                value="summer"
                control={<Radio color="secondary" />}
                label="Summer"
              />
              <FormControlLabel
                value="halloween"
                control={<Radio color="secondary" />}
                label="Halloween"
              />
              <FormControlLabel
                value="winter"
                control={<Radio color="secondary" />}
                label="Winter"
              />
            </RadioGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "16rem",
              mt: "1.5rem",
              gap: "1rem",
            }}
          >
            <FormControlLabel
              value="advCityPlans"
              control={
                <Checkbox
                  color="secondary"
                  checked={useAdvancedCityPlans}
                  onChange={() =>
                    setUseAdvancedCityPlans(!useAdvancedCityPlans)
                  }
                />
              }
              label="Mix in Advanced City Plans"
            />
            <FormControlLabel
              value="advCityPlans"
              disabled={version === "base"}
              control={
                <Checkbox
                  color="secondary"
                  checked={versionOnlyCityPlans}
                  onChange={() =>
                    setVersionOnlyCityPlans(!versionOnlyCityPlans)
                  }
                />
              }
              label="Use Version specific n3 City Plans only"
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/game", {
              state: {
                version: version,
                useAdvancedCityPlans,
                versionOnlyCityPlans,
              },
            });
          }}
          sx={{ width: "14rem", mx: "auto" }}
        >
          Begin
        </Button>
      </Box>
    </Box>
  );
}
