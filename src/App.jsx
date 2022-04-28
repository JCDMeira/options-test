// import * as S from "./app";
import "./base/style.css";

function App() {
  // const options = ["opção 1", "opção 2", "opção 3", "opção 4"];

  return (
    <div>
      <div class="select" tabindex="1">
        <input
          class="options-select"
          name="selectors"
          type="radio"
          id="opt1"
          checked
        />
        <label for="opt1" class="option">
          Web Design
        </label>
        <input class="options-select" name="selectors" type="radio" id="opt2" />
        <label for="opt2" class="option">
          Web Development
        </label>
        <input class="options-select" name="selectors" type="radio" id="opt3" />
        <label for="opt3" class="option">
          SEO
        </label>
        <input class="options-select" name="selectors" type="radio" id="opt4" />
        <label for="opt4" class="option">
          UI / UX Designer
        </label>
        <input class="options-select" name="selectors" type="radio" id="opt5" />
        <label for="opt5" class="option">
          Graphic Designer
        </label>
        <input class="options-select" name="selectors" type="radio" id="opt6" />
        <label for="opt6" class="option">
          Video Editor
        </label>
      </div>
    </div>
  );
}

export default App;
