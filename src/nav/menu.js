import React from "react";
import Grid from "@mui/material/Grid";
import { Food } from "../Components/Food";
import Paper from "@mui/material/Paper";

export const Menu = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 340,
                  width: 200,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Food />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
