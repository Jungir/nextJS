import withLayout from "../components/layoutHOC";
function About() {
    return (     
        <div>
          <p>This is the about page. With HOC</p>
        </div>
    );
  }
export default withLayout(About);
  