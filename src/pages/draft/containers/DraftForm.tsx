import {
  Checkbox,
  FilledInput,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const DraftFormControl = () => {
  return (
    <div className="draft-page draft-form">
      <h2>My component</h2>
      <h2>MUI &lt;TextField/&gt; component</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Component</th>
            <th style={{ width: "150px" }}>Options</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;TextField/&gt;</code>
            </td>
            <td></td>
            <td>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder="This is placeholder"
              />
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                placeholder="This is placeholder"
              />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                placeholder="This is placeholder"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;TextField/&gt;</code>
            </td>
            <td>error</td>
            <td>
              <TextField
                error
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder="This is placeholder"
              />
              <TextField
                error
                id="filled-basic"
                label="Filled"
                variant="filled"
                placeholder="This is placeholder"
              />
              <TextField
                error
                id="standard-basic"
                label="Standard"
                variant="standard"
                placeholder="This is placeholder"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;TextField/&gt;</code>
            </td>
            <td>helperText</td>
            <td>
              <TextField
                error
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                helperText="Incorrect entry."
              />
              <TextField
                error
                id="filled-basic"
                label="Filled"
                variant="filled"
                helperText="Incorrect entry."
              />
              <TextField
                error
                id="standard-basic"
                label="Standard"
                variant="standard"
                helperText="Incorrect entry."
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>Input Base</td>
          </tr>
          <tr>
            <td>
              <code>&lt;InputBase/&gt;</code>
            </td>
            <td></td>
            <td>
              <InputBase />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>Options</td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td></td>
            <td>
              <Input placeholder="This is placeholder" />
              <Input placeholder="This is placeholder" />
              <br />
              <FilledInput placeholder="This is placeholder" />
              <FilledInput placeholder="This is placeholder" />
              <br />
              <OutlinedInput placeholder="This is placeholder" />
              <OutlinedInput placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>error</td>
            <td>
              <Input placeholder="This is placeholder" error />
              <br />
              <FilledInput placeholder="This is placeholder" error />
              <br />
              <OutlinedInput placeholder="This is placeholder" error />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>multiline</td>
            <td>
              <Input multiline minRows={2} placeholder="This is placeholder" />
              <br />
              <FilledInput multiline minRows={2} placeholder="This is placeholder" />
              <br />
              <OutlinedInput multiline minRows={2} placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
            </td>
            <td>disableUnderline</td>
            <td>
              <Input disableUnderline placeholder="This is placeholder" />
              <br />
              <FilledInput disableUnderline placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>disabled</td>
            <td>
              <Input disabled placeholder="This is placeholder" />
              <br />
              <FilledInput disabled placeholder="This is placeholder" />
              <br />
              <OutlinedInput disabled placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>disabled</td>
            <td>
              <Input disabled placeholder="This is placeholder" />
              <br />
              <FilledInput disabled placeholder="This is placeholder" />
              <br />
              <OutlinedInput disabled placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>startAdornment</td>
            <td>
              <Input
                startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
              <br />
              <FilledInput
                startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
              <br />
              <OutlinedInput
                startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>endAdornment</td>
            <td>
              <Input
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
              <br />
              <FilledInput
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
              <br />
              <OutlinedInput
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                placeholder="This is placeholder"
              />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>size</td>
            <td>
              <Input size="medium" placeholder="This is placeholder" />
              <Input size="small" placeholder="This is placeholder" />
              <br />
              <FilledInput size="medium" placeholder="This is placeholder" />
              <FilledInput size="small" placeholder="This is placeholder" />
              <br />
              <OutlinedInput size="medium" placeholder="This is placeholder" />
              <OutlinedInput size="small" placeholder="This is placeholder" />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Input/&gt;</code>
              <code>&lt;FilledInput/&gt;</code>
              <code>&lt;OutlinedInput/&gt;</code>
            </td>
            <td>margin</td>
            <td>
              <Input margin="dense" placeholder="This is placeholder" />
              <Input margin="none" placeholder="This is placeholder" />
              <br />
              <FilledInput margin="dense" placeholder="This is placeholder" />
              <FilledInput margin="none" placeholder="This is placeholder" />
              <br />
              <OutlinedInput margin="dense" placeholder="This is placeholder" />
              <OutlinedInput margin="none" placeholder="This is placeholder" />
            </td>
          </tr>
        </tbody>
      </table>
      <h2>MUI &lt;Checbox/&gt; component</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Component</th>
            <th style={{ width: "150px" }}>Options</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;Checkbox/&gt;</code>
            </td>
            <td></td>
            <td>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Checkbox/&gt;</code>
            </td>
            <td>
              with <code>&lt;FormControlLabel/&gt;</code>
            </td>
            <td>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="top"
                  control={<Checkbox />}
                  label="Top"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Start"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Checkbox />}
                  label="Bottom"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="End"
                  labelPlacement="end"
                />
              </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Checkbox/&gt;</code>
            </td>
            <td>color</td>
            <td>
              <Checkbox color="default" defaultChecked />
              <Checkbox color="error" defaultChecked />
              <Checkbox color="info" defaultChecked />
              <Checkbox color="primary" defaultChecked />
              <Checkbox color="secondary" defaultChecked />
              <Checkbox color="success" defaultChecked />
              <Checkbox color="warning" defaultChecked />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Checkbox/&gt;</code>
            </td>
            <td>disabled</td>
            <td>
              <Checkbox disabled defaultChecked />
              <Checkbox disabled />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Checkbox/&gt;</code>
            </td>
            <td>size</td>
            <td>
              <Checkbox size="small" />
              <Checkbox size="medium" />
            </td>
          </tr>
        </tbody>
      </table>
      <h2>MUI &lt;Radio/&gt; component</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Component</th>
            <th style={{ width: "150px" }}>Options</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;Radio/&gt;</code>
            </td>
            <td></td>
            <td>
              <Radio />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Radio/&gt;</code>
            </td>
            <td>
              with <code>&lt;RadioGroup/&gt;</code>
            </td>
            <td>
              <RadioGroup defaultValue="end" row>
                <FormControlLabel
                  value="top"
                  control={<Radio />}
                  label="Top"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="start"
                  control={<Radio />}
                  label="Start"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Radio />}
                  label="Bottom"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="End"
                  labelPlacement="end"
                />
              </RadioGroup>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Radio/&gt;</code>
            </td>
            <td>color</td>
            <td>
              <Radio color="default" defaultChecked />
              <Radio color="error" defaultChecked />
              <Radio color="info" defaultChecked />
              <Radio color="primary" defaultChecked />
              <Radio color="secondary" defaultChecked />
              <Radio color="success" defaultChecked />
              <Radio color="warning" defaultChecked />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Radio/&gt;</code>
            </td>
            <td>disabled</td>
            <td>
              <Radio disabled defaultChecked />
              <Radio disabled />
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Radio/&gt;</code>
            </td>
            <td>size</td>
            <td>
              <Radio size="small" />
              <Radio size="medium" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DraftFormControl;
