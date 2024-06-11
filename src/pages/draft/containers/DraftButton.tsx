import Button from "@mui/material/Button/Button";
import ButtonBase from "@mui/material/ButtonBase/ButtonBase";
import IconButton from "@mui/material/IconButton";

const DraftButton = () => {
  return (
    <div className="draft-page draft-button">
      <h2>MUI &lt;Button/&gt; component</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Component</th>
            <th style={{ width: "150px" }}>Variant</th>
            <th style={{ width: "150px" }}>Options</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>contained</td>
            <td></td>
            <td>
              <Button variant="contained">Contained button</Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>contained</td>
            <td>disabled</td>
            <td>
              <Button variant="contained" color="secondary" disabled>
                Contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>outlined</td>
            <td></td>
            <td>
              <Button variant="outlined">outlined button</Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>outlined</td>
            <td>color=&quot;secondary&quot;</td>
            <td>
              <Button variant="outlined" color="secondary">
                outlined button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td></td>
            <td>
              <Button variant="text">Text button</Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td>color=&quot;secondary&quot;</td>
            <td>
              <Button variant="text" color="secondary">
                Text button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text, outlined, contained</td>
            <td>href</td>
            <td>
              <Button variant="text" href="#">
                Text button
              </Button>
              <Button variant="outlined" href="#">
                outlined button
              </Button>
              <Button variant="contained" href="#">
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td>color</td>
            <td>
              <Button variant="text" color="inherit">
                Inherit
              </Button>
              <Button variant="text" color="error">
                Error
              </Button>
              <Button variant="text" color="info">
                Info
              </Button>
              <Button variant="text" color="primary">
                primary
              </Button>
              <Button variant="text" color="secondary">
                secondary
              </Button>
              <Button variant="text" color="success">
                success
              </Button>
              <Button variant="text" color="warning">
                warning
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>outlined</td>
            <td>color</td>
            <td>
              <Button variant="outlined" color="inherit">
                Inherit
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
              <Button variant="outlined" color="info">
                Info
              </Button>
              <Button variant="outlined" color="primary">
                primary
              </Button>
              <Button variant="outlined" color="secondary">
                secondary
              </Button>
              <Button variant="outlined" color="success">
                success
              </Button>
              <Button variant="outlined" color="warning">
                warning
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>contained</td>
            <td>color</td>
            <td>
              <Button variant="contained" color="inherit">
                Inherit
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
              <Button variant="contained" color="primary">
                primary
              </Button>
              <Button variant="contained" color="secondary">
                secondary
              </Button>
              <Button variant="contained" color="success">
                success
              </Button>
              <Button variant="contained" color="warning">
                warning
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text, outlined, contained</td>
            <td>disabled</td>
            <td>
              <Button variant="text" disabled>
                Text button
              </Button>
              <Button variant="outlined" disabled>
                outlined button
              </Button>
              <Button variant="contained" disabled>
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td>size large</td>
            <td>
              <Button variant="text" size="large">
                Text button
              </Button>
              <Button variant="outlined" size="large">
                outlined button
              </Button>
              <Button variant="contained" size="large">
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td>size medium</td>
            <td>
              <Button variant="text" size="medium">
                Text button
              </Button>
              <Button variant="outlined" size="medium">
                outlined button
              </Button>
              <Button variant="contained" size="medium">
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text</td>
            <td>size small</td>
            <td>
              <Button variant="text" size="small">
                Text button
              </Button>
              <Button variant="outlined" size="small">
                outlined button
              </Button>
              <Button variant="contained" size="small">
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text, outlined, contained</td>
            <td>startIcon</td>
            <td>
              <Button variant="text" startIcon="♥">
                Text button
              </Button>
              <Button variant="outlined" startIcon="♥">
                outlined button
              </Button>
              <Button variant="contained" startIcon="♥">
                contained button
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;Button/&gt;</code>
            </td>
            <td>text, outlined, contained</td>
            <td>endIcon</td>
            <td>
              <Button variant="text" endIcon="♥">
                Text button
              </Button>
              <Button variant="outlined" endIcon="♥">
                outlined button
              </Button>
              <Button variant="contained" endIcon="♥">
                contained button
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>MUI &lt;ButtonBase/&gt; component</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>Component</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&lt;ButtonBase/&gt;</code>
            </td>
            <td>
              <ButtonBase>ButtonBase</ButtonBase>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>MUI &lt;IconButton/&gt; component</h2>
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
              <code>&lt;IconButton/&gt;</code>
            </td>
            <td>colors</td>
            <td>
              <IconButton color="default">♥</IconButton>
              <IconButton color="inherit">♥</IconButton>
              <IconButton color="primary">♥</IconButton>
              <IconButton color="secondary">♥</IconButton>
              <IconButton color="error">♥</IconButton>
              <IconButton color="info">♥</IconButton>
              <IconButton color="success">♥</IconButton>
              <IconButton color="warning">♥</IconButton>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;IconButton/&gt;</code>
            </td>
            <td>disabled</td>
            <td>
              <IconButton color="default" disabled>
                ♥
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;IconButton/&gt;</code>
            </td>
            <td>edge</td>
            <td>
              <IconButton color="default" edge="end">
                ♥
              </IconButton>
              <IconButton color="default" edge="start">
                ♥
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;IconButton/&gt;</code>
            </td>
            <td>size</td>
            <td>
              <IconButton color="default" size="large">
                ♥
              </IconButton>
              <IconButton color="default" size="medium">
                ♥
              </IconButton>
              <IconButton color="default" size="small">
                ♥
              </IconButton>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h2>Native button</h2>
      <button>Native button</button>
    </div>
  );
};

export default DraftButton;
