import { Paper, Container, Group, Burger, Button, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export default function AppHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Paper shadow="xs" p="md">
      <Container size="xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <h2 style={{ margin: 0 }}>🚀 MyApp</h2>

        {/* Navigation Links (Hidden on Mobile) */}
        <Group spacing="md" visibleFrom="sm">
          <Button variant="subtle">Home</Button>
          <Button variant="subtle">About</Button>
          <Button variant="subtle">Contact</Button>
        </Group>

        {/* Dark Mode Toggle */}
        <Button variant="light" onClick={() => toggleColorScheme()}>
          {colorScheme === "light" ? <IconMoon size={20} /> : <IconSun size={20} />}
        </Button>

        {/* Mobile Menu Toggle */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
      </Container>
    </Paper>
  );
}
