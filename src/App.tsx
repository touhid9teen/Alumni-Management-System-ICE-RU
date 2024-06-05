import Tooltipe from "./elements/Tooltipe";
const App = () => {
    return (
        <div className="w-80 h-80">
            <h1>This is Alumni Management Project</h1>
            <Tooltipe content="This is a tooltip" position="bottom">
                <button>Hover over me</button>
            </Tooltipe>
        </div>
    );
};

export default App;
