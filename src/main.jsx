import "./index.css";
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, BlockText, Colors, Heading, setDarkModeActivation, Checkbox, Hr, Container, Badge, Text } from "nes-ui-react";

function App() {

  const [barYesChecked, setBarYesChecked] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => setDarkModeActivation(darkMode), [darkMode]);

  return (
    <>
      <Heading size='large' centered>Typography</Heading>
      <Button color="warning" borderInverted onClick={toggleDarkMode}>
        Dark mode on/off
      </Button>
      <Hr color="primary" height={1} />
      <Container title='&lt;Checkbox&gt;'>
        <Checkbox name="bar" value="yes" label="Yes" checked={barYesChecked} onChange={setBarYesChecked} />
        <Text size="xlarge">Badges indicate a status, or can represent hash tags, categories etc. The fontColor and bgColor attributes control the colors:</Text>
        <Badge backgroundColor="primary" text="Primary" color='#fff' />
        <BlockText shadow shadowInverted backgroundColor={Colors.color38} style={{ margin: 0 }}>
          color38
        </BlockText>
      </Container>
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#app")).render(<App />);
