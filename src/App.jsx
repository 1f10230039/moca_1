import AppRoutes from "./routes/AppRoutes";
import TabMenu from "./components/tab-menu/TabMenu";

export default function App() {
  return (
    <>
      <main>
        <AppRoutes />
      </main>
      <TabMenu />
    </>
  );
}