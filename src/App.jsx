    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { Forms } from "./components/Forms/forms.jsx";
    import ExibirUsuarios from "./pages/ExibirCards/ExibirUsuarios.jsx";
    import { SobreNos } from "./components/SobreNos/SobreNos.jsx";
    function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/usuarios" element={<ExibirUsuarios />} />
            <Route path="/sobrenos" element={<SobreNos />} />
        </Routes>
        </Router>
    );
    }

    export default App;
