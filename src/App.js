import "./App.css";
import Header from "./components/Header";
import DownloadButton from "./components/DownloadButton";
import ProgrammingExpertise from "./components/ProgrammingExpertise";
import Education from "./components/Education";
import PersonalInformation from "./components/PersonalInformation";

function App() {
  return (
    <>
      <Header />
      <DownloadButton />
      <ProgrammingExpertise />
      <Education />
      <PersonalInformation />
    </>
  );
}

export default App;
