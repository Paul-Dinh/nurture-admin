import { Theme } from "@mui/material";

import Backdrop from "./Backdrop";
import Badge from "./Badge";
import Button from "./Button";
import Chip from "./Chip";
import Circular from "./Circular";
import Divider from "./Divider";
import Form from "./Form";
import FormControl from "./FormControl";
import InputBase from "./InputBase";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Progress from "./Progress";
import Table from "./Table";
import Tabs from "./Tabs";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Backdrop(theme),
    Button(theme),
    Form(theme),
    Badge(theme),
    Tabs(theme),
    Table(theme),
    Chip(theme),
    Circular(theme),
    FormControl(theme),
    Menu(theme),
    Progress(theme),
    InputBase(),
    MenuItem(),
    Divider(theme)
  );
}
