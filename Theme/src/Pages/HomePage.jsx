import { Container, Title, Text, Paper } from "@mantine/core";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "./ThemeToggle";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <Container size="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Paper shadow="xl" p="xl" radius="md" withBorder style={{ background: theme === "light" ? "#fff" : "#1A1B1E" }}>
        <Title order={1} style={{ color: theme === "light" ? "#000" : "#fff" }}></Title>
        <Text style={{ color: theme === "light" ? "#333" : "#aaa" }}>
          Click the button below to switch themes!
        </Text>
        <ThemeToggle />
      </Paper>
    </Container>
  );
};

export default HomePage;
