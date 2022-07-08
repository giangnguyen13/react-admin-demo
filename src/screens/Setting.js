// in src/Settings.js
import * as React from "react";
import { Card, CardContent } from "@mui/material";
import { Title } from "react-admin";

const Settings = () => (
  <Card>
    <Title title='Custom route' />
    <CardContent>
      Custom route, no data source, fully customizable page based on user
      choice.
    </CardContent>
  </Card>
);

export default Settings;
