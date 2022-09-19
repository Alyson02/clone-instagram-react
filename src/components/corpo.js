import Feed from "./feed";
import SideBar from "./sideBar";

export default function Corpo() {
  return (
    <main className="principal">
      <Feed />
      <SideBar/>
    </main>
  );
}
