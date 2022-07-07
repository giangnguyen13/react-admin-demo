// in src/Settings.js
import * as React from "react";
import { Card, CardContent } from "@mui/material";
import { Title } from "react-admin";

const Settings = () => (
  <Card>
    <Title title='Setting' />
    <CardContent>
      This screen is fully customizable based on user choice
    </CardContent>
  </Card>
);

export default Settings;
